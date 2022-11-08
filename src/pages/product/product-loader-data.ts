import {Camera} from '../../types/camera';
import {Review} from '../../types/review';

type ProductLoaderData = { product: Camera; similar: Camera[]; reviews: Review[]; id: number };

export type {ProductLoaderData};
