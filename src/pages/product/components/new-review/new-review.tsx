import {NewReviewProps} from './new-review-props';
import {ChangeEvent, FormEventHandler, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ThunkAppDispatch} from '../../../../types/thunk-app-dispatch';
import {postReview} from '../../../../services/api/api';
import ModalOverlay from '../../../../hocs/modal-overlay';

function NewReview(props: NewReviewProps): JSX.Element {
  const {handleClosePopup, id} = props;
  const formRef = useRef<HTMLFormElement>(null);
  const [rate, setRate] = useState('0');
  const dispatch = useDispatch();

  const checkValidation = () => {
    let isValid = true;
    const fieldSetEl = formRef.current?.querySelector('.rate');
    const inputDivWrappers = formRef.current?.querySelectorAll('.custom-input');
    const textareaDivWrapper = formRef.current?.querySelector('.custom-textarea');

    if (textareaDivWrapper === null || textareaDivWrapper === undefined) {
      throw new Error('Не могу найти элемент HTML!');
    }
    const textAreaEl = textareaDivWrapper.querySelector('textarea');
    if (textAreaEl === null || textAreaEl === undefined) {
      throw new Error('Не могу найти элемент HTML!');
    }

    if (textAreaEl.validity.valid) {
      textareaDivWrapper.classList.remove('is-invalid');
    } else {
      textareaDivWrapper.classList.add('is-invalid');
      isValid = false;
    }

    if (inputDivWrappers === null || inputDivWrappers === undefined) {
      throw new Error('Не могу найти элемент HTML!');
    }

    inputDivWrappers.forEach((divEl) => {
      const inputEl = divEl.querySelector('input');
      if (inputEl === null || inputEl === undefined) {
        throw new Error('Не могу найти элемент HTML!');
      }

      if (inputEl.validity.valid) {
        divEl.classList.remove('is-invalid');
      } else {
        divEl.classList.add('is-invalid');
        isValid = false;
      }
    });

    if (fieldSetEl === null || fieldSetEl === undefined) {
      throw new Error('Не могу найти элемент HTML!');
    }

    if (rate === '0') {
      fieldSetEl.classList.add('is-invalid');
      isValid = false;
    } else {
      fieldSetEl.classList.remove('is-invalid');
    }
    return isValid;
  };

  const handleStarRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRate(e.target.value);
  };

  const handleSubmitClick: FormEventHandler = (e) => {
    e.preventDefault();
    const formDataObj = Object.fromEntries(new FormData(formRef.current as HTMLFormElement).entries());

    if (checkValidation()) {
      (dispatch as ThunkAppDispatch)(postReview(
        {
          cameraId: Number(id),
          userName: formDataObj['user-name'] as string,
          advantage: formDataObj['user-plus'] as string,
          disadvantage: formDataObj['user-minus'] as string,
          review: formDataObj['user-comment'] as string,
          rating: Number(rate),
        }
      ));
    }
  };

  return (
    <ModalOverlay handleClosePopup={handleClosePopup}>
      <div className="modal__content">
        <p className="title title--h4">Оставить отзыв</p>
        <div className="form-review">
          <form method="post" noValidate onSubmit={handleSubmitClick} ref={formRef}>
            <div className="form-review__rate">
              <fieldset className="rate form-review__item">
                <legend className="rate__caption">Рейтинг
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </legend>
                <div className="rate__bar">
                  <div className="rate__group">
                    <input className="visually-hidden" id="star-5" name="rate" type="radio" value="5"
                      onChange={handleStarRadioChange}
                    />
                    <label className="rate__label" htmlFor="star-5" title="Отлично"/>
                    <input className="visually-hidden" id="star-4" name="rate" type="radio" value="4"
                      onChange={handleStarRadioChange}
                    />
                    <label className="rate__label" htmlFor="star-4" title="Хорошо"/>
                    <input className="visually-hidden" id="star-3" name="rate" type="radio" value="3"
                      onChange={handleStarRadioChange}
                    />
                    <label className="rate__label" htmlFor="star-3" title="Нормально"/>
                    <input className="visually-hidden" id="star-2" name="rate" type="radio" value="2"
                      onChange={handleStarRadioChange}
                    />
                    <label className="rate__label" htmlFor="star-2" title="Плохо"/>
                    <input className="visually-hidden" id="star-1" name="rate" type="radio" value="1"
                      onChange={handleStarRadioChange}
                    />
                    <label className="rate__label" htmlFor="star-1" title="Ужасно"/>
                  </div>
                  <div className="rate__progress">
                    <span className="rate__stars">{rate}</span> <span>/</span>
                    <span className="rate__all-stars">5</span>
                  </div>
                </div>
                <p className="rate__message">Нужно оценить товар</p>
              </fieldset>
              <div className="custom-input form-review__item">
                <label>
                  <span className="custom-input__label">Ваше имя
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </span>
                  <input type="text" name="user-name" placeholder="Введите ваше имя" required/>
                </label>
                <p className="custom-input__error">Нужно указать имя</p>
              </div>
              <div className="custom-input form-review__item">
                <label>
                  <span className="custom-input__label">Достоинства
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </span>
                  <input type="text" name="user-plus" placeholder="Основные преимущества товара" required/>
                </label>
                <p className="custom-input__error">Нужно указать достоинства</p>
              </div>
              <div className="custom-input form-review__item">
                <label>
                  <span className="custom-input__label">Недостатки
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </span>
                  <input type="text" name="user-minus" placeholder="Главные недостатки товара" required/>
                </label>
                <p className="custom-input__error">Нужно указать недостатки</p>
              </div>
              <div className="custom-textarea form-review__item">
                <label>
                  <span className="custom-textarea__label">Комментарий
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </span>
                  <textarea name="user-comment" minLength={5} required
                    placeholder="Поделитесь своим опытом покупки"
                  />
                </label>
                <div className="custom-textarea__error">Нужно добавить комментарий</div>
              </div>
            </div>
            <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
          </form>
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

export default NewReview;
