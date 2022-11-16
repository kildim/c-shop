import {PaginationMarkerProps} from './pagination-marker-props';
import {MouseEventHandler} from 'react';
import usePage from '../../../../../../hooks/use-page';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';

function PaginationMarker(props: PaginationMarkerProps): JSX.Element | null {
  const {pageNumber} = props;
  const [searchParams] = useSearchParams();

  const activePage = usePage();
  const navigate = useNavigate();

  if (activePage === null) {
    return null;
  }

  const handleRefClick: MouseEventHandler = (event) => {
    event.preventDefault();
    navigate(`../page_${pageNumber}?${searchParams.toString()}`);
    scroll.scrollToTop();
  };

  return (
    <li className="pagination__item">
      <Link className={`pagination__link ${pageNumber === activePage ? 'pagination__link--active' : ''}`} to={''} onClick={handleRefClick}>
        {pageNumber}
      </Link>
    </li>
  );
}

export default PaginationMarker;
