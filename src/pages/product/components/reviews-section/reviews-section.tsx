import {useAsyncValue} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
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
  }, [id, reviews.length]);

  const handleShowMoreClick = () => {
    setTailIndex( (Math.min(tailIndex + REVIEW_CHUNK, reviews.length)) );
  };

  const uniqueKey = genId();

  return (
    <>
      <ul className="review-block__list">
        {reviews.sort((a, b) => Date.parse(b.createAt) - Date.parse(a.createAt)).slice(0, tailIndex).map((review) => <ReviewCard review={review} key={uniqueKey()}/>)}
      </ul>
      <div className="review-block__buttons">
        <button className="btn btn--purple" type="button"
          hidden={tailIndex >= reviews.length}
          onClick={handleShowMoreClick}
        >
          Показать больше отзывов
        </button>
        <ScrollLink className="up-btn" to='header' smooth duration={500}>
          <svg width="12" height="18" aria-hidden="true">
            <use xlinkHref="#icon-arrow2"></use>
          </svg>
        </ScrollLink>
      </div>
    </>
  );
}

export default ReviewsSection;
