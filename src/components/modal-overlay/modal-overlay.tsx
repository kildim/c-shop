import {MouseEventHandler, useEffect, useRef} from 'react';
import {ModalOverlayProps} from './modal-overlay-types';

function ModalOverlay(props: ModalOverlayProps): JSX.Element | null {
  const {handleClosePopup = null, children} = props;
  useEffect(() => {
    function keyListener(e: KeyboardEvent) {
      e.stopPropagation();
      const listener = keyListenersMap.get(e.key);
      return listener && listener(e);
    }

    document.addEventListener('keydown', keyListener);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', keyListener);

      document.body.style.overflow = '';
    };
  });
  const handleModalOnClick: MouseEventHandler = (event): void => {
    event.stopPropagation();
    if (handleClosePopup !== null) {
      handleClosePopup();
    }
  };
  const modalRef = useRef<HTMLDivElement>(null);
  const currentElementIndex = useRef(0);

  const handleTabKey = (e: KeyboardEvent) => {
    if (modalRef.current === null || modalRef.current === undefined) {throw new Error('Не могу найти элемент HTML!');}
    const focusableModalElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, input[type="radio"], a[href], textarea, input[type="text"], input[type="checkbox"], select'
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];
    const lastIndex = focusableModalElements.length - 1;

    currentElementIndex.current = Array.prototype.findIndex.call(focusableModalElements, (element) => element === document.activeElement);

    if (e.shiftKey) {
      currentElementIndex.current = currentElementIndex.current - 1;
    } else {
      currentElementIndex.current = currentElementIndex.current + 1;
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      currentElementIndex.current = lastIndex;
    }

    if (!e.shiftKey && document.activeElement === lastElement) {
      currentElementIndex.current = 0;
    }

    focusableModalElements[currentElementIndex.current].focus();
    return e.preventDefault();
  };
  const keyListenersMap = new Map([['Escape', handleClosePopup], ['Tab', handleTabKey]]);

  return (
    <div className="modal is-active" ref={modalRef}>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={handleModalOnClick}></div>
        {children}
      </div>
    </div>
  );
}

export default ModalOverlay;
