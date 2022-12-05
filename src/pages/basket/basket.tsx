import {useEffect} from 'react';
import {RootRouterPath} from '../../routers/root-route-path';
import {Link} from 'react-router-dom';
import BasketItem from './components/basket-item/basket-item';
import {useDispatch, useSelector} from 'react-redux';
import {getCart, getRemoveCartItemDialogShown} from '../../store/reducers/cameras/selectors';
import BasketRemoveItem from './components/basket-remove-item/basket-remove-item';
import ModalOverlay from '../../components/modal-overlay/modal-overlay';
import {setRemoveCartItemDialogShown} from '../../store/reducers/cameras/cameras-actions';

function Basket(): JSX.Element {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = 'Корзина - Фотошоп';
  });
  const isRemoveCartItemDialogShown = useSelector(getRemoveCartItemDialogShown);
  const handleCloseRemoveCartItemDialogClick = () => {
    dispatch(setRemoveCartItemDialogShown(null));
  };

  return (
    <main>
      <div className="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`${RootRouterPath.Root}`}>Главная
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`${RootRouterPath.Root}${RootRouterPath.Catalog}`}>Каталог
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link breadcrumbs__link--active">Корзина</span>
              </li>
            </ul>
          </div>
        </div>
        <section className="basket">
          <div className="container">
            <h1 className="title title--h2">Корзина</h1>
            <ul className="basket__list">
              {Object.keys(cart).map((cameraId) => (<BasketItem id={Number(cameraId)} key={cameraId}/>))}
            </ul>
            <div className="basket__summary">
              <div className="basket__promo">
                <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
                <div className="basket-form">
                  <form action="#">
                    <div className="custom-input">
                      <label><span className="custom-input__label">Промокод</span>
                        <input type="text" name="promo" placeholder="Введите промокод"/>
                      </label>
                      <p className="custom-input__error">Промокод неверный</p>
                      <p className="custom-input__success">Промокод принят!</p>
                    </div>
                    <button className="btn" type="submit">Применить
                    </button>
                  </form>
                </div>
              </div>
              <div className="basket__summary-order">
                <p className="basket__summary-item">
                  <span className="basket__summary-text">Всего:</span>
                  <span className="basket__summary-value">111 390 ₽</span>
                </p>
                <p className="basket__summary-item">
                  <span className="basket__summary-text">Скидка:</span>
                  <span className="basket__summary-value basket__summary-value--bonus">0 ₽</span>
                </p>
                <p className="basket__summary-item">
                  <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
                  <span className="basket__summary-value basket__summary-value--total">111 390 ₽</span>
                </p>
                <button className="btn btn--purple" type="submit">Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {
        isRemoveCartItemDialogShown !== null &&
        <ModalOverlay onClosePopup={handleCloseRemoveCartItemDialogClick}>
          <BasketRemoveItem onClosePopupClick={handleCloseRemoveCartItemDialogClick}/>
        </ModalOverlay>
      }
    </main>
  );
}

export default Basket;
