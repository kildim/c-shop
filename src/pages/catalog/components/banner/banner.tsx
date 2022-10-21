import {useSelector} from 'react-redux';
import {getPromo} from '../../../../store/reducers/cameras/selectors';
import {Promo} from '../../../../types/promo';
import {RootRouterPath} from '../../../../routers/root-route-path';
import {Link} from 'react-router-dom';

function Banner(): JSX.Element | null {
  const promo: Promo = useSelector(getPromo);

  if (promo === null || promo === undefined) {
    return null;
  }

  return (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`${promo.previewImgWebp}, ${promo.previewImgWebp2x} 2x`}/>
        <img src={promo.previewImg} srcSet={`${promo.previewImg2x} 2x`} width="1280" height="280"
          alt="баннер"
        />
      </picture>
      <p className="banner__info"><span className="banner__message">Новинка!</span>
        <span className="title title--h1">{promo.name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link className="btn" to={`${RootRouterPath.Root}${RootRouterPath.Product}/${promo.id}`}>Подробнее</Link>
      </p>
    </div>
  );
}

export default Banner;
