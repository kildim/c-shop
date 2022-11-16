import SelectList from './components/select-list/select-list';
import {SyntheticEvent, useState} from 'react';
import {Form, useRouteLoaderData} from 'react-router-dom';
import {CamerasLoaderData} from '../../../../pages/catalog/cameras-loader';

function FormSearch(): JSX.Element {
  const [searchName, setSearchName] = useState<string>('');
  const {cameras} = useRouteLoaderData('root') as CamerasLoaderData;

  const handleSearchChange = (event: SyntheticEvent<HTMLInputElement>) => setSearchName(event.currentTarget.value);
  const findItems = () => {
    if (searchName === '') {
      return [];
    }
    const pattern = new RegExp(searchName, 'i');
    return cameras.filter((camera) => pattern.test(camera.name));
  };
  const getDisplayAttribute = () => searchName === '' ? 'none' : 'flex';

  const handleResetClick = () => setSearchName('');

  return (
    <div className="form-search">
      <Form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input className="form-search__input" type="text" autoComplete="off"
            placeholder="Поиск по сайту" onChange={handleSearchChange}
            value={searchName}
          />
        </label>
        <SelectList items={findItems()}/>
      </Form>
      <button className="form-search__reset" style={{display: getDisplayAttribute()}} type="reset" onClick={handleResetClick}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default FormSearch;
