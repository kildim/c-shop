import {useSearchParams} from 'react-router-dom';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';
// import {Type} from '../../../../../../types/type';
import {searchParamsAsObject} from '../../../../../../helpers/search-params-as-object';

function TypeFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const videocameraFilter = searchParams.get(FilterSearchParam.Videocamera);
  const photocameraFilter = searchParams.get(FilterSearchParam.Photocamera);
  const digitalFilter = searchParams.get(FilterSearchParam.Digital);
  const filmFilter = searchParams.get(FilterSearchParam.Film);
  const instantFilter = searchParams.get(FilterSearchParam.Instant);
  const collectionFilter = searchParams.get(FilterSearchParam.Collection);

  const handleDigitalFilterClick = () => {
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
  const handleFilmFilterClick = () => {
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
  const handleInstantFilterClick = () => {
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
  const handleCollectionFilterClick = () => {
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
            onClick={handleDigitalFilterClick}
            checked={digitalFilter !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Цифровая</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="film"
            onClick={handleFilmFilterClick}
            checked={filmFilter !== null}
            disabled={videocameraFilter !== null && photocameraFilter === null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Плёночная</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="snapshot"
            onClick={handleInstantFilterClick}
            checked={instantFilter !== null}
            disabled={videocameraFilter !== null && photocameraFilter === null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Моментальная</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="collection"
            onClick={handleCollectionFilterClick}
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
