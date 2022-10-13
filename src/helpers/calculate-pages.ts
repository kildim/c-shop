import {PAGE_SIZE} from '../constants/page-size';

export const calculatePages = (itemsCount: number) => {
  const preAmount = Math.abs(Math.trunc(itemsCount / PAGE_SIZE));
  return (itemsCount % PAGE_SIZE > 0) ? preAmount + 1 : preAmount;
};
