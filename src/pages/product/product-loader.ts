import {ProductLoaderProps} from './product-loader-props';
import {defer} from 'react-router-dom';
import {fetchProduct} from '../../services/api/api';

const productLoader = (props: ProductLoaderProps) => {
  const {params} = props;
  return defer({product: fetchProduct(params.id)});
};

export {productLoader};
