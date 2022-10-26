import ModalOverlay from '../../../../hocs/modal-overlay';
import {NewReviewSuccessProps} from './new-review-success-props';

function NewReviewSuccess(props: NewReviewSuccessProps): JSX.Element {
  const {handleClosePopup} = props
  return (
    <ModalOverlay handleClosePopup={handleClosePopup}>
      <div className="modal__content">
        <p className="title title--h4">Спасибо за отзыв</p>
        <svg className="modal__icon" width="80" height="78" aria-hidden="true">
          <use xlinkHref="#icon-review-success"></use>
        </svg>
        <div className="modal__buttons">
          <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={handleClosePopup}>Вернуться к покупкам
          </button>
        </div>
        <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleClosePopup}>
          <svg width="10" height="10" aria-hidden="true">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </button>
      </div>
    </ModalOverlay>
  );
}

export default NewReviewSuccess;
