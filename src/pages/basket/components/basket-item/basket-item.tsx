import {useRouteLoaderData} from 'react-router-dom';
import {CamerasLoaderData} from '../../../../types/cameras-loader-data';
import {useSelector} from 'react-redux';
import {getCart} from '../../../../store/reducers/cameras/selectors';

type BasketItemProps = {
  id: number;
}

function BasketItem(props: BasketItemProps): JSX.Element | null {
  const {cameras} = useRouteLoaderData('root') as CamerasLoaderData;
  const cart = useSelector(getCart);
  const {id} = props;
  const camera = cameras.find((item) => item.id === id);
  const itemCount = cart[id];
  const formatPrice = (price: number) => new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(price);


  if (camera === undefined) {
    return null;
  }


  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x} 2x`}/>
          <img src={camera.previewImg} srcSet={`${camera.previewImg2x} 2x`} width="140" height="120"
            alt={camera.name}
          />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{camera.name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>
            <span className="basket-item__number">{camera.vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{camera.category}</li>
          <li className="basket-item__list-item">{camera.level}</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{formatPrice(camera.price)}</p>

      {/*<div className="quantity">*/}
      {/*  <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара">*/}
      {/*    <svg width="7" height="12" aria-hidden="true">*/}
      {/*      <use xlinkHref="#icon-arrow"></use>*/}
      {/*    </svg>*/}
      {/*  </button>*/}
      {/*  <label className="visually-hidden" htmlFor="counter1"></label>*/}
      {/*  <input type="number" id="counter1" value="2" min="1" max="99" aria-label="количество товара"/>*/}
      {/*  <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара">*/}
      {/*    <svg width="7" height="12" aria-hidden="true">*/}
      {/*      <use xlinkHref="#icon-arrow"></use>*/}
      {/*    </svg>*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>37 940 ₽*/}
      {/*</div>*/}
      {/*<button className="cross-btn" type="button" aria-label="Удалить товар">*/}
      {/*  <svg width="10" height="10" aria-hidden="true">*/}
      {/*    <use xlinkHref="#icon-close"></use>*/}
      {/*  </svg>*/}
      {/*</button>*/}
    </li>
  );
}

export default BasketItem;