import {Link, useAsyncValue} from 'react-router-dom';
import {Review} from '../../../../types/review';
import ReviewCard from './components/review-card/review-card';
import genId from '../../../../helpers/gen-id';

function ReviewsSection(): JSX.Element {
  const reviews = useAsyncValue() as Review[];
  const uniqueKey = genId();

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {reviews.map((review) => <ReviewCard review={review} key={uniqueKey()}/>)}
        </ul>
        <div className="review-block__buttons">
          <button className="btn btn--purple" type="button">Показать больше отзывов
          </button>
          <Link className="up-btn" to='#header'>
            <svg width="12" height="18" aria-hidden="true">
              <use xlinkHref="#icon-arrow2"></use>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
