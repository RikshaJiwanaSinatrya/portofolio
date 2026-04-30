import { nextTick, onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
  let observer = null;
  let fallbackTimer = null;

  const showElement = (el) => {
    el.classList.add('is-visible');
  };

  const observe = () => {
    const allEls = document.querySelectorAll('[data-animate]');
    
    // Immediate check for elements already in or near viewport
    allEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // If element is already visible or partially visible
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        showElement(el);
      }
    });

    if (typeof IntersectionObserver !== 'undefined') {
      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            showElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0,
        rootMargin: '100px 0px', // Observe slightly before they enter
      });

      allEls.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });
    } else {
      allEls.forEach(showElement);
    }
    
    // Safety fallback: if anything is still hidden after 1.5s, show it anyway
    fallbackTimer = setTimeout(() => {
      document.querySelectorAll('[data-animate]:not(.is-visible)').forEach(showElement);
    }, 1500);
  };

  onMounted(() => {
    nextTick(() => {
      // Run once immediately
      observe();
      // Run again after transition might have finished
      setTimeout(observe, 400);
    });
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (fallbackTimer) {
      clearTimeout(fallbackTimer);
    }
  });

  return { observe };
}

export function useTypingEffect(texts, options = {}) {
  const {
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 2000,
  } = options;

  let displayText = '';
  let currentIndex = 0;
  let isDeleting = false;
  let timeout = null;

  const tick = () => {
    const el = document.querySelector('.typing-text');
    if (!el) {
      // If element is gone (navigation), stop
      stop();
      return;
    }

    const currentText = texts[currentIndex];

    if (isDeleting) {
      displayText = currentText.substring(0, displayText.length - 1);
    } else {
      displayText = currentText.substring(0, displayText.length + 1);
    }

    el.textContent = displayText;

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && displayText === currentText) {
      delay = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && displayText === '') {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
    }

    timeout = setTimeout(tick, delay);
  };

  const start = () => {
    stop();
    displayText = '';
    currentIndex = 0;
    isDeleting = false;
    
    // Try to find element, if not found, wait a bit
    const el = document.querySelector('.typing-text');
    if (el) {
      el.textContent = '';
      timeout = setTimeout(tick, typingSpeed);
    } else {
      // Retry once after a short delay
      timeout = setTimeout(() => {
        const retryEl = document.querySelector('.typing-text');
        if (retryEl) {
          retryEl.textContent = '';
          tick();
        }
      }, 200);
    }
  };

  const stop = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  onMounted(() => {
    nextTick(() => {
      start();
    });
  });

  onUnmounted(() => {
    stop();
  });

  return { start, stop };
}
