import {CardProps} from './card-props';
import {MAX_RATING} from '../../constants/max-rating';
import genId from '../../helpers/gen-id';
import {useDispatch} from 'react-redux';
import {setDetailedShown} from '../../store/reducers/cameras/cameras-actions';

function Card(props: CardProps): JSX.Element {
  const {camera} = props;
  const dispatch = useDispatch();

  const uniqueKey = genId();

  const handleShowDetailClick = () => dispatch(setDetailedShown(camera.id));

  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x}`}/>
          <img src={camera.previewImg} srcSet={`${camera.previewImg2x} 2x`} width="280" height="240"
            alt={camera.description}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {Array(camera.rating).fill(null).map(() => (
            <svg width="17" height="16" aria-hidden="true" key={uniqueKey()}>
              <use xlinkHref="#icon-full-star"></use>
            </svg>
          ))}
          {Array(MAX_RATING - camera.rating).fill(null).map(() => (
            <svg width="17" height="16" aria-hidden="true" key={uniqueKey()}>
              <use xlinkHref="#icon-star"></use>
            </svg>
          ))}
          <p className="visually-hidden">Рейтинг: {camera.rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{camera.reviewCount}</p>
        </div>
        <p className="product-card__title">{camera.description}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{`${camera.price} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">
          Купить
        </button>
        <button className="btn btn--transparent" onClick={handleShowDetailClick}>
          Подробнее
        </button>
      </div>
    </div>
  );
}

export default Card;
