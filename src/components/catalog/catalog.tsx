import {useEffect} from 'react';

function Catalog(): JSX.Element {
  useEffect(() => {
    document.title = 'Каталог - Фотошоп';
  });

  return (
    <p> CATALOG </p>
  );
}

export default Catalog;
