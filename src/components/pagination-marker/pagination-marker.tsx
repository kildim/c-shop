import {PaginationMarkerProps} from './pagination-marker-props';
import {MouseEventHandler} from 'react';
import usePage from '../../hooks/use-page';
import {useNavigate} from 'react-router-dom';

function PaginationMarker(props: PaginationMarkerProps): JSX.Element | null {
  const {pageNumber} = props;

  const activePage = usePage();
  const navigate = useNavigate();

  if (activePage === null) {
    return null;
  }

  const handleRefClick: MouseEventHandler = (event) => {
    event.preventDefault();
    navigate(`page_${pageNumber}`);
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
