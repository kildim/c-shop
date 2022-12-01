import {useEffect} from 'react';
import {RootRouterPath} from '../../routers/root-route-path';
import {Link} from 'react-router-dom';
import BasketItem from './components/basket-item/basket-item';
import {useSelector} from 'react-redux';
import {getCart} from '../../store/reducers/cameras/selectors';

function Basket(): JSX.Element {
  const cart = useSelector(getCart);
  useEffect(() => {
    document.title = 'Корзина - Фотошоп';
  });

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

              {/*<li className="basket-item"><BasketItem/></li>*/}
              {/*      <li className="basket-item">*/}
              {/*        <div className="basket-item__img">*/}
              {/*          <picture>*/}
              {/*            <source type="image/webp" srcSet="img/content/img1.webp, img/content/img1@2x.webp 2x">*/}
              {/*              <img*/}
              {/*                src="img/content/img1.jpg"*/}
              {/*                srcSet="img/content/img1@2x.jpg 2x"*/}
              {/*                width="140" height="120"*/}
              {/*                alt="Ретрокамера «Das Auge IV»"*/}
              {/*              />*/}
              {/*            </source>*/}
              {/*          </picture>*/}
              {/*        </div>*/}
              {/*        <div className="basket-item__description">*/}
              {/*          <p className="basket-item__title">Ретрокамера «Das Auge IV»</p>*/}
              {/*          <ul className="basket-item__list">*/}
              {/*            <li className="basket-item__list-item">*/}
              {/*              <span className="basket-item__article">Артикул:</span>*/}
              {/*              <span className="basket-item__number">DA4IU67AD5</span>*/}
              {/*            </li>*/}
              {/*            <li className="basket-item__list-item">Коллекционная видеокамера</li>*/}
              {/*            <li className="basket-item__list-item">Любительский уровень</li>*/}
              {/*          </ul>*/}
              {/*        </div>*/}
              {/*        <p className="basket-item__price"><span className="visually-hidden">Цена:</span>73 450 ₽</p>*/}
              {/*        <div className="quantity">*/}
              {/*          <button className="btn-icon btn-icon--prev" disabled aria-label="уменьшить количество товара">*/}
              {/*            <svg width="7" height="12" aria-hidden="true">*/}
              {/*              <use xlinkHref="#icon-arrow"></use>*/}
              {/*            </svg>*/}
              {/*          </button>*/}
              {/*          <label className="visually-hidden" htmlFor="counter2"></label>*/}
              {/*          <input type="number" id="counter2" value="1" min="1" max="99" aria-label="количество товара"/>*/}
              {/*          <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара">*/}
              {/*            <svg width="7" height="12" aria-hidden="true">*/}
              {/*              <use xlinkHref="#icon-arrow"></use>*/}
              {/*            </svg>*/}
              {/*          </button>*/}
              {/*        </div>*/}
              {/*        <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>73 450 ₽*/}
              {/*        </div>*/}
              {/*        <button className="cross-btn" type="button" aria-label="Удалить товар">*/}
              {/*          <svg width="10" height="10" aria-hidden="true">*/}
              {/*            <use xlinkHref="#icon-close"></use>*/}
              {/*          </svg>*/}
              {/*        </button>*/}
              {/*      </li>*/}
            </ul>
            {/*    <div className="basket__summary">*/}
            {/*      <div className="basket__promo">*/}
            {/*        <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>*/}
            {/*        <div className="basket-form">*/}
            {/*          <form action="#">*/}
            {/*            <div className="custom-input">*/}
            {/*              <label><span className="custom-input__label">Промокод</span>*/}
            {/*                <input type="text" name="promo" placeholder="Введите промокод"/>*/}
            {/*              </label>*/}
            {/*              <p className="custom-input__error">Промокод неверный</p>*/}
            {/*              <p className="custom-input__success">Промокод принят!</p>*/}
            {/*            </div>*/}
            {/*            <button className="btn" type="submit">Применить*/}
            {/*            </button>*/}
            {/*          </form>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div className="basket__summary-order">*/}
            {/*        <p className="basket__summary-item">*/}
            {/*          <span className="basket__summary-text">Всего:</span>*/}
            {/*          <span className="basket__summary-value">111 390 ₽</span>*/}
            {/*        </p>*/}
            {/*        <p className="basket__summary-item">*/}
            {/*          <span className="basket__summary-text">Скидка:</span>*/}
            {/*          <span className="basket__summary-value basket__summary-value--bonus">0 ₽</span>*/}
            {/*        </p>*/}
            {/*        <p className="basket__summary-item">*/}
            {/*          <span className="basket__summary-text basket__summary-text--total">К оплате:</span>*/}
            {/*          <span className="basket__summary-value basket__summary-value--total">111 390 ₽</span>*/}
            {/*        </p>*/}
            {/*        <button className="btn btn--purple" type="submit">Оформить заказ*/}
            {/*        </button>*/}
            {/*      </div>*/}
            {/*    </div>*/}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Basket;
