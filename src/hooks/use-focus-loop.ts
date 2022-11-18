import {FocusEventHandler, useEffect, useRef} from 'react';

function useFocusLoop() {
  const firstFocusableElement = useRef<HTMLButtonElement>(null);
  const lastFocusableElement = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (lastFocusableElement.current === null) {
      throw new Error('Элемент не найден');
    }
    lastFocusableElement.current.focus();}, [lastFocusableElement]
  );

  const handleModalBlur: FocusEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (lastFocusableElement.current === null || firstFocusableElement.current === null) {
      throw new Error('Элемент не найден');
    }
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (event.target === firstFocusableElement.current) {
        lastFocusableElement.current.focus();
      }
      if (event.target === lastFocusableElement.current) {
        firstFocusableElement.current.focus();
      }
    }
  };

  return ({
    firstFocusableElement: firstFocusableElement,
    lastFocusableElement: lastFocusableElement,
    handleModalBlur: handleModalBlur
  });
}

export default useFocusLoop;
