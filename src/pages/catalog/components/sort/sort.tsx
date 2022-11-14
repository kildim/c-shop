import {useSearchParams} from 'react-router-dom';
import {SyntheticEvent} from 'react';
import {searchParamsAsObject} from '../../../../helpers/search-params-as-object';

enum Sorting {
  Price = 'price',
  Popularity = 'popularity',
}
enum Direction{
  Asc = 'asc',
  Desc = 'desc',
}

function Sort(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePriceSortingChange = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchParams((params) => ({...searchParamsAsObject(params), sorting: Sorting.Price}));
  };
  const handlePopularitySortingChange = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchParams((params) => ({...searchParamsAsObject(params), sorting: Sorting.Popularity}));
  };
  const handleOrderAscChange = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchParams((params) => ({...searchParamsAsObject(params), order: Direction.Asc}));
  };
  const handleOrderDescChange = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchParams((params) => ({...searchParamsAsObject(params), order: Direction.Desc}));
  };

  return (
    <form action="src/pages/catalog/catalog#">
      <div className="catalog-sort__inner">
        <p className="title title--h5">Сортировать:</p>
        <div className="catalog-sort__type">
          <div className="catalog-sort__btn-text">
            <input type="radio" id="sortPrice" name="sort"
              checked={searchParams.get('sorting') === Sorting.Price}
              onChange={handlePriceSortingChange}
            />
            <label htmlFor="sortPrice">по цене</label>
          </div>
          <div className="catalog-sort__btn-text">
            <input type="radio" id="sortPopular" name="sort"
              checked={searchParams.get('sorting') === Sorting.Popularity}
              onChange={handlePopularitySortingChange}
            />
            <label htmlFor="sortPopular">по популярности</label>
          </div>
        </div>
        <div className="catalog-sort__order">
          <div className="catalog-sort__btn catalog-sort__btn--up">
            <input type="radio" id="up" name="sort-icon" aria-label="По возрастанию"
              checked={searchParams.get('order') === Direction.Asc}
              onChange={handleOrderAscChange}
            />
            <label htmlFor="up">
              <svg width="16" height="14" aria-hidden="true">
                <use xlinkHref="#icon-sort"></use>
              </svg>
            </label>
          </div>
          <div className="catalog-sort__btn catalog-sort__btn--down">
            <input type="radio" id="down" name="sort-icon" aria-label="По убыванию"
              checked={searchParams.get('order') === Direction.Desc}
              onChange={handleOrderDescChange}
            />
            <label htmlFor="down">
              <svg width="16" height="14" aria-hidden="true">
                <use xlinkHref="#icon-sort"></use>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </form>

  );
}

export default Sort;
