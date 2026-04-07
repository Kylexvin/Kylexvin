import { useEffect } from 'react';

const useTypingEffect = (elementId) => {
  useEffect(() => {
    const typingElement = document.getElementById(elementId);
    if (!typingElement) return;

    const words = ['Web Developer', 'UI/UX Designer', 'JavaScript Expert', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    function type() {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      typingElement.textContent = currentChar;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        timeout = setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        timeout = setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        timeout = setTimeout(type, 1000);
      }
    }

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, [elementId]);
};

export default useTypingEffect;