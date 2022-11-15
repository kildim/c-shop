import {useSearchParams} from 'react-router-dom';
import {SyntheticEvent} from 'react';
import {searchParamsAsObject} from '../../../../helpers/search-params-as-object';
import {Direction} from '../../../../types/direction';
import {Sorting} from '../../../../types/sorting';
import {SortingSearchParam} from '../../../../types/sorting-search-param';

function Sort(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePriceSortingChange = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchParams((params) => ({...searchParamsAsObject(params), [SortingSearchParam.Sorting]: Sorting.Price}));
  };
  const handlePopularitySortingChange = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchParams((params) => ({...searchParamsAsObject(params), [SortingSearchParam.Sorting]: Sorting.Popularity}));
  };
  const handleOrderAscChange = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchParams((params) => ({...searchParamsAsObject(params), [SortingSearchParam.Direction]: Direction.Asc}));
  };
  const handleOrderDescChange = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchParams((params) => ({...searchParamsAsObject(params), [SortingSearchParam.Direction]: Direction.Desc}));
  };

  return (
    <form>
      <div className="catalog-sort__inner">
        <p className="title title--h5">Сортировать:</p>
        <div className="catalog-sort__type">
          <div className="catalog-sort__btn-text">
            <input type="radio" id="sortPrice" name="sort"
              checked={searchParams.get(SortingSearchParam.Sorting) === Sorting.Price}
              onChange={handlePriceSortingChange}
            />
            <label htmlFor="sortPrice">по цене</label>
          </div>
          <div className="catalog-sort__btn-text">
            <input type="radio" id="sortPopular" name="sort"
              checked={searchParams.get(SortingSearchParam.Sorting) === Sorting.Popularity}
              onChange={handlePopularitySortingChange}
            />
            <label htmlFor="sortPopular">по популярности</label>
          </div>
        </div>
        <div className="catalog-sort__order">
          <div className="catalog-sort__btn catalog-sort__btn--up">
            <input type="radio" id="up" name="sort-icon" aria-label="По возрастанию"
              checked={searchParams.get(SortingSearchParam.Direction) === Direction.Asc}
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
              checked={searchParams.get(SortingSearchParam.Direction) === Direction.Desc}
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
