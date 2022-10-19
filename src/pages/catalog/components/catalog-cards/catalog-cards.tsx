import Card from '../card/card';
import {useSelector} from 'react-redux';
import {getCameras} from '../../../../store/reducers/cameras/selectors';
import {CardsRange} from '../../../../types/cards-range';
import {PAGE_SIZE} from '../../../../constants/page-size';
import usePage from '../../../../hooks/use-page';

function CatalogCards(): JSX.Element | null {
  const cameras = useSelector(getCameras);
  const page = usePage();

  if (page === null) {
    throw new Response('', {statusText: 'Undefined PAGE!'});
  }

  const calculateShownCardsRange = (): CardsRange => {
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

  const range = calculateShownCardsRange();
  if (range === null) {
    throw new Response('', {statusText: 'Undefined RANGE!'});
  }

  return (
    <div className="cards catalog__cards">
      {cameras.slice(range.start, range.end).map((camera) => <Card camera={camera} key={camera.id}/>)}
    </div>
  );
}

export default CatalogCards;
