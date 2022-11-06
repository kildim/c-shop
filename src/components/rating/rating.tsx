import {MAX_RATING} from '../../constants/max-rating';
import generateId from '../../helpers/generate-id';
import {RatingProps} from './rating-props';

function Rating(props: RatingProps): JSX.Element {
  const {rating = 0} = props;
  const uniqueKey = generateId();

  return (
    <>
      <h2 className={'visually-hidden'}>символьное изображение рейтинга</h2>
      {Array(rating).fill(null).map(() => (
        <svg width="17" height="16" aria-hidden="true" key={uniqueKey()}>
          <use xlinkHref="#icon-full-star"></use>
        </svg>
      ))}
      {Array(MAX_RATING - rating).fill(null).map(() => (
        <svg width="17" height="16" aria-hidden="true" key={uniqueKey()}>
          <use xlinkHref="#icon-star"></use>
        </svg>
      ))}
    </>
  );
}

export default Rating;
