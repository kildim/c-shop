import {useState} from 'react';
import {ProductInfoTabsProps} from './product-info-tabs-props';

function ProductInfoTabs(props: ProductInfoTabsProps): JSX.Element {
  const {product} = props;

  const enum ActiveTab {
    Characteristics = 'Characteristics',
    Description = 'Description'
  }

  const [activeTab, setActiveTab] = useState(ActiveTab.Characteristics);
  const handleSwitchDescriptionTabClick = () => setActiveTab(ActiveTab.Description);
  const handleSwitchCharacteristicsTabClick = () => setActiveTab(ActiveTab.Characteristics);

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button className={`tabs__control ${activeTab === ActiveTab.Characteristics ? 'is-active' : ''}`}
          type="button"
          onClick={handleSwitchCharacteristicsTabClick}
        >Характеристики
        </button>
        <button className={`tabs__control ${activeTab === ActiveTab.Description ? 'is-active' : ''}`}
          type="button"
          onClick={handleSwitchDescriptionTabClick}
        >Описание
        </button>
      </div>
      <div className="tabs__content">
        <div className={`tabs__element ${activeTab === ActiveTab.Characteristics ? 'is-active' : ''}`}>
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{product.vendorCode}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{product.category}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{product.type}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{product.level}</p>
            </li>
          </ul>
        </div>
        <div className={`tabs__element ${activeTab === ActiveTab.Description ? 'is-active' : ''}`}>
          <div className="product__tabs-text">
            <p>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoTabs;
