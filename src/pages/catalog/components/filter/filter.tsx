import {Form, useSearchParams} from 'react-router-dom';
import PriceFilter from './components/price-filter/price-filter';
import {FilterSearchParam} from '../../../../types/filter-search-param';
import CategoryFilter from './components/category-filter/category-filter';
import TypeFilter from './components/type-filter/type-filter';
import LevelFilter from './components/levelFilter/level-filter';

function Filter(): JSX.Element {
  const [,setSearchParams] = useSearchParams();
  const handleResetClick = () => {
    setSearchParams((params) => {
      params.delete(FilterSearchParam.MinPrice);
      params.delete(FilterSearchParam.MaxPrice);
      params.delete(FilterSearchParam.Videocamera);
      params.delete(FilterSearchParam.Photocamera);
      params.delete(FilterSearchParam.Digital);
      params.delete(FilterSearchParam.Film);
      params.delete(FilterSearchParam.Instant);
      params.delete(FilterSearchParam.Collection);
      params.delete(FilterSearchParam.Novice);
      params.delete(FilterSearchParam.Hobby);
      params.delete(FilterSearchParam.Professional);
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
