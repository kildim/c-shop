import {NewReviewSuccessProps} from './new-review-success-props';
// import {FocusEvent, useEffect, useRef} from 'react';
import useFocusLoop from '../../../../hooks/use-focus-loop';

function NewReviewSuccess(props: NewReviewSuccessProps): JSX.Element {
  const {onClosePopupClick} = props;
  const {firstFocusableElement, lastFocusableElement, handleModalBlur} = useFocusLoop();

  return (
    <div className="modal__content" onBlur={handleModalBlur}>
      <p className="title title--h4">Спасибо за отзыв</p>
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button"
          onClick={onClosePopupClick}
          ref={firstFocusableElement}
        >Вернуться к покупкам
        </button>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClosePopupClick} ref={lastFocusableElement}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </div>
  );
}

export default NewReviewSuccess;
