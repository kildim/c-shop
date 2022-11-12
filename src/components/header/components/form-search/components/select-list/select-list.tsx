import {Camera} from '../../../../../../types/camera';
import {Link} from 'react-router-dom';
import {RootRouterPath} from '../../../../../../routers/root-route-path';

type Props = {
  items: Camera[];
};

function SelectList(props: Props): JSX.Element {
  const {items} = props;
  const getVisibilityAttribute = () => items.length > 0 ? 'visible' : 'hidden';
  const getOpacityAttribute = () => items.length > 0 ? '1' : '0';
  const generateProductLinkPath = (id: number) => `${RootRouterPath.Product}/${id}`;
  return (
    <ul className="form-search__select-list"
      style={{visibility: getVisibilityAttribute(), opacity: getOpacityAttribute()}}
    >
      {
        items.map((item) =>
          (
            <li className="form-search__select-item" tabIndex={-1} key={item.id}>
              <Link to={generateProductLinkPath(item.id)}>
                {item.name}
              </Link>
            </li>
          )
        )
      }
    </ul>
  );
}

export default SelectList;
