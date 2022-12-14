import {Form, useSearchParams} from 'react-router-dom';
import PriceFilter from './components/price-filter/price-filter';
import {FilterSearchParam} from '../../../../types/filter-search-param';
import CategoryFilter from './components/category-filter/category-filter';
import TypeFilter from './components/type-filter/type-filter';
import LevelFilter from './components/level-filter/level-filter';

function Filter(): JSX.Element {
  const [,setSearchParams] = useSearchParams();
  const handleResetClick = () => {
    setSearchParams((params) => {
      params.delete(FilterSearchParam.MinPrice);
      params.delete(FilterSearchParam.MaxPrice);
      params.delete(FilterSearchParam.Category);
      params.delete(FilterSearchParam.Type);
      params.delete(FilterSearchParam.Level);
      return params;
    });
  };

  return (
    <Form>
      <h2 className="visually-hidden">Фильтр</h2>
      <PriceFilter/>
      <CategoryFilter/>
      <TypeFilter/>
      <LevelFilter/>
      <button className="btn catalog-filter__reset-btn" type="reset" onClick={handleResetClick}>
        Сбросить фильтры
      </button>
    </Form>
  );
}

export default Filter;
