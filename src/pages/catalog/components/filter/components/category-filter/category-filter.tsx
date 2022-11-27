import {useSearchParams} from 'react-router-dom';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';
import {CameraCategory} from '../../../../../../types/camera-category';
import {CameraType} from '../../../../../../types/camera-type';

function CategoryFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = searchParams.getAll(FilterSearchParam.Category);
  const types = searchParams.getAll(FilterSearchParam.Type);
  const setCategorySearchParams = (categoryParams: string[]) => {
    setSearchParams((params) => {
      params.delete(FilterSearchParam.Category);
      if (categoryParams.length > 0) {
        categoryParams.forEach((category) => params.append(FilterSearchParam.Category, category));
      }
      return params;
    });
  };
  const setTypeSearchParams = (typeParams: string[]) => {
    setSearchParams((params) => {
      params.delete(FilterSearchParam.Type);
      if (typeParams.length > 0) {
        typeParams.forEach((type) => params.append(FilterSearchParam.Type, type));
      }
      return params;
    });
  };
  let resultCategories: string[] = [];
  let resultTypes: string[] = [];

  const handlePhotocameraFilterClick = () => {
    if (categories.includes(CameraCategory.Photocamera)) {
      if (categories.includes(CameraCategory.Videocamera)) {
        resultTypes = types.filter((type) => type !== CameraType.Film && type !== CameraType.Instant);
        setTypeSearchParams(resultTypes);
      }
      resultCategories = categories.filter((category) => category !== CameraCategory.Photocamera);
    } else {
      resultCategories = [...categories, CameraCategory.Photocamera];
    }
    setCategorySearchParams(resultCategories);
  };

  const handleVideocameraFilterClick = () => {
    if (categories.includes(CameraCategory.Videocamera)) {
      resultCategories = categories.filter((category) => category !== CameraCategory.Videocamera);
    } else {
      resultTypes = types.filter((type) => type !== CameraType.Film && type !== CameraType.Instant);
      setTypeSearchParams(resultTypes);
      resultCategories = [...categories, CameraCategory.Videocamera];
    }
    setCategorySearchParams(resultCategories);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="photocamera"
            onChange={handlePhotocameraFilterClick}
            checked={categories.includes(CameraCategory.Photocamera)}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Фотокамера</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="videocamera"
            onChange={handleVideocameraFilterClick}
            checked={categories.includes(CameraCategory.Videocamera)}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Видеокамера</span>
        </label>
      </div>
    </fieldset>
  );
}

export default CategoryFilter;
