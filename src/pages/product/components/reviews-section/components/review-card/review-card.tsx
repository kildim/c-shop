import {ReviewCardProps} from './review-card-props';
import Rating from '../../../../../../components/rating/rating';

function ReviewCard(props: ReviewCardProps): JSX.Element {
  const {review} = props;
  const formatCreationDate = (date: string) => Intl.DateTimeFormat('ru', {day: '2-digit', month: 'long'}).format(Date.parse(date));

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{review.userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">{formatCreationDate(review.createAt)}</time>
      </div>
      <div className="rate review-card__rate">
        <Rating rating={review.rating}/>
        <p className="visually-hidden">Оценка: {review.rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{review.advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{review.disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">
            {review.review}
          </p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewCard;
