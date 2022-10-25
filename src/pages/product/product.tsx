import {Suspense, useEffect, useState} from 'react';
import {Await, useLoaderData} from 'react-router-dom';
import Loader from '../../components/loader/loader';
import SliderSection from './components/slider-section/slider-section';
import {ProductLoaderData} from './product-loader-data';
import ReviewsSection from './components/reviews-section/reviews-section';
import CameraInfo from './components/camera-info/camera-info';
import NewReview from './components/new-review/new-review';
import ModalOverlay from '../../hocs/modal-overlay';

function Product(): JSX.Element {
  useEffect(() => {
    document.title = 'Продукт - Фотошоп';
  });

  const {product, similar, reviews, id} = useLoaderData() as ProductLoaderData;
  const [showNewReview, setShowNewReview] = useState(false);
  const handleCloseNewReviewClick = () => setShowNewReview(false);
  const handleWriteNewReviewClick = () => setShowNewReview(true);

  window.scrollTo(0, 0);

  return (
    <main>
      <div className="page-content">
        <Suspense fallback={<Loader/>}>
          <Await resolve={product}>
            <CameraInfo/>
          </Await>
        </Suspense>
        <Suspense fallback={<Loader/>}>
          <Await resolve={similar}>
            <SliderSection/>
          </Await>
        </Suspense>
        <div className="page-content__section">
          <section className="review-block">
            <div className="container">
              <div className="page-content__headed">
                <h2 className="title title--h3">Отзывы</h2>
                <button className="btn" type="button" onClick={handleWriteNewReviewClick}>Оставить свой отзыв</button>
              </div>
              <Suspense fallback={<Loader/>}>
                <Await resolve={reviews}>
                  <ReviewsSection id={id}/>
                </Await>
              </Suspense>
            </div>
          </section>
        </div>

      </div>
      {
        showNewReview &&
        <ModalOverlay handleClosePopup={handleCloseNewReviewClick}>
          <NewReview handleClosePopup={handleCloseNewReviewClick}/>
        </ModalOverlay>
      }
    </main>
  );
}

export default Product;
