import {useSearchParams} from 'react-router-dom';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';
import {searchParamsAsObject} from '../../../../../../helpers/search-params-as-object';

function CategoryFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const videocameraFilter = searchParams.get(FilterSearchParam.Videocamera);
  const photocameraFilter = searchParams.get(FilterSearchParam.Photocamera);

  const handlePhotocameraFilterClick = () => {
    if (photocameraFilter === null) {
      setSearchParams((params) => {
        params.append(FilterSearchParam.Photocamera, FilterSearchParam.Photocamera);
        return {...searchParamsAsObject(params)};
      });
    } else {
      setSearchParams((params) => {
        if (videocameraFilter !== null) {
          params.delete(FilterSearchParam.Instant);
          params.delete(FilterSearchParam.Film);
        }
        params.delete(FilterSearchParam.Photocamera);
        return ({...searchParamsAsObject(params)});
      });
    }
  };
  const handleVideocameraFilterClick = () => {
    if (videocameraFilter === null) {
      setSearchParams((params) => {
        if (photocameraFilter === null) {
          params.delete(FilterSearchParam.Instant);
          params.delete(FilterSearchParam.Film);
        }
        params.append(FilterSearchParam.Videocamera, FilterSearchParam.Videocamera);
        return ({...searchParamsAsObject(params)});
      });
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Videocamera);
        return ({...searchParamsAsObject(params)});
      });
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="photocamera"
            onChange={handlePhotocameraFilterClick}
            checked={photocameraFilter !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Фотокамера</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="videocamera"
            onChange={handleVideocameraFilterClick}
            checked={videocameraFilter !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Видеокамера</span>
        </label>
      </div>
    </fieldset>
  );
}

export default CategoryFilter;
