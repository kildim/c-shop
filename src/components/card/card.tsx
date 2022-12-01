import {CardProps} from './card-props';
import {useDispatch, useSelector} from 'react-redux';
import {setBuyPopupShown} from '../../store/reducers/cameras/cameras-actions';
import {useNavigate} from 'react-router-dom';
import Rating from '../rating/rating';
import {RootRouterPath} from '../../routers/root-route-path';
import {getCart} from '../../store/reducers/cameras/selectors';

function Card(props: CardProps): JSX.Element {
  const {camera, isActive} = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const isContained = (id: number) => Object.hasOwn(cart, id);


  const handleBuyClick = () => dispatch(setBuyPopupShown(camera.id));
  const handleComprehensiveClick = () => navigate(`${RootRouterPath.Root}${RootRouterPath.Product}/${camera.id}`);
  const handleToCartClick = () => navigate(`${RootRouterPath.Root}${RootRouterPath.Basket}`);

  return (
    <div className={`product-card ${isActive ? 'is-active' : ''}`}>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x}`}/>
          <img src={camera.previewImg} srcSet={`${camera.previewImg2x} 2x`} width="280" height="240"
            alt={camera.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <Rating rating={camera.rating}/>
          <p className="visually-hidden">Рейтинг: {camera.rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{camera.reviewCount}</p>
        </div>
        <p className="product-card__title">{camera.name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{`${camera.price} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        {
          isContained(camera.id) ?
            (
              <button className="btn btn--purple-border product-card__btn product-card__btn--in-cart"
                onClick={handleToCartClick}
              >
                <svg width="16" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-basket"></use>
                </svg>
                В корзине
              </button>
            )
            :
            (
              <button className="btn btn--purple product-card__btn" type="button" onClick={handleBuyClick}>
                Купить
              </button>
            )
        }
        <button className="btn btn--transparent" onClick={handleComprehensiveClick}>
          Подробнее
        </button>
      </div>
    </div>
  );
}

export default Card;
