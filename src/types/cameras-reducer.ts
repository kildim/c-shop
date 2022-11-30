export type CamerasReducer = {
  isCameraLoading: boolean;
  cart: {[index: number]: number};
  buyPopupShown: number | null;
  isReviewPosting: boolean;
  apiError: string | null;
  isNewReviewSuccessShown: boolean;
  isNewReviewShown: boolean;
  isSuccessfulAddToBasketShown: boolean;
};
