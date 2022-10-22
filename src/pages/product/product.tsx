import {Suspense, useEffect} from 'react';
import {Await, Link, useLoaderData} from 'react-router-dom';
import {Camera} from '../../types/camera';
import Loader from '../../components/loader/loader';
import {RootRouterPath} from '../../routers/root-route-path';
import Rating from '../../components/rating/rating';
import ProductInfoTabs from './components/product-info-tabs/product-info-tabs';
import SliderSection from './components/slider-section/slider-section';
import {ProductLoaderData} from './product-loader-data';
import ReviewsSection from './components/reviews-section/reviews-section';

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
            {
              (camera: Camera) => (
                <>
                  <div className="breadcrumbs">
                    <div className="container">
                      <ul className="breadcrumbs__list">
                        <li className="breadcrumbs__item">
                          <Link className="breadcrumbs__link" to={`${RootRouterPath.Root}`}>Главная
                            <svg width="5" height="8" aria-hidden="true">
                              <use xlinkHref="#icon-arrow-mini"></use>
                            </svg>
                          </Link>
                        </li>
                        <li className="breadcrumbs__item">
                          <Link className="breadcrumbs__link" to={`${RootRouterPath.Root}${RootRouterPath.Catalog}`}>Каталог
                            <svg width="5" height="8" aria-hidden="true">
                              <use xlinkHref="#icon-arrow-mini"></use>
                            </svg>
                          </Link>
                        </li>
                        <li className="breadcrumbs__item">
                          <span className="breadcrumbs__link breadcrumbs__link--active">{camera.name}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="page-content__section">
                    <section className="product">
                      <div className="container">
                        <div className="product__img">
                          <picture>
                            <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImg2x} 2x`}/>
                            <img
                              src={camera.previewImg} srcSet={`${camera.previewImg2x} 2x`} width="560" height="480"
                              alt={camera.name}
                            />
                          </picture>
                        </div>
                        <div className="product__content">
                          <h1 className="title title--h3">{camera.name}</h1>
                          <div className="rate product__rate">
                            <Rating rating={camera.rating}/>
                            <p className="visually-hidden">`Рейтинг: ${camera.rating}`</p>
                            <p className="rate__count">
                              <span className="visually-hidden">Всего оценок:</span>
                              {camera.reviewCount}
                            </p>
                          </div>
                          <p className="product__price"><span className="visually-hidden">Цена:</span>{camera.price} ₽
                          </p>
                          <button className="btn btn--purple" type="button">
                            <svg width="24" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-add-basket"></use>
                            </svg>
                            Добавить в корзину
                          </button>
                          <ProductInfoTabs camera={camera}/>
                        </div>
                      </div>
                    </section>
                  </div>
                </>
              )
            }
          </Await>
        </Suspense>
        <Suspense fallback={<Loader/>}>
          <Await resolve={similar}>
            <SliderSection/>
          </Await>
        </Suspense>

        <div className="page-content__section">
          <Suspense fallback={<Loader/>}>
            <Await resolve={reviews}>
              <ReviewsSection/>
            </Await>
          </Suspense>
        </div>
      </div>
    </main>
  );
}

export default Product;
