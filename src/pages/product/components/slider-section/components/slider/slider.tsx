import Card from '../../../../../catalog/components/card/card';
import {SliderProps} from './slider-props';
import {MouseEventHandler, useState} from 'react';
import {SLIDER_FRAME_CAPACITY} from '../../../../../../constants/slider-frame-capacity';
import {Camera} from '../../../../../../types/camera';
import genId from '../../../../../../helpers/gen-id';

function Slider(props: SliderProps): JSX.Element {
  const {products} = props;
  const [startIndex, setStartIndex] = useState(0);
  const uniqueKey = genId();
  const handleForwardClick: MouseEventHandler = (e) => setStartIndex(startIndex + 1);
  const handleBackwardClick: MouseEventHandler = (e) => setStartIndex(startIndex - 1);

  const renderCards = (cards: Camera[]) =>
    cards.slice(startIndex, tailIndex).map((card) => <Card camera={card} isActive key={uniqueKey()}/>);

  const tailIndex = Math.min(startIndex + SLIDER_FRAME_CAPACITY, products.length);

  return (
    <div className="product-similar__slider">
      <div className="product-similar__slider-list">
        {renderCards(products)}
      </div>
      <button className="slider-controls slider-controls--prev"
        type="button" aria-label="Предыдущий слайд"
        onClick={handleBackwardClick}
        disabled={startIndex === 0}
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
      <button
        className="slider-controls slider-controls--next"
        type="button" aria-label="Следующий слайд"
        onClick={handleForwardClick}
        disabled={tailIndex === products.length}
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
    </div>

  );
}

export default Slider;
