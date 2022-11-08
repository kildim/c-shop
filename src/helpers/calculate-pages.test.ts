import {PAGE_SIZE} from '../constants/page-size';
import {calculatePages} from './calculate-pages';

describe('Function: calculatePages', () => {
  const PAGES_COUNT = 3;
  const EXACT_ITEMS = PAGES_COUNT * PAGE_SIZE;
  const GREATER_ITEMS = EXACT_ITEMS + 1;
  const LOWER_ITEMS = EXACT_ITEMS - 1;

  it('should calculate PAGES_COUNT using aliquot as argument', () => {
    expect(calculatePages(EXACT_ITEMS)).toBe(PAGES_COUNT);
  });

  it('should calculate increment PAGES_COUNT using GREATER_ITEMS as the argument', () => {
    expect(calculatePages(GREATER_ITEMS)).toBe(PAGES_COUNT + 1);
  });

  it('should calculate PAGES_COUNT using LOWER_ITEMS as the argument', () => {
    expect(calculatePages(LOWER_ITEMS)).toBe(PAGES_COUNT);
  });

  it('should calculate ZERO using ZERO as the argument', () => {
    expect(calculatePages(0)).toBe(0);
  });

});
