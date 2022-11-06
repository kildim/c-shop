import faker from 'faker';

export const mockReview ={
  "id": faker.datatype.number().toString(),
  "userName": faker.name.findName(),
  "advantage": 'FAKE ADVANTAGE',
  "disadvantage": 'FAKE DISADVANTAGE',
  "review": 'FAKE REVIEW',
  "rating": faker.datatype.number({min: 1, max: 5}),
  "createAt": '2022-07-09T13:24:57.980Z',
  "cameraId": faker.datatype.number(),
}
