import {fetchPromo} from '../../services/api/api';
import {Promo} from '../../types/promo';

export type PromoLoaderData = {
  promo: Promo;
}

const promoLoader = async () => {
  const promo = await fetchPromo();
  return {promo};
};

export {promoLoader};
