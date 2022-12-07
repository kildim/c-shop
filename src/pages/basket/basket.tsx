import {MouseEventHandler, useEffect, useRef, useState} from 'react';
import {RootRouterPath} from '../../routers/root-route-path';
import {Link, useRouteLoaderData} from 'react-router-dom';
import BasketItem from './components/basket-item/basket-item';
import {useDispatch, useSelector} from 'react-redux';
import {getCart, getRemoveCartItemDialogShown} from '../../store/reducers/cameras/selectors';
import BasketRemoveItem from './components/basket-remove-item/basket-remove-item';
import ModalOverlay from '../../components/modal-overlay/modal-overlay';
import {setRemoveCartItemDialogShown} from '../../store/reducers/cameras/cameras-actions';
import {CamerasLoaderData} from '../../types/cameras-loader-data';
import {postCoupon, postOrder} from '../../services/api/api';
import Loader from '../../components/loader/loader';
import ModalSuccess from './components/modal-success/modal-success';
import ModalError from './components/modal-error/modal-error';

function Basket(): JSX.Element {
  const {cameras} = useRouteLoaderData('root') as CamerasLoaderData;
  const cart = useSelector(getCart);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const couponRef = useRef<HTMLInputElement>(null);
  const couponDivRef = useRef<HTMLDivElement>(null);
  const couponValue = useRef<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const handleCheckCouponValidationClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const coupon = couponRef.current?.value.trim().split(' ')[0];
    if(coupon === undefined || coupon === '') {
      couponDivRef.current?.classList.remove('is-valid');
      couponDivRef.current?.classList.remove('is-invalid');
      setDiscount(0);
      return;
    }
    setIsLoading(true);
    postCoupon({coupon: coupon})
      .then((data) => {
        let result = data === null ? 0 : data;
        setDiscount(result);
        couponValue.current = coupon;
        if(couponRef.current === null) {
          return;
        }
        couponRef.current.value = coupon;
        couponDivRef.current?.classList.add('is-valid');
        couponDivRef.current?.classList.remove('is-invalid');
      })
      .catch(() => {
        setDiscount(0);
        couponValue.current = null;
        couponDivRef.current?.classList.remove('is-valid');
        couponDivRef.current?.classList.add('is-invalid');
      })
      .finally(() => setIsLoading(false));
  };

  const handleOrderClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    let camerasIds = Object.keys(cart).map((item) => Number(item));
    if(camerasIds.length > 0) {
      const order = {camerasIds: camerasIds, coupon: couponValue.current};
      setIsLoading(true);
      postOrder(order)
        .then(() => setIsSuccess(true))
        .catch(() => {setIsError(true)} )
        .finally(() => setIsLoading(false));
    }
  }
  const handleSuccessModalCloseClick = () => setIsSuccess(false);
  const handleErrorModalCloseClick = () => setIsError(false);

  useEffect(() => {
    document.title = 'Корзина - Фотошоп';
  });
  const isRemoveCartItemDialogShown = useSelector(getRemoveCartItemDialogShown);
  const handleCloseRemoveCartItemDialogClick = () => {
    dispatch(setRemoveCartItemDialogShown(null));
  };
  const formatPrice = (price: number) => new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(price);
  const calculateAmount = () => {
    let result = 0;
    for (const position in cart) {
      const cameraFromCatalog = cameras.find((camera) => camera.id === Number(position));
      if (cameraFromCatalog === undefined) {
        throw new Error('Камера не найдена в каталоге!');
      }
      result = result + cameraFromCatalog.price * cart[position];
    }
    return result;
  };

  const amount = calculateAmount();
  const deduction = amount / 100 * discount;
  const total = amount - deduction;

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
                    <div className="custom-input" ref={couponDivRef}>
                      <label><span className="custom-input__label">Промокод</span>
                        <input type="text" name="promo" placeholder="Введите промокод" ref={couponRef}/>
                      </label>
                      <p className="custom-input__error">Промокод неверный</p>
                      <p className="custom-input__success">Промокод принят!</p>
                    </div>
                    <button className="btn" onClick={handleCheckCouponValidationClick}>Применить
                    </button>
                  </form>
                </div>
              </div>
              <div className="basket__summary-order">
                <p className="basket__summary-item">
                  <span className="basket__summary-text">Всего:&#160;</span>
                  <span className="basket__summary-value">{formatPrice(amount)}</span>
                </p>
                <p className="basket__summary-item">
                  <span className="basket__summary-text">Скидка:</span>
                  <span className="basket__summary-value basket__summary-value--bonus">{formatPrice(deduction)}</span>
                </p>
                <p className="basket__summary-item">
                  <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
                  <span className="basket__summary-value basket__summary-value--total">{formatPrice(total)}</span>
                </p>
                <button className="btn btn--purple" type="submit" onClick={handleOrderClick}>Оформить заказ
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
      { isLoading &&
        <Loader/>
      }
      {
        isSuccess &&
        <ModalOverlay onClosePopup={handleSuccessModalCloseClick}>
          <ModalSuccess onClosePopup={handleSuccessModalCloseClick}/>
        </ModalOverlay>
      }
      {
        isError &&
        <ModalOverlay onClosePopup={handleErrorModalCloseClick}>
          <ModalError onClosePopup={handleErrorModalCloseClick}/>
        </ModalOverlay>
      }
    </main>
  );
}

export default Basket;
