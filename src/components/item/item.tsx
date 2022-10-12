import {useEffect} from 'react';

function Item(): JSX.Element {
  useEffect(() => {
    document.title = 'Продукт - Фотошоп';
  });

  return (
    <p> ITEM </p>
  );
}

export default Item;
