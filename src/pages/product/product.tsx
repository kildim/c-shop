import {Suspense, useEffect} from 'react';
import {Await, Link, useLoaderData} from 'react-router-dom';
import Loader from '../../components/loader/loader';
import SliderSection from './components/slider-section/slider-section';
import {ProductLoaderData} from './product-loader-data';
import ReviewsSection from './components/reviews-section/reviews-section';
import CameraInfo from './components/camera-info/camera-info';

function Product(): JSX.Element {
  useEffect(() => {
    document.title = 'Продукт - Фотошоп';
  });

  const {product, similar, reviews} = useLoaderData() as ProductLoaderData;

  window.scrollTo(0, 0);

  return (
    <main>
      <div className="page-content">
        <Suspense fallback={<Loader/>}>
          <Await resolve={product}>
            <CameraInfo/>
          </Await>
          <Await resolve={similar}>
            <SliderSection/>
          </Await>
          <Await resolve={reviews}>
            <ReviewsSection/>
          </Await>
        </Suspense>
      </div>
    </main>
  );
}

export default Product;
