import {MouseEventHandler, useEffect, useRef} from 'react';
import {ModalOverlayProps} from './modal-overlay-types';

function ModalOverlay(props: ModalOverlayProps): JSX.Element | null {
  const {onClosePopup = null, children} = props;
  useEffect(() => {
    function keyListener(event: KeyboardEvent) {
      if (event.key === 'Escape' && onClosePopup ) {
        onClosePopup();
      }
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
    if (onClosePopup !== null) {
      onClosePopup();
    }
  };
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="modal is-active" ref={modalRef}>
      <h1 className={'visually-hidden'}>Модальное окно</h1>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={handleModalOnClick}></div>
        {children}
      </div>
    </div>
  );
}

export default ModalOverlay;
