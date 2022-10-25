import {Link, useAsyncValue} from 'react-router-dom';
import {Review} from '../../../../types/review';
import ReviewCard from './components/review-card/review-card';
import genId from '../../../../helpers/gen-id';
import {REVIEW_CHUNK} from '../../../../constants/review-chunk';
import {useEffect, useState} from 'react';

function ReviewsSection({id}: {id: number}): JSX.Element {
  const reviews = useAsyncValue() as Review[];

  const [tailIndex, setTailIndex] = useState(Math.min(REVIEW_CHUNK, reviews.length));

  useEffect(() => {
    setTailIndex(Math.min(REVIEW_CHUNK, reviews.length));
  }, [id]);

  const handleShowMoreClick = () => {
    let delta = tailIndex + REVIEW_CHUNK;
    setTailIndex( (Math.min(delta, reviews.length)) );
  };

  const uniqueKey = genId();

  return (
    <>
      <ul className="review-block__list">
        {reviews.slice(0, tailIndex).map((review) => <ReviewCard review={review} key={uniqueKey()}/>)}
      </ul>
      <div className="review-block__buttons">
        <button className="btn btn--purple" type="button"
          hidden={tailIndex >= reviews.length}
          onClick={handleShowMoreClick}
        >
          Показать больше отзывов
        </button>
        <Link className="up-btn" to="#header">
          <svg width="12" height="18" aria-hidden="true">
            <use xlinkHref="#icon-arrow2"></use>
          </svg>
        </Link>
      </div>
    </>
  );
}

export default ReviewsSection;
