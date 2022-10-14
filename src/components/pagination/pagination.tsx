import {getActivePage, getPagesCount} from '../../store/reducers/cameras/selectors';
import {useDispatch, useSelector} from 'react-redux';
import PaginationMarker from '../pagination-marker/pagination-marker';
import {MouseEventHandler} from 'react';
import {setActivePage} from '../../store/reducers/cameras/cameras-actions';

function Pagination(): JSX.Element {
  const activePage = useSelector(getActivePage);
  const pagesCount = useSelector(getPagesCount);
  const counter = Array(pagesCount).fill(null).map((item, index) => ++index);
  const dispatch = useDispatch();
  const handleBackwardClick: MouseEventHandler = (event) => {
    event.preventDefault();
    dispatch(setActivePage(activePage - 1));
  };
  const handleForwardClick: MouseEventHandler = (event) => {
    event.preventDefault();
    dispatch(setActivePage(activePage + 1));
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <a className={`pagination__link ${activePage === 1 ? 'hidden' : ''}`} href="" onClick={handleBackwardClick}>Назад</a>
        </li>
        {counter.map((item) => (<PaginationMarker pageNumber={item} key={item}/>))}
        <li className="pagination__item">
          <a className={`pagination__link ${activePage === pagesCount ? 'hidden' : ''}`} href="" onClick={handleForwardClick}>Далее</a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
