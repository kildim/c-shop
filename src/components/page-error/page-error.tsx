import {isRouteErrorResponse, useNavigate, useRouteError} from 'react-router-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import React from 'react';

function PageError(): JSX.Element {
  const error = useRouteError();
  let errorMessage = 'Unknown Route Error';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  }

  const navigate = useNavigate();

  const handleBackwardClick = () => navigate(-1);

  return (
    <ModalOverlay onClosePopup={handleBackwardClick}>
      <div className="modal__content">
        <div className="visually-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <symbol id="icon-fail" viewBox="0 0 86 80">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M 18.888 8.404 C 25.137 4.229 32.484 2 40 2 C 40.552 2 41 1.552 41 1 C 41 0.448 40.552 0 40 0 C 32.089 0 24.355 2.346 17.777 6.741 C 11.199 11.137 6.072 17.384 3.045 24.693 C 0.017 32.002 -0.775 40.044 0.769 47.804 C 2.312 55.563 6.122 62.69 11.716 68.284 C 17.31 73.878 24.437 77.688 32.196 79.231 C 39.956 80.775 47.998 79.983 55.307 76.955 C 55.818 76.744 56.06 76.159 55.849 75.649 C 55.637 75.138 55.052 74.896 54.542 75.107 C 47.598 77.984 39.958 78.736 32.587 77.27 C 25.215 75.804 18.444 72.184 13.13 66.87 C 7.816 61.556 4.196 54.785 2.73 47.413 C 1.264 40.042 2.016 32.402 4.893 25.458 C 7.769 18.514 12.639 12.58 18.888 8.404 Z M 80 40 C 80 39.448 79.552 39 79 39 C 78.448 39 78 39.448 78 40 C 78 47.516 75.771 54.863 71.596 61.112 C 68.883 65.171 65.428 68.65 61.436 71.377 C 60.98 71.688 60.863 72.311 61.174 72.767 C 61.486 73.223 62.108 73.34 62.564 73.028 C 66.766 70.157 70.403 66.496 73.259 62.223 C 77.654 55.645 80 47.911 80 40 Z M 29.714 9.698 C 35.707 7.664 42.169 7.452 48.282 9.09 C 48.816 9.233 49.364 8.917 49.507 8.383 C 49.65 7.85 49.333 7.301 48.8 7.159 C 42.304 5.418 35.439 5.643 29.071 7.804 C 26.374 8.72 23.817 9.966 21.455 11.503 C 20.992 11.805 20.861 12.424 21.162 12.887 C 21.463 13.35 22.083 13.481 22.546 13.18 C 24.769 11.733 27.175 10.56 29.714 9.698 Z M 14.613 20.52 C 14.949 20.082 14.866 19.454 14.428 19.118 C 13.99 18.781 13.362 18.864 13.026 19.302 C 8.932 24.637 6.513 31.066 6.073 37.776 C 5.633 44.487 7.193 51.176 10.555 57 C 13.917 62.824 18.931 67.52 24.962 70.494 C 30.993 73.468 37.771 74.587 44.438 73.709 C 51.105 72.831 57.362 69.996 62.418 65.563 C 67.474 61.129 71.101 55.295 72.842 48.8 C 72.984 48.266 72.668 47.718 72.134 47.575 C 71.601 47.432 71.053 47.749 70.91 48.282 C 69.272 54.396 65.858 59.886 61.099 64.059 C 56.341 68.232 50.452 70.9 44.177 71.726 C 37.902 72.552 31.523 71.499 25.847 68.7 C 20.171 65.901 15.452 61.481 12.287 56 C 9.123 50.519 7.655 44.223 8.069 37.907 C 8.482 31.592 10.76 25.541 14.613 20.52 Z"
                fill="#ED6041"
              />
            </symbol>
            <symbol id="icon-close" viewBox="0 0 10 10">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
                fill="currentColor"
              />
            </symbol>
          </svg>
        </div>
        <p className="title title--h4">{errorMessage}</p>
        <svg className="modal__icon" width="86" height="80" aria-hidden="true">
          <use xlinkHref="#icon-fail"></use>
        </svg>
        <div className="modal__buttons">
          <button className="btn btn--purple modal__btn modal__btn--fit-width" onClick={handleBackwardClick}>Вернуться обратно</button>
        </div>
        <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleBackwardClick}>
          <svg width="10" height="10" aria-hidden="true">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </button>
      </div>
    </ModalOverlay>
  );
}

export default PageError;
