import {createRef, SyntheticEvent, useEffect} from 'react';
import {ModalOverlayProps} from './modal-overlay-types';
import ReactDOM from 'react-dom';

function ModalOverlay(props: ModalOverlayProps): JSX.Element | null {
  const {onClosePopup = null, children} = props;
  useEffect(() => {
    function keyListener(e: KeyboardEvent) {
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
  const handleModalOnClick = (event: SyntheticEvent): void => {
    event.stopPropagation();
    if (onClosePopup !== null) {
      onClosePopup();
    }
  };
  const modalRef = createRef<HTMLDivElement>();

  const handleTabKey = (e: KeyboardEvent) => {
    if (modalRef.current === null) {return null;}
    const focusableModalElements = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };
  const keyListenersMap = new Map([['Escape', onClosePopup], ['Tab', handleTabKey]]);

  const MODAL_PORTAL = document.getElementById('modals');
  if (MODAL_PORTAL === null) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal is-active" ref={modalRef}>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={handleModalOnClick}></div>
        {children}
      </div>
    </div>, MODAL_PORTAL
  );
}

export default ModalOverlay;
