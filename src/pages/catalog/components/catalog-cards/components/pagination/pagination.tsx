import {MouseEventHandler, useEffect} from 'react';
import usePage from '../../../../../../hooks/use-page';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import {calculatePages} from '../../../../../../helpers/calculate-pages';
import {Camera} from '../../../../../../types/camera';
import PaginationMarker from '../pagination-marker/pagination-marker';

type PaginationProps = {
  cameras: Camera[];
}

function Pagination(props: PaginationProps): JSX.Element | null {
  const {cameras} = props;
  const activePage = usePage();
  const pagesCount = calculatePages(cameras.length);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (activePage === null) {
      throw new Error('Ошибка парсинга номера страницы!');
    }
    if (activePage > pagesCount) {
      navigate(`../page_1?${searchParams.toString()}`);
    }
  });

  if (activePage === null) {
    return null;
  }

  const pagesNumbers = Array(pagesCount).fill(null).map((item, index) => ++index);
  const handleBackwardClick: MouseEventHandler = (event) => {
    event.preventDefault();
    navigate(`../page_${activePage - 1}?${searchParams.toString()}`);
    scroll.scrollToTop();
  };
  const handleForwardClick: MouseEventHandler = (event) => {
    event.preventDefault();
    navigate(`../page_${activePage + 1}?${searchParams.toString()}`);
    scroll.scrollToTop();
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <Link className={`pagination__link ${activePage === 1 ? 'hidden' : ''}`} to='' onClick={handleBackwardClick}>Назад</Link>
        </li>
        {pagesNumbers.map((item) => (<PaginationMarker pageNumber={item} key={item}/>))}
        <li className="pagination__item">
          <Link className={`pagination__link ${activePage === pagesCount ? 'hidden' : ''}`} to='' onClick={handleForwardClick}>Далее</Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
