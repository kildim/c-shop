import {useSearchParams} from 'react-router-dom';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';
import {searchParamsAsObject} from '../../../../../../helpers/search-params-as-object';

function LevelFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const noviceFilter = searchParams.get(FilterSearchParam.Novice);
  const hobbyFilter = searchParams.get(FilterSearchParam.Hobby);
  const professionalFilter = searchParams.get(FilterSearchParam.Professional);

  const handleNoviceFilterChange = () => {
    if (noviceFilter === null) {
      setSearchParams((params) => {
        params.append(FilterSearchParam.Novice, FilterSearchParam.Novice);
        return ({...searchParamsAsObject(params)});
      });
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Novice);
        return ({...searchParamsAsObject(params)});
      });
    }
  };
  const handleHobbyFilterChange = () => {
    if (hobbyFilter === null) {
      setSearchParams((params) => {
        params.append(FilterSearchParam.Hobby, FilterSearchParam.Hobby);
        return ({...searchParamsAsObject(params)});
      });
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Hobby);
        return ({...searchParamsAsObject(params)});
      });
    }
  };
  const handleProfessionalFilterChange = () => {
    if (professionalFilter === null) {
      setSearchParams((params) => {
        params.append(FilterSearchParam.Professional, FilterSearchParam.Professional);
        return ({...searchParamsAsObject(params)});
      });
    } else {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.Professional);
        return ({...searchParamsAsObject(params)});
      });
    }
  };
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="zero"
            onChange={handleNoviceFilterChange}
            checked={noviceFilter !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Нулевой</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="non-professional"
            onChange={handleHobbyFilterChange}
            checked={hobbyFilter !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Любительский</span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox" name="professional"
            onChange={handleProfessionalFilterChange}
            checked={professionalFilter !== null}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">Профессиональный</span>
        </label>
      </div>
    </fieldset>
  );
}

export default LevelFilter;
