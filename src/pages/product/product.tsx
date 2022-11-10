import {Suspense, useEffect} from 'react';
import {Await, useLoaderData, useNavigate} from 'react-router-dom';
import Loader from '../../components/loader/loader';
import SliderSection from './components/slider-section/slider-section';
import {ProductLoaderData} from './product-loader-data';
import ReviewsSection from './components/reviews-section/reviews-section';
import CameraInfo from './components/camera-info/camera-info';
import NewReview from './components/new-review/new-review';
import {
  getBuyPopupShown,
  getIsNewReviewShown,
  getIsNewReviewSuccessShown
} from '../../store/reducers/cameras/selectors';
import {useDispatch, useSelector} from 'react-redux';
import NewReviewSuccess from './components/new-review-success/new-review-success';
import {
  setBuyPopupShown,
  setIsNewReviewShown,
  setIsNewReviewSuccessShown
} from '../../store/reducers/cameras/cameras-actions';
import ModalOverlay from '../../components/modal-overlay/modal-overlay';
import BasketAdd from '../catalog/components/basket-add/basket-add';

function Product(): JSX.Element {
  useEffect(() => {
    document.title = 'Продукт - Фотошоп';
  });

  const {product, similar, reviews, id} = useLoaderData() as ProductLoaderData;
  const isNewReviewSuccessShown = useSelector(getIsNewReviewSuccessShown);
  const isNewReviewShown = useSelector(getIsNewReviewShown);
  const detailedShown = useSelector(getBuyPopupShown);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseNewReviewClick = () => {
    dispatch(setIsNewReviewShown(false));
  };
  const handleWriteNewReviewClick = () => {
    dispatch(setIsNewReviewShown(true));
  };
  const handleCloseNewReviewSuccessClick = () => {
    dispatch(setIsNewReviewSuccessShown(false));
    navigate('');
  };
  const handleCloseBasketAddModalClick = () => {
    dispatch(setBuyPopupShown(null));
  };

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
        isNewReviewShown &&
        <ModalOverlay onClosePopup={handleCloseNewReviewClick}>
          <NewReview handleClosePopup={handleCloseNewReviewClick} id={id}/>
        </ModalOverlay>
      }
      {
        isNewReviewSuccessShown &&
        <ModalOverlay onClosePopup={handleCloseNewReviewSuccessClick}>
          <NewReviewSuccess onClosePopupClick={handleCloseNewReviewSuccessClick}/>
        </ModalOverlay>
      }
      {detailedShown !== null &&
        <ModalOverlay onClosePopup={handleCloseBasketAddModalClick}>
          <BasketAdd card={detailedShown} onClosePopupClick={handleCloseBasketAddModalClick}/>
        </ModalOverlay>}
    </main>
  );
}

export default Product;
