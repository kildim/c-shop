const ApiUrl = 'https://camera-shop.accelerator.pages.academy/';

export const Url = {
  Api: ApiUrl,
  Cameras: `${ApiUrl}cameras`,
  Promo: `${ApiUrl}promo`,
  PostReview: `${ApiUrl}reviews`,
  Coupon: `${ApiUrl}coupons`,
  Order: `${ApiUrl}orders`,
} as const;
