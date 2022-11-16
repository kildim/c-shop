import faker from 'faker';

export const mockCamera = {
  id: faker.datatype.number(),
  name: 'FAKE NAME',
  vendorCode: 'FAKE VENDOR',
  type: 'FAKE TYPE',
  category: 'FAKE CATEGORY',
  description: 'FAKE DESCR',
  level: 'FAKE LEVEL',
  rating: faker.datatype.number({min: 1, max: 5}),
  price: faker.datatype.number(),
  previewImg: faker.image.imageUrl(),
  previewImg2x: faker.image.imageUrl(),
  previewImgWebp: faker.image.imageUrl(),
  previewImgWebp2x: faker.image.imageUrl(),
  reviewCount: faker.datatype.number(),
};
