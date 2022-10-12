import {useEffect} from 'react';

function Basket(): JSX.Element {
  useEffect(() => {
    document.title = 'Корзина - Фотошоп';
  });

  return (
    <p> BASKET </p>
  );
}

export default Basket;
