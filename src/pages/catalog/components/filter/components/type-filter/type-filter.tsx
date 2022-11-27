import {useSearchParams} from 'react-router-dom';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';
import {CameraCategory} from '../../../../../../types/camera-category';
import {CameraType} from '../../../../../../types/camera-type';

function TypeFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = searchParams.getAll(FilterSearchParam.Category);
  const types = searchParams.getAll(FilterSearchParam.Type);
  const setTypeSearchParams = (typeParams: string[]) => {
    setSearchParams((params) => {
      params.delete(FilterSearchParam.Type);
      if (typeParams.length > 0) {
        typeParams.forEach((type) => params.append(FilterSearchParam.Type, type));
      }
      return params;
    });
  };
  let resultTypes: string[] = [];

  const handleDigitalFilterChange = () => {
    if (types.includes(CameraType.Digital)) {
      resultTypes = types.filter((type) => type !== CameraType.Digital);
    } else {
      resultTypes = [...types, CameraType.Digital];
    }
    setTypeSearchParams(resultTypes);
  };
  const handleFilmFilterChange = () => {
    if (types.includes(CameraType.Film)) {
      resultTypes = types.filter((type) => type !== CameraType.Film);
    } else {
      resultTypes = [...types, CameraType.Film];
    }
    setTypeSearchParams(resultTypes);
  };
  const handleInstantFilterChange = () => {
    if (types.includes(CameraType.Instant)) {
      resultTypes = types.filter((type) => type !== CameraType.Instant);
    } else {
      resultTypes = [...types, CameraType.Instant];
    }
    setTypeSearchParams(resultTypes);
  };
  const handleCollectionFilterChange = () => {
    if (types.includes(CameraType.Collection)) {
      resultTypes = types.filter((type) => type !== CameraType.Collection);
    } else {
      resultTypes = [...types, CameraType.Collection];
    }
    setTypeSearchParams(resultTypes);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="digital"
            onChange={handleDigitalFilterChange}
            checked={types.includes(CameraType.Digital)}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Цифровая</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="film"
            onChange={handleFilmFilterChange}
            checked={types.includes(CameraType.Film)}
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
            checked={types.includes(CameraType.Instant)}
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
            checked={types.includes(CameraType.Collection)}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Коллекционная</span>
        </label>
      </div>
    </fieldset>
  );
}

export default TypeFilter;
