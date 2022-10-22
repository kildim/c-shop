import {Suspense, useEffect} from 'react';
import {Await, Link, useLoaderData} from 'react-router-dom';
import {Camera} from '../../types/camera';
import Loader from '../../components/loader/loader';
import {RootRouterPath} from '../../routers/root-route-path';
import Rating from '../../components/rating/rating';
import ProductInfoTabs from './components/product-info-tabs/product-info-tabs';
import SliderSection from './components/slider-section/slider-section';
import {ProductLoaderData} from './product-loader-data';

function Product(): JSX.Element {
  useEffect(() => {
    document.title = 'Продукт - Фотошоп';
  });

  const {product, similar} = useLoaderData() as ProductLoaderData;

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
          <section className="review-block">
            <div className="container">
              <div className="page-content__headed">
                <h2 className="title title--h3">Отзывы</h2>
                <button className="btn" type="button">Оставить свой отзыв</button>
              </div>
              <ul className="review-block__list">
                <li className="review-card">
                  <div className="review-card__head">
                    <p className="title title--h4">Сергей Горский</p>
                    <time className="review-card__data" dateTime="2022-04-13">13 апреля</time>
                  </div>
                  <div className="rate review-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <p className="visually-hidden">Оценка: 5</p>
                  </div>
                  <ul className="review-card__list">
                    <li className="item-list"><span className="item-list__title">Достоинства:</span>
                      <p className="item-list__text">Надёжная, хорошо лежит в руке, необычно выглядит</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Недостатки:</span>
                      <p className="item-list__text">Тяжеловата, сложно найти плёнку</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Комментарий:</span>
                      <p className="item-list__text">
                        Раз в полгода достаю из-под стекла, стираю пыль, заряжаю —
                        работает как часы. Ни у кого из знакомых такой нет, все завидуют) Теперь это жемчужина моей
                        коллекции, однозначно стоит своих денег!
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="review-card">
                  <div className="review-card__head">
                    <p className="title title--h4">Пётр Матросов</p>
                    <time className="review-card__data" dateTime="2022-03-02">2 марта</time>
                  </div>
                  <div className="rate review-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                    <p className="visually-hidden">Оценка: 1</p>
                  </div>
                  <ul className="review-card__list">
                    <li className="item-list"><span className="item-list__title">Достоинства:</span>
                      <p className="item-list__text">Хорошее пресс-папье</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Недостатки:</span>
                      <p className="item-list__text">Через 3 дня развалилась на куски</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Комментарий:</span>
                      <p className="item-list__text">
                        При попытке вставить плёнку сломался механизм открытия отсека,
                        пришлось заклеить его изолентой. Начал настраивать фокус&nbsp;— линза провалилась внутрь
                        корпуса. Пока доставал — отломилось несколько лепестков диафрагмы. От злости стукнул камеру об
                        стол, и рукоятка треснула пополам. Склеил всё суперклеем, теперь прижимаю ей бумагу. НЕ
                        РЕКОМЕНДУЮ!!!
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="review-card">
                  <div className="review-card__head">
                    <p className="title title--h4">Татьяна Кузнецова </p>
                    <time className="review-card__data" dateTime="2021-12-30">30 декабря</time>
                  </div>
                  <div className="rate review-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                    <p className="visually-hidden">Оценка: 4</p>
                  </div>
                  <ul className="review-card__list">
                    <li className="item-list"><span className="item-list__title">Достоинства:</span>
                      <p className="item-list__text">Редкая</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Недостатки:</span>
                      <p className="item-list__text">Высокая цена</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Комментарий:</span>
                      <p className="item-list__text">
                        Дорого для портативной видеокамеры, но в моей коллекции как раз
                        не хватало такого экземпляра. Следов использования нет, доставили в заводской упаковке,
                        выглядит шикарно!
                      </p>
                    </li>
                  </ul>
                </li>
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
        </div>
      </div>
    </main>
  );
}

export default Product;
