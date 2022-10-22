import {useAsyncValue} from 'react-router-dom';
import {Camera} from '../../../../types/camera';
import Slider from './components/slider/slider';

function SliderSection(): JSX.Element | null {
  const similar = useAsyncValue() as Camera[];

  if (similar.length === 0 || undefined) {
    return null;
  }

  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <Slider products={similar}/>
        </div>
      </section>
    </div>
  );
}

export default SliderSection;
