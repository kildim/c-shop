import Card from '../../../../components/card/card';
import {PAGE_SIZE} from '../../../../constants/page-size';
import usePage from '../../../../hooks/use-page';
import {useRouteLoaderData, useSearchParams} from 'react-router-dom';
import {CatalogLoaderData} from '../../catalog-loader';
import Pagination from './components/pagination/pagination';
import getSortFunction from './helpers/get-sort-function';
import getPriceFilter from './helpers/get-price-filter';

function CatalogCards(): JSX.Element | null {
  const page = usePage();
  const [searchParams] = useSearchParams();
  const {cameras} = useRouteLoaderData('root') as CatalogLoaderData;
  const processedCameras = cameras
    .filter(getPriceFilter(searchParams))
    .sort(getSortFunction(searchParams));

  if (page === null) {
    throw new Response('', {statusText: 'Undefined PAGE!'});
  }

  const camerasPage = processedCameras.slice(PAGE_SIZE * page - PAGE_SIZE, PAGE_SIZE * page);

  if (processedCameras.length === 0) {
    return (<p>По вашему запросу ничего не найдено</p>);
  }

  return (
    <>
      <div className="cards catalog__cards">
        {camerasPage.map((camera) => <Card camera={camera} key={camera.id}/>)}
      </div>
      <Pagination cameras={processedCameras}/>
    </>

  );
}

export default CatalogCards;
