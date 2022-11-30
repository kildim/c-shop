import {CardProps} from './card-props';
import {useDispatch} from 'react-redux';
import {setBuyPopupShown} from '../../store/reducers/cameras/cameras-actions';
import {useNavigate} from 'react-router-dom';
import Rating from '../rating/rating';
import {RootRouterPath} from '../../routers/root-route-path';

function Card(props: CardProps): JSX.Element {
  const {camera, isActive} = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyClick = () => dispatch(setBuyPopupShown(camera.id));
  const handleComprehensiveClick = () => {
    navigate(`${RootRouterPath.Root}${RootRouterPath.Product}/${camera.id}`);
  };

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
        <button className="btn btn--purple product-card__btn" type="button" onClick={handleBuyClick}>
          Купить
        </button>
        <button className="btn btn--transparent" onClick={handleComprehensiveClick}>
          Подробнее
        </button>
      </div>
    </div>
  );
}

export default Card;
