import {useSearchParams} from 'react-router-dom';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';
import {searchParamsAsObject} from '../../../../../../helpers/search-params-as-object';
import {CameraCategory} from '../../../../../../types/CameraCategory';

function TypeFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = searchParams.getAll(FilterSearchParam.Category);
  const digitalFilter = searchParams.get(FilterSearchParam.Digital);
  const filmFilter = searchParams.get(FilterSearchParam.Film);
  const instantFilter = searchParams.get(FilterSearchParam.Instant);
  const collectionFilter = searchParams.get(FilterSearchParam.Collection);

  const handleDigitalFilterChange = () => {
    if (digitalFilter === null) {
      setSearchParams((params) => {
        params.append(FilterSearchParam.Digital, FilterSearchParam.Digital);
        return ({...searchParamsAsObject(params)});
      });
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Digital);
        return ({...searchParamsAsObject(params)});
      });
    }
  };
  const handleFilmFilterChange = () => {
    if (filmFilter === null) {
      setSearchParams((params) => {
        params.append(FilterSearchParam.Film, FilterSearchParam.Film);
        return ({...searchParamsAsObject(params)});
      });
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Film);
        return ({...searchParamsAsObject(params)});
      });
    }
  };
  const handleInstantFilterChange = () => {
    if (instantFilter === null) {
      setSearchParams((params) => {
        params.append(FilterSearchParam.Instant, FilterSearchParam.Instant);
        return ({...searchParamsAsObject(params)});
      });
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Instant);
        return ({...searchParamsAsObject(params)});
      });
    }
  };
  const handleCollectionFilterChange = () => {
    if (collectionFilter === null) {
      setSearchParams((params) => {
        params.append(FilterSearchParam.Collection, FilterSearchParam.Collection);
        return ({...searchParamsAsObject(params)});
      });
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Collection);
        return ({...searchParamsAsObject(params)});
      });
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="digital"
            onChange={handleDigitalFilterChange}
            checked={digitalFilter !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Цифровая</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="film"
            onChange={handleFilmFilterChange}
            checked={filmFilter !== null}
            disabled={categories.includes(CameraCategory.Videocamera) && !categories.includes(CameraCategory.Photocamera)}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Плёночная</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="snapshot"
            onChange={handleInstantFilterChange}
            checked={instantFilter !== null}
            disabled={categories.includes(CameraCategory.Videocamera) && !categories.includes(CameraCategory.Photocamera)}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Моментальная</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="collection"
            onChange={handleCollectionFilterChange}
            checked={collectionFilter !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Коллекционная</span>
        </label>
      </div>
    </fieldset>
  );
}

export default TypeFilter;
