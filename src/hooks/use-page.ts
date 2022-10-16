import {useParams} from 'react-router-dom';

function usePage(): number | null{
  const {id} = useParams();
  const page = parseInt(id?.split('_')[1] as string, 10);
  if (id === undefined || isNaN(page)) {
    return null;
  }

  return page;
}

export default usePage;
