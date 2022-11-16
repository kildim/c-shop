import {Form, useSearchParams} from 'react-router-dom';
import PriceFilter from './components/price-filter/price-filter';
import {FilterSearchParam} from '../../../../types/filter-search-param';
import CategoryFilter from './components/category-filter/category-filter';

function Filter(): JSX.Element {
  const [,setSearchParams] = useSearchParams();
  const handleResetClick = () => {
    setSearchParams((params) => {
      params.delete(FilterSearchParam.MinPrice);
      params.delete(FilterSearchParam.MaxPrice);
      params.delete(FilterSearchParam.Videocamera);
      params.delete(FilterSearchParam.Photocamera);
      return params;
    });
  };

  return (
    <Form>
      <h2 className="visually-hidden">Фильтр</h2>
      <PriceFilter/>
      <CategoryFilter/>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Тип камеры</legend>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox" name="digital" checked/>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Цифровая</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox" name="film" disabled/>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Плёночная</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox" name="snapshot"/>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Моментальная</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox" name="collection" checked disabled/>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Коллекционная</span>
          </label>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Уровень</legend>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox" name="zero" checked/>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Нулевой</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox" name="non-professional"/>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Любительский</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox" name="professional"/>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Профессиональный</span>
          </label>
        </div>
      </fieldset>
      <button className="btn catalog-filter__reset-btn" type="reset" onClick={handleResetClick}>
        Сбросить фильтры
      </button>
    </Form>
  );
}

export default Filter;
