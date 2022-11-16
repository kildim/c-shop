import {useSearchParams} from 'react-router-dom';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';
import {Category} from '../../../../../../types/category';
import {searchParamsAsObject} from '../../../../../../helpers/search-params-as-object';

function CategoryFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePhotocameraFilterClick = () => {
    if (searchParams.get(FilterSearchParam.Photocamera) === null) {
      setSearchParams((params) => ({ ...searchParamsAsObject(params), [FilterSearchParam.Photocamera]: Category.Photocamera}));
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Photocamera);
        return ({ ...searchParamsAsObject(params)});
      });
    }
  };
  const handleVideocameraFilterClick = () => {
    if (searchParams.get(FilterSearchParam.Videocamera) === null) {
      setSearchParams((params) => ({ ...searchParamsAsObject(params), [FilterSearchParam.Videocamera]: Category.Videocamera}));
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Videocamera);
        return ({ ...searchParamsAsObject(params)});
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
            checked={searchParams.get(FilterSearchParam.Photocamera) !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Фотокамера</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="videocamera"
            onChange={handleVideocameraFilterClick}
            checked={searchParams.get(FilterSearchParam.Videocamera) !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Видеокамера</span>
        </label>
      </div>
    </fieldset>
  );
}

export default CategoryFilter;
