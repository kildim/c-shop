import {ProductLoaderProps} from './product-loader-props';
import {defer} from 'react-router-dom';
import {fetchProduct, fetchSimilar} from '../../services/api/api';

const productLoader = (props: ProductLoaderProps) => {
  const {params} = props;
  return defer({product: fetchProduct(params.id), similar: fetchSimilar(params.id)});
};

export {productLoader};
