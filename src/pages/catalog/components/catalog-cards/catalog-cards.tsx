import Card from '../card/card';
import {CardsRange} from '../../../../types/cards-range';
import {PAGE_SIZE} from '../../../../constants/page-size';
import usePage from '../../../../hooks/use-page';
import {useRouteLoaderData} from 'react-router-dom';
import {CatalogLoaderData} from '../../catalog-loader';
import Pagination from '../pagination/pagination';

function CatalogCards(): JSX.Element | null {
  const page = usePage();
  const {cameras} = useRouteLoaderData('root') as CatalogLoaderData;
  const processedCameras = cameras;
  if (page === null) {
    throw new Response('', {statusText: 'Undefined PAGE!'});
  }

  const calculateShownCardsRange = (): CardsRange => {
    const lastIndex = PAGE_SIZE * page;
    const firstIndex = (lastIndex - PAGE_SIZE) < 0 ? 0 : (lastIndex - PAGE_SIZE);

    if (processedCameras.length === 0) {
      return {start: 0, end: 0};
    }

    if (processedCameras.length < (lastIndex + 1)) {
      return {start: firstIndex, end: processedCameras.length - 1};
    }

    return {start: firstIndex, end: lastIndex};
  };

  const range = calculateShownCardsRange();
  if (range === null) {
    throw new Response('', {statusText: 'Undefined RANGE!'});
  }

  return (
    <>
      <div className="cards catalog__cards">
        {processedCameras.slice(range.start, range.end).map((camera) => <Card camera={camera} key={camera.id}/>)}
      </div>
      <Pagination/>
    </>

  );
}

export default CatalogCards;
