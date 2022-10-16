import ReactDOM from 'react-dom';
import {useEffect} from 'react';
import {ModalOverlayProps} from './modal-overlay-types';

function ModalOverlay(props: ModalOverlayProps): JSX.Element | null {
  const {onClosePopup = () => undefined, children} = props;
  useEffect(() => {
    const handleEscKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'Escape')) {
        onClosePopup();
      }
    };
    document.addEventListener('keydown', handleEscKeyDown);
    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [onClosePopup]);

  const MODAL_PORTAL = document.getElementById('modals');
  if (MODAL_PORTAL === null) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        {children}
      </div>
    </div>, MODAL_PORTAL
  );
}

export default ModalOverlay;
