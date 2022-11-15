import {useEffect} from 'react';
import Banner from './components/banner/banner';
import {Link, Outlet} from 'react-router-dom';
import ModalOverlay from '../../components/modal-overlay/modal-overlay';
import BasketAdd from './components/basket-add/basket-add';
import {useDispatch, useSelector} from 'react-redux';
import {getBuyPopupShown} from '../../store/reducers/cameras/selectors';
import {setBuyPopupShown} from '../../store/reducers/cameras/cameras-actions';
import {RootRouterPath} from '../../routers/root-route-path';
import Sort from './components/sort/sort';
import Filter from './components/filters/filter';

function Catalog(): JSX.Element {
  useEffect(() => {
    document.title = 'Каталог - Фотошоп';
  });

  const detailedShown = useSelector(getBuyPopupShown);

  const dispatch = useDispatch();
  const handleCloseBasketAddModalClick = () => {
    dispatch(setBuyPopupShown(null));
  };

  return (
    <>
      <main>
        <Banner/>
        <div className="page-content">
          <div className="breadcrumbs">
            <div className="container">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={RootRouterPath.Root}>Главная
                    <svg width="5" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"></use>
                    </svg>
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
                </li>
              </ul>
            </div>
          </div>
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <div className="catalog-filter">
                    <Filter/>
                  </div>
                </div>
                <div className="catalog__content">
                  <div className="catalog-sort">
                    <Sort/>
                  </div>
                  <Outlet/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {
        detailedShown !== null &&
        <ModalOverlay onClosePopup={handleCloseBasketAddModalClick}>
          <BasketAdd card={detailedShown} onClosePopupClick={handleCloseBasketAddModalClick}/>
        </ModalOverlay>
      }
    </>
  );
}

export default Catalog;
