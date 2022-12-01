import {BasketAddProps} from './basket-add-props';
import React, {SyntheticEvent} from 'react';
import useFocusLoop from '../../hooks/use-focus-loop';
import {addToCart} from '../../store/reducers/cameras/cameras-actions';
import {useDispatch} from 'react-redux';

function BasketAdd(props: BasketAddProps): JSX.Element {
  const {card, onClosePopupClick = null, onAddToBasketClick = null} = props;
  const {firstFocusableElement, lastFocusableElement, handleModalBlur} = useFocusLoop();
  const dispatch = useDispatch();


  const handleModalClick = (event: SyntheticEvent): void => {
    event.stopPropagation();
    if (onClosePopupClick !== null) {
      onClosePopupClick();
    }
  };
  const handleAddToBasketClick = (event: SyntheticEvent): void => {
    event.stopPropagation();
    if (onAddToBasketClick !== null) {
      dispatch(addToCart(card.id));
      onAddToBasketClick();
    }
  };

  return (
    <div className="modal__content" onBlur={handleModalBlur}>
      <p className="title title--h4">Добавить товар в корзину</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source type="image/webp" srcSet={`${card.previewImgWebp}, ${card.previewImgWebp2x} 2x`}/>
            <img
              src={card.previewImg} srcSet={`${card.previewImg2x} 2x`} width="140" height="120"
              alt={card.description}
            />
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">{card.name}</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span>
              <span className="basket-item__number">{card.vendorCode}</span>
            </li>
            <li className="basket-item__list-item">{card.category}</li>
            <li className="basket-item__list-item">{card.level}</li>
          </ul>
          <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{card.price} ₽</p>
        </div>
      </div>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button"
          onClick={handleAddToBasketClick}
          ref={lastFocusableElement}
        >
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>
          Добавить в корзину
        </button>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап"
        onClick={handleModalClick}
        ref={firstFocusableElement}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </div>
  );
}

export default BasketAdd;