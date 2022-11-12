import {Camera} from '../../../../../../types/camera';
import {useNavigate} from 'react-router-dom';
import {RootRouterPath} from '../../../../../../routers/root-route-path';

type Props = {
  items: Camera[];
};

function SelectList(props: Props): JSX.Element {
  const {items} = props;
  const navigate = useNavigate();
  const getVisibilityAttribute = () => items.length > 0 ? 'visible' : 'hidden';
  const getOpacityAttribute = () => items.length > 0 ? '1' : '0';
  const generateListItemClickHandler = (id: number) => () => navigate(`${RootRouterPath.Product}/${id}`);
  return (
    <ul className="form-search__select-list" style={{visibility: getVisibilityAttribute(), opacity: getOpacityAttribute()}}>
      {items.map((item) => <li className="form-search__select-item" onClick={generateListItemClickHandler(item.id)} tabIndex={0} key={item.id}>{item.name}</li>)}
    </ul>
  );
}

export default SelectList;
