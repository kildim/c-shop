import {Camera} from '../../types/camera';

export type BasketAddProps = {
  card: Camera;
  onClosePopupClick?: () => void | null;
  onAddToBasketClick?: () => void | null;
};
