import {getPagesCount} from '../../../../store/reducers/cameras/selectors';
import {useSelector} from 'react-redux';
import PaginationMarker from '../pagination-marker/pagination-marker';
import {MouseEventHandler} from 'react';
import usePage from '../../../../hooks/use-page';
import {Link, useNavigate} from 'react-router-dom';

function Pagination(): JSX.Element | null {
  const activePage = usePage();
  const pagesCount = useSelector(getPagesCount);
  const navigate = useNavigate();


  if (activePage === null) {
    return null;
  }

  const counter = Array(pagesCount).fill(null).map((item, index) => ++index);
  const handleBackwardClick: MouseEventHandler = (event) => {
    event.preventDefault();
    navigate(`page_${activePage - 1}`);
  };
  const handleForwardClick: MouseEventHandler = (event) => {
    event.preventDefault();
    navigate(`page_${activePage + 1}`);
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <Link className={`pagination__link ${activePage === 1 ? 'hidden' : ''}`} to='' onClick={handleBackwardClick}>Назад</Link>
        </li>
        {counter.map((item) => (<PaginationMarker pageNumber={item} key={item}/>))}
        <li className="pagination__item">
          <Link className={`pagination__link ${activePage === pagesCount ? 'hidden' : ''}`} to='' onClick={handleForwardClick}>Далее</Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
