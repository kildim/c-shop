import {ProductLoaderProps} from './product-loader-props';
import {defer} from 'react-router-dom';
import {fetchProduct, fetchReviews, fetchSimilar} from '../../services/api/api';

const productLoader = (props: ProductLoaderProps) => {
  const {params} = props;
  return defer({
    product: fetchProduct(params.id),
    similar: fetchSimilar(params.id),
    reviews: fetchReviews(params.id),
    id: params.id
  });
};

export {productLoader};
