import {useDispatch, useSelector} from 'react-redux';
import {getRemoveCartItemDialogShown} from '../../../../store/reducers/cameras/selectors';
import {useRouteLoaderData} from 'react-router-dom';
import {CamerasLoaderData} from '../../../../types/cameras-loader-data';
import {removeCart, setRemoveCartItemDialogShown} from '../../../../store/reducers/cameras/cameras-actions';

type BasketRemoveItemProps = {
  onClosePopupClick?: () => void | null;
}

function BasketRemoveItem(props: BasketRemoveItemProps): JSX.Element {
  const {onClosePopupClick} = props;
  const isRemoveCartItemDialogShown = useSelector(getRemoveCartItemDialogShown);
  const {cameras} = useRouteLoaderData('root') as CamerasLoaderData;
  const dispatch = useDispatch();
  const camera = cameras.find((item) => item.id === isRemoveCartItemDialogShown);
  if (camera === undefined) {
    throw new Error('Не найдена камера для удаления!');
  }

  const handleRemoveClick = () => {
    dispatch(removeCart(camera.id));
    dispatch(setRemoveCartItemDialogShown(null));
  };
  const handleContinueShoppingClick = () => {
    dispatch(setRemoveCartItemDialogShown(null));
  };

  return (
    <div className="modal__content">
      <p className="title title--h4">Удалить этот товар?</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source type="image/webp" srcSet="img/content/img9.webp, img/content/img9@2x.webp 2x"/>
            <img
              src="img/content/img9.jpg" srcSet="img/content/img9@2x.jpg 2x" width="140" height="120"
              alt="Фотоаппарат «Орлёнок»"
            />
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">Фотоаппарат «Орлёнок»</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span>
              <span className="basket-item__number">O78DFGSD832</span>
            </li>
            <li className="basket-item__list-item">Плёночная фотокамера</li>
            <li className="basket-item__list-item">Любительский уровень</li>
          </ul>
        </div>
      </div>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--half-width" type="button" onClick={handleRemoveClick}>
          Удалить
        </button>
        <button className="btn btn--transparent modal__btn modal__btn--half-width" onClick={handleContinueShoppingClick}>
          Продолжить покупки
        </button>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClosePopupClick}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </div>
  );
}

export default BasketRemoveItem;
