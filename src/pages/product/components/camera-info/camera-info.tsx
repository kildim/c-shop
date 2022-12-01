import {Link, useAsyncValue, useNavigate} from 'react-router-dom';
import {RootRouterPath} from '../../../../routers/root-route-path';
import Rating from '../../../../components/rating/rating';
import ProductInfoTabs from './components/product-info-tabs/product-info-tabs';
import {Camera} from '../../../../types/camera';
import {setBuyPopupShown} from '../../../../store/reducers/cameras/cameras-actions';
import {useDispatch} from 'react-redux';

function CameraInfo(): JSX.Element {
  const product = useAsyncValue() as Camera;
  const dispatch = useDispatch();
  const handleAddToCartClick = () => dispatch(setBuyPopupShown(product.id));

  return (
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
              <span className="breadcrumbs__link breadcrumbs__link--active">{product.name}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-content__section">
        <section className="product">
          <div className="container">
            <div className="product__img">
              <picture>
                <source type="image/webp" srcSet={`${product.previewImgWebp}, ${product.previewImg2x} 2x`}/>
                <img
                  src={product.previewImg} srcSet={`${product.previewImg2x} 2x`} width="560" height="480"
                  alt={product.name}
                />
              </picture>
            </div>
            <div className="product__content">
              <h1 className="title title--h3">{product.name}</h1>
              <div className="rate product__rate">
                <Rating rating={product.rating}/>
                <p className="visually-hidden">`Рейтинг: ${product.rating}`</p>
                <p className="rate__count">
                  <span className="visually-hidden">Всего оценок:</span>
                  {product.reviewCount}
                </p>
              </div>
              <p className="product__price"><span className="visually-hidden">Цена:</span>{product.price} ₽
              </p>
              <button className="btn btn--purple" type="button"
                onClick={handleAddToCartClick}
              >
                <svg width="24" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-add-basket"></use>
                </svg>
                Добавить в корзину
              </button>
              <ProductInfoTabs product={product}/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CameraInfo;
