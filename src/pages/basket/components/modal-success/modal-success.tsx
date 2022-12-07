import {useNavigate} from 'react-router-dom';
import {RootRouterPath} from '../../../../routers/root-route-path';

type ModalSuccessProps = {
  onClosePopup: () => void;
}
function ModalSuccess(props: ModalSuccessProps): JSX.Element {
  const {onClosePopup} = props;
  const navigate = useNavigate();

  const handleToCatalogClick = () => {
    navigate(`${RootRouterPath.Root}${RootRouterPath.Catalog}`);
  }
  return (
    <div className="modal__content">
      <p className="title title--h4">Спасибо за покупку</p>
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button"
          onClick={handleToCatalogClick}
        >
          Вернуться к покупкам
        </button>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап"
        onClick={onClosePopup}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </div>
  );
}

export default ModalSuccess;
