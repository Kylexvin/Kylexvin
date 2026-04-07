import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.about-content, .timeline-item, .contact-content > div');

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const animate = () => {
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight / 1.3) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', animate);
    animate();
    return () => window.removeEventListener('scroll', animate);
  }, []);
};

export default useScrollAnimation;