import {Link, useAsyncValue} from 'react-router-dom';
import {Review} from '../../../../types/review';
import ReviewCard from './components/review-card/review-card';
import genId from '../../../../helpers/gen-id';
import {REVIEW_CHUNK} from '../../../../constants/review-chunk';
import {useState} from 'react';

function ReviewsSection(): JSX.Element {
  const reviews = useAsyncValue() as Review[];
  const [tailIndex, setTailIndex] = useState(Math.min(REVIEW_CHUNK, reviews.length));
  const uniqueKey = genId();
  const handleShowMoreClick = () => setTailIndex(Math.min(tailIndex + REVIEW_CHUNK, reviews.length));

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button className="btn" type="button">Оставить свой отзыв</button>
          </div>
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
        </div>
      </section>
    </div>
  );
}

export default ReviewsSection;
