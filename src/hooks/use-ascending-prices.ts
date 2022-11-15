import {useRouteLoaderData} from 'react-router-dom';
import {CatalogLoaderData} from '../pages/catalog/catalog-loader';

function useAscendingPrices() {
  const {cameras} = useRouteLoaderData('root') as CatalogLoaderData;
  return ({prices: cameras.map((camera) => camera.price).sort((firstItem, secondItem) => firstItem - secondItem)});
}

export default useAscendingPrices;
