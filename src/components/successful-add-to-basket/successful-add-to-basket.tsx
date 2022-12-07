import {SuccessfulAddToBasketProps} from './successful-add-to-basket-props';
import {SyntheticEvent} from 'react';
import {RootRouterPath} from '../../routers/root-route-path';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setIsSuccessfulAddToBasketShown} from '../../store/reducers/cameras/cameras-actions';

function SuccessfulAddToBasket(props: SuccessfulAddToBasketProps): JSX.Element {
  const {onClosePopupClick = null} = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleContinueShoppingClick = () => {
    dispatch(setIsSuccessfulAddToBasketShown(false));
    navigate(`${RootRouterPath.Root}${RootRouterPath.Catalog}`);
  };
  const handleToCartClick = () => {
    dispatch(setIsSuccessfulAddToBasketShown(false));
    navigate(`${RootRouterPath.Root}${RootRouterPath.Basket}`);
  };
  const handleModalClick = (event: SyntheticEvent): void => {
    event.stopPropagation();
    if (onClosePopupClick !== null) {
      onClosePopupClick();
    }
  };

  return (
    <div className="modal--narrow modal__content">
      <p className="title title--h4">Товар успешно добавлен в корзину</p>
      <svg className="modal__icon" width="86" height="80" aria-hidden="true">
        <use xlinkHref="#icon-success"></use>
      </svg>
      <div className="modal__buttons">
        <button className="btn btn--transparent modal__btn"
          onClick={handleContinueShoppingClick}
        >
          Продолжить покупки
        </button>
        <button className="btn btn--purple modal__btn modal__btn--fit-width"
          onClick={handleToCartClick}
        >
          Перейти в корзину
        </button>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап"
        onClick={handleModalClick}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </div>

  );
}

export default SuccessfulAddToBasket;
