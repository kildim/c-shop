import {useRouteLoaderData} from 'react-router-dom';
import {CamerasLoaderData} from '../../../../types/cameras-loader-data';
import {useDispatch, useSelector} from 'react-redux';
import {getCart} from '../../../../store/reducers/cameras/selectors';
import {
  assertCart,
  decreaseCart,
  increaseCart,
  setRemoveCartItemDialogShown
} from '../../../../store/reducers/cameras/cameras-actions';
import {ChangeEventHandler} from 'react';
import {DICTIONARY} from '../../../../constants/dictionary';

type BasketItemProps = {
  id: number;
}

function BasketItem(props: BasketItemProps): JSX.Element | null {
  const {cameras} = useRouteLoaderData('root') as CamerasLoaderData;
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
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

  const handleDecreaseClick = () => {
    dispatch(decreaseCart(camera.id));
  };
  const handleIncreaseClick = () => {
    dispatch(increaseCart(camera.id));
  };
  const handleInputCountChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let result = Number(event.target.value);
    if (result > 99) {result = 99};
    if (result < 0) {result = 0};
    dispatch(assertCart(camera.id, result));
  };
  const handleRemoveFromCartClick = () => {
    dispatch(setRemoveCartItemDialogShown(id));
  };

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
            <span className="basket-item__article">Артикул:&#160;</span>
            <span className="basket-item__number">{camera.vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{`${DICTIONARY[camera.type]}\u00a0${DICTIONARY[camera.category]}`}</li>
          <li className="basket-item__list-item">{`${camera.level}\u00a0уровень`}</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{formatPrice(camera.price)}</p>

      <div className="quantity">
        <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара"
          onClick={handleDecreaseClick}
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        <input type="number" id="counter1" min="0" max="99" value={itemCount.toString()} aria-label="количество товара"
          onChange={handleInputCountChange}
        />
        <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара"
          onClick={handleIncreaseClick}
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price">
        <span className="visually-hidden">Общая цена:</span>
        {formatPrice(camera.price * itemCount)}
      </div>
      <button className="cross-btn" type="button" aria-label="Удалить товар" onClick={handleRemoveFromCartClick}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </li>
  );
}

export default BasketItem;
