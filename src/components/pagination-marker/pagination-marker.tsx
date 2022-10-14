import {useDispatch, useSelector} from 'react-redux';
import {getActivePage} from '../../store/reducers/cameras/selectors';
import {PaginationMarkerProps} from './pagination-marker-props';
import {setActivePage} from '../../store/reducers/cameras/cameras-actions';
import {MouseEventHandler} from 'react';

function PaginationMarker(props: PaginationMarkerProps): JSX.Element {
  const {pageNumber} = props;
  const activePage = useSelector(getActivePage);
  const dispatch = useDispatch();

  const handleRefClick: MouseEventHandler = (event) => {
    event.preventDefault();
    dispatch(setActivePage(pageNumber));
  };

  return (
    <li className="pagination__item">
      <a className={`pagination__link ${pageNumber === activePage ? 'pagination__link--active' : ''}`} href="" onClick={handleRefClick}>
        {pageNumber}
      </a>
    </li>
  );
}

export default PaginationMarker;
