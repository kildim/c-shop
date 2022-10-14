import Card from '../card/card';
import {useSelector} from 'react-redux';
import {getActivePage, getCameras} from '../../store/reducers/cameras/selectors';
import {CardsRange} from '../../types/cards-range';
import {PAGE_SIZE} from '../../constants/page-size';

function CatalogCards(): JSX.Element {
  const cameras = useSelector(getCameras);
  const activePage = useSelector(getActivePage);

  const calculateShownCardsRange = (page: number): CardsRange => {
    const lastIndex = PAGE_SIZE * page;
    const firstIndex = (lastIndex - PAGE_SIZE) < 0 ? 0 : (lastIndex - PAGE_SIZE);

    if (cameras.length === 0) {
      return {start: 0, end: 0};
    }

    if (cameras.length < (lastIndex + 1)) {
      return {start: firstIndex, end: cameras.length - 1};
    }

    return {start: firstIndex, end: lastIndex};
  };

  const range = calculateShownCardsRange(activePage);
  return (
    <div className="cards catalog__cards">
      {cameras.slice(range.start, range.end).map((camera) => <Card camera={camera} key={camera.id}/>)}
    </div>
  );
}

export default CatalogCards;
