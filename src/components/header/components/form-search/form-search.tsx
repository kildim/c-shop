import SelectList from './components/select-list/select-list';
import {SyntheticEvent, useEffect, useState} from 'react';
import {Form} from 'react-router-dom';
import {Camera} from '../../../../types/camera';
import {fetchCameras} from '../../../../services/api/api';

function FormSearch(): JSX.Element {
  const [searchName, setSearchName] = useState<string>('');
  const [cameras, setCameras] = useState<Camera[]>([]);
  useEffect( () => {
    const selectedCameras = async () => {
      const fetchedResponceRecord = await fetchCameras(new URLSearchParams({'name_like': searchName}));
      setCameras(fetchedResponceRecord.cameras);
    };
    selectedCameras().then();
  }, [searchName]);
  const handleSearchChange = (event: SyntheticEvent<HTMLInputElement>) => setSearchName(event.currentTarget.value);
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
        {searchName && <SelectList items={cameras}/>}

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
