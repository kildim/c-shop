import {useSearchParams} from 'react-router-dom';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';
import {CameraCategory} from '../../../../../../types/CameraCategory';

function CategoryFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = searchParams.getAll(FilterSearchParam.Category);
  const setCategorySearchParams = (categoryParams: string[]) => {
    setSearchParams((params) => {
      params.delete(FilterSearchParam.Category);
      if (categoryParams.length > 0) {
        categoryParams.forEach((category) => params.append(FilterSearchParam.Category, category));
      }
      return params;
    });
  };
  let resultCategories: string[] = [];

  //TODO         if (videocameraFilter !== null) {
  //           params.delete(FilterSearchParam.Instant);
  //           params.delete(FilterSearchParam.Film);
  //         }

  const handlePhotocameraFilterClick = () => {
    if (categories.includes(CameraCategory.Photocamera)) {
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
