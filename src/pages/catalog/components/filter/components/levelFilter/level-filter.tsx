import {useSearchParams} from 'react-router-dom';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';
import {CameraLevel} from '../../../../../../types/camera-level';

function LevelFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const levels = searchParams.getAll(FilterSearchParam.Level);
  const setLevelSearchParams = (levelParams: string[]) => {
    setSearchParams((params) => {
      params.delete(FilterSearchParam.Level);
      if (levelParams.length > 0) {
        levelParams.forEach((type) => params.append(FilterSearchParam.Level, type));
      }
      return params;
    });
  };
  let resultLevels: string[] = [];

  const handleNoviceFilterChange = () => {
    if (levels.includes(CameraLevel.Novice)) {
      resultLevels = levels.filter((level) => level !== CameraLevel.Novice);
    } else {
      resultLevels = [...levels, CameraLevel.Novice];
    }
    setLevelSearchParams(resultLevels);
  };
  const handleHobbyFilterChange = () => {
    if (levels.includes(CameraLevel.Hobby)) {
      resultLevels = levels.filter((level) => level !== CameraLevel.Hobby);
    } else {
      resultLevels = [...levels, CameraLevel.Hobby];
    }
    setLevelSearchParams(resultLevels);
  };
  const handleProfessionalFilterChange = () => {
    if (levels.includes(CameraLevel.Professional)) {
      resultLevels = levels.filter((level) => level !== CameraLevel.Professional);
    } else {
      resultLevels = [...levels, CameraLevel.Professional];
    }
    setLevelSearchParams(resultLevels);
  };
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="zero"
            onChange={handleNoviceFilterChange}
            checked={levels.includes(CameraLevel.Novice)}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Нулевой</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="non-professional"
            onChange={handleHobbyFilterChange}
            checked={levels.includes(CameraLevel.Hobby)}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Любительский</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="professional"
            onChange={handleProfessionalFilterChange}
            checked={levels.includes(CameraLevel.Professional)}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Профессиональный</span>
        </label>
      </div>
    </fieldset>
  );
}

export default LevelFilter;
