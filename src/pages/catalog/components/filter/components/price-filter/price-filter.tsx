import {ChangeEventHandler, FocusEventHandler, useRef, useState} from 'react';
import useAscendingPrices from '../../../../../../hooks/use-ascending-prices';
import {useSearchParams} from 'react-router-dom';
import {searchParamsAsObject} from '../../../../../../helpers/search-params-as-object';
import {FilterSearchParam} from '../../../../../../types/filter-search-param';

import {NOT_FOUND} from '../../../../../../constants/not-found';

function PriceFilter(): JSX.Element {
  const {prices} = useAscendingPrices();
  const [searchParams, setSearchParams] = useSearchParams();

  const minPrice = prices[0];
  const maxPrice = prices[prices.length - 1];
  const [minPriceValue, setMinPriceValue] = useState(searchParams.get(FilterSearchParam.MinPrice) || '');
  const [maxPriceValue, setMaxPriceValue] = useState(searchParams.get(FilterSearchParam.MaxPrice) || '');

  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const handleMinPriceBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (minPriceRef.current === null || maxPriceRef.current === null) {
      throw Error('Ошибка рендера формы');
    }
    if (Number(minPriceValue) < minPrice) {
      setMinPriceValue(minPrice.toString());
      return;
    }
    if (Number(minPriceValue) > maxPrice) {
      setMinPriceValue(maxPrice.toString());
      return;
    }
    const nearest = prices.findIndex((currentValue) => currentValue > Number(minPriceValue));
    let nearestValue = nearest === NOT_FOUND ? maxPrice : prices[nearest - 1];
    nearestValue = nearestValue > Number(maxPriceValue) ? Number(maxPriceValue) : nearestValue;
    setMinPriceValue(nearestValue.toString());
  };

  const handleMaxPriceBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (minPriceRef.current === null || maxPriceRef.current === null) {
      throw Error('Ошибка рендера формы');
    }
    if (Number(maxPriceValue) > maxPrice) {
      setMaxPriceValue(maxPrice.toString());
      return;
    }
    if (Number(maxPriceValue) < minPrice) {
      setMaxPriceValue(minPrice.toString());
      return;
    }
    const nearest = prices.findIndex((currentValue) => currentValue > Number(maxPriceValue));
    let nearestValue = nearest === NOT_FOUND ? maxPrice : prices[nearest];
    nearestValue = nearestValue < Number(minPriceValue) ? Number(minPriceValue) : nearestValue;
    setMaxPriceValue(nearestValue.toString());
  };

  const handleMinPriceChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMinPriceValue(event.target.value);
  };
  const handleMaxPriceChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMaxPriceValue(event.target.value);
  };

  const handlePriceFieldsetBlur: FocusEventHandler<HTMLFieldSetElement> = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setSearchParams((params) => {
        params.delete(FilterSearchParam.MinPrice);
        params.delete(FilterSearchParam.MaxPrice);
        if (minPriceValue !== '' && maxPriceValue !== '') {
          params.append(FilterSearchParam.MinPrice, minPriceValue);
          params.append(FilterSearchParam.MaxPrice, maxPriceValue);
        }
        return ({...searchParamsAsObject(params)});
      });
    }
  };

  return (
    <fieldset className="catalog-filter__block" onBlur={handlePriceFieldsetBlur}>
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input type="number" name="min-price" placeholder={minPrice.toString()}
              onBlurCapture={handleMinPriceBlur}
              onChange={handleMinPriceChange}
              value={minPriceValue || ''}
              ref={minPriceRef}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input type="number" name="max-price" placeholder={maxPrice.toString()}
              onBlurCapture={handleMaxPriceBlur}
              onChange={handleMaxPriceChange}
              value={maxPriceValue || ''}
              ref={maxPriceRef}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default PriceFilter;
