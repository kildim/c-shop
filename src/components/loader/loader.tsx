import ModalOverlay from '../../hocs/modal-overlay';
import React from 'react';

function Loader(): JSX.Element {
  return (
    <ModalOverlay>
      <div className="modal__content">
        <p className="title title--h4">Loading ...</p>
      </div>
    </ModalOverlay>
  );
}

export default Loader;
