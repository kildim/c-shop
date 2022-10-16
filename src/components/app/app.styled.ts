import {createGlobalStyle} from 'styled-components';
import OpenSansNormalWoff from '../../assets/fonts/open-sans.woff';
import OpenSansNormalWoff2 from '../../assets/fonts/open-sans.woff2';
import OpenSansSemiWoff from '../../assets/fonts/open-sans-600.woff';
import OpenSansSemiWoff2 from '../../assets/fonts/open-sans-600.woff2';
import OpenSansBoldWoff from '../../assets/fonts/open-sans-700.woff';
import OpenSansBoldWoff2 from '../../assets/fonts/open-sans-700.woff2';

const GlobalStyle = createGlobalStyle`
  /* stylelint-disable */

  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
  ========================================================================== */

  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

  html {
    line-height: 1.15;
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
  }

  /* Sections
  ========================================================================== */

  /**
* Remove the margin in all browsers.
*/

  body {
    margin: 0;
  }

  /**
* Render the \`main\` element consistently in IE.
*/

  main {
    display: block;
  }

  /**
* Correct the font size and margin on \`h1\` elements within \`section\` and
* \`article\` contexts in Chrome, Firefox, and Safari.
*/

  h1 {
    margin: 0.67em 0;
    font-size: 2em;
  }

  /* Grouping content
  ========================================================================== */

  /**
* 1. Add the correct box sizing in Firefox.
* 2. Show the overflow in Edge and IE.
*/

  hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    /* 1 */
    height: 0;
    /* 1 */
    overflow: visible;
    /* 2 */
  }

  /**
* 1. Correct the inheritance and scaling of font size in all browsers.
* 2. Correct the odd \`em\` font sizing in all browsers.
*/

  pre {
    font-size: 1em;
    /* 2 */
    font-family: monospace, monospace;
    /* 1 */
  }

  /* Text-level semantics
  ========================================================================== */

  /**
* Remove the gray background on active links in IE 10.
*/

  a {
    background-color: transparent;
  }

  /**
* 1. Remove the bottom border in Chrome 57-
* 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
*/

  abbr[title] {
    text-decoration: underline;
    /* 2 */
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    /* 2 */
    border-bottom: none;
    /* 1 */
  }

  /**
* Add the correct font weight in Chrome, Edge, and Safari.
*/

  b,
  strong {
    font-weight: bolder;
  }

  /**
* 1. Correct the inheritance and scaling of font size in all browsers.
* 2. Correct the odd \`em\` font sizing in all browsers.
*/

  code,
  kbd,
  samp {
    font-size: 1em;
    /* 2 */
    font-family: monospace, monospace;
    /* 1 */
  }

  /**
* Add the correct font size in all browsers.
*/

  small {
    font-size: 80%;
  }

  /**
* Prevent \`sub\` and \`sup\` elements from affecting the line height in
* all browsers.
*/

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
  ========================================================================== */

  /**
* Remove the border on images inside links in IE 10.
*/

  img {
    border-style: none;
  }

  /* Forms
  ========================================================================== */

  /**
* 1. Change the font styles in all browsers.
* 2. Remove the margin in Firefox and Safari.
*/

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    /* 2 */
    font-size: 100%;
    /* 1 */
    line-height: 1.15;
    /* 1 */
    font-family: inherit;
    /* 1 */
  }

  /**
* Show the overflow in IE.
* 1. Show the overflow in Edge.
*/

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
* Remove the inheritance of text transform in Edge, Firefox, and IE.
* 1. Remove the inheritance of text transform in Firefox.
*/

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
* Correct the inability to style clickable types in iOS and Safari.
*/

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
* Remove the inner border and padding in Firefox.
*/

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  /**
* Restore the focus styles unset by the previous rule.
*/

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
* Correct the padding in Firefox.
*/

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
* 1. Correct the text wrapping in Edge and IE.
* 2. Correct the color inheritance from \`fieldset\` elements in IE.
* 3. Remove the padding so developers are not caught out when they zero out
*    \`fieldset\` elements in all browsers.
*/

  legend {
    display: table;
    /* 1 */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* 1 */
    max-width: 100%;
    /* 1 */
    padding: 0;
    /* 3 */
    color: inherit;
    /* 2 */
    white-space: normal;
    /* 1 */
  }

  /**
* Add the correct vertical alignment in Chrome, Firefox, and Opera.
*/

  progress {
    vertical-align: baseline;
  }

  /**
* Remove the default vertical scrollbar in IE 10+.
*/

  textarea {
    overflow: auto;
  }

  /**
* 1. Add the correct box sizing in IE 10.
* 2. Remove the padding in IE 10.
*/

  [type="checkbox"],
  [type="radio"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* 1 */
    padding: 0;
    /* 2 */
  }

  /**
* Correct the cursor style of increment and decrement buttons in Chrome.
*/

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
* 1. Correct the odd appearance in Chrome and Safari.
* 2. Correct the outline style in Safari.
*/

  [type="search"] {
    outline-offset: -2px;
    /* 2 */
    -webkit-appearance: textfield;
    /* 1 */
  }

  /**
* Remove the inner padding in Chrome and Safari on macOS.
*/

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
* 1. Correct the inability to style clickable types in iOS and Safari.
* 2. Change font properties to \`inherit\` in Safari.
*/

  ::-webkit-file-upload-button {
    font: inherit;
    /* 2 */
    -webkit-appearance: button;
    /* 1 */
  }

  /* Interactive
  ========================================================================== */

  /*
* Add the correct display in Edge, IE 10+, and Firefox.
*/

  details {
    display: block;
  }

  /*
* Add the correct display in all browsers.
*/

  summary {
    display: list-item;
  }

  /* Misc
  ========================================================================== */

  /**
* Add the correct display in IE 10+.
*/

  template {
    display: none;
  }

  /**
* Add the correct display in IE 10.
*/

  [hidden] {
    display: none;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  html {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-family: "Open Sans", "Arial", sans-serif;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }

  a {
    color: #000000;
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 1000px #ffffff;
    box-shadow: inset 0 0 0 1000px #ffffff;
    -webkit-text-fill-color: #000000;
  }

  input,
  textarea {
    border-radius: 0;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    opacity: 1;
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    opacity: 1;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    opacity: 1;
  }

  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    opacity: 1;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
  }

  input:invalid,
  textarea:invalid {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  select {
    border-radius: 0;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    appearance: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  select,
  textarea,
  input:matches([type="email"],
[type="number"],
[type="password"],
[type="search"],
[type="tel"],
[type="text"],
[type="url"]) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .wrapper {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
    /* stylelint-disable-next-line */
    min-height: calc(100 * var(--vh, 1vh));
  }

  .wrapper .header,
  .wrapper .footer {
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .wrapper main {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
  }

  .hidden {
    visibility: hidden;
  }

  .scroll-lock-ios {
    position: fixed;
    overflow: hidden;
  }

  .scroll-lock {
    overflow: hidden;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-transition {
    /* stylelint-disable-next-line */
    -webkit-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
  }

  .hidden {
    display: none;
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .page-content {
    padding-bottom: 80px;
  }

  .page-content .title--h2 {
    margin-bottom: 35px;
  }

  .page-content .title--h3 {
    margin-bottom: 24px;
  }

  .page-content__columns {
    display: -ms-grid;
    display: grid;
    grid-column-gap: 60px;
    grid-template-areas: "aside content" "aside content" "aside pagination";
    -ms-grid-columns: 236px 60px 1fr;
    grid-template-columns: 236px 1fr;
    -ms-grid-rows: min-content 1fr min-content;
    grid-template-rows: -webkit-min-content 1fr -webkit-min-content;
    grid-template-rows: min-content 1fr min-content;
  }

  .page-content__section {
    padding-bottom: 60px;
  }

  .page-content__section:last-of-type {
    padding-bottom: 0;
  }

  .page-content__headed {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 24px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .page-content__headed .title--h3 {
    margin-bottom: 0;
  }

  .header {
    background-color: #f4f4fc;
  }

  .header .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .header__logo {
    padding-top: 4px;
  }

  .header__logo svg {
    width: 100px;
    height: 36px;
  }

  .header__main-nav {
    margin-left: 40px;
  }

  .header__basket-link {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 44px;
    height: 44px;
    margin-left: 40px;
    color: #7575e2;
    background: #ffffff;
    border-radius: 8px;
    -webkit-transition: -webkit-box-shadow 0.3s ease;
    transition: -webkit-box-shadow 0.3s ease;
    -o-transition: box-shadow 0.3s ease;
    transition: box-shadow 0.3s ease;
    transition: box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;
  }

  .header__basket-link svg {
    width: 16px;
    height: 16px;
  }

  .header__basket-count {
    position: absolute;
    top: 8px;
    right: 7px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 14px;
    height: 14px;
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    color: #ffffff;
    background-color: #ed6041;
    border-radius: 50%;
  }

  .main-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .main-nav__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .main-nav__link {
    display: block;
    padding: 22px 20px;
    font-weight: 600;
    color: #7575e2;
    cursor: pointer;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
  }

  .main-nav__link--active {
    color: #7575e2;
    background-color: #a2a2ff;
  }

  .main-nav__link:active {
    color: #7575e2;
    background-color: #a2a2ff;
  }

  .main-nav__toggle {
    display: none;
  }

  .footer {
    padding: 40px 0 60px;
    background-color: #525288;
  }

  .footer .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .footer__logo {
    display: inline-block;
  }

  .footer__logo svg {
    width: 100px;
    height: 36px;
  }

  .footer__info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-width: 153px;
    margin-right: 143px;
  }

  .footer__description {
    margin: 7px 0 0;
    font-size: 14px;
    line-height: 20px;
    color: #9a9ac6;
  }

  .footer__nav {
    display: -ms-grid;
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
    -webkit-column-gap: 162px;
    -moz-column-gap: 162px;
    column-gap: 162px;
    -ms-grid-columns: (150px)[3];
    grid-template-columns: repeat(3, 150px);
    grid-row-gap: 40px;
  }

  .footer__nav-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .footer__title {
    margin: 0 0 20px;
    font-weight: 700;
    color: #ffffff;
  }

  .footer__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .footer__item {
    margin-bottom: 8px;
  }

  .footer__item:last-child {
    margin-bottom: 0;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), visibility 0.6s cubic-bezier(0.55, 0, 0.1, 1), -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), visibility 0.6s cubic-bezier(0.55, 0, 0.1, 1), -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    -o-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1), visibility 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1), visibility 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1), visibility 0.6s cubic-bezier(0.55, 0, 0.1, 1), -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    pointer-events: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .modal::-webkit-scrollbar {
    display: none;
  }

  .modal__wrapper {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    padding: 60px 40px;
  }

  .modal__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .modal__content {
    position: relative;
    padding: 32px 40px 36px;
    color: #333333;
    background-color: #ffffff;
    border-radius: 8px;
    -webkit-box-shadow: 0 4px 16px rgba(56, 56, 117, 0.2);
    box-shadow: 0 4px 16px rgba(56, 56, 117, 0.2);
  }

  .modal .cross-btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  .modal .title--h4 {
    margin-bottom: 24px;
    text-align: center;
  }

  .modal__icon {
    display: block;
    width: 86px;
    height: 80px;
    margin: 0 auto 24px;
  }

  .modal__info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 24px;
  }

  .modal__img {
    width: 140px;
    height: 120px;
  }

  .modal__img img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .modal__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-left: -10px;
    margin-top: -16px;
    text-align: center;
  }

  .modal__btn {
    margin-top: 16px;
    margin-left: 10px;
  }

  .modal__btn--fit-width {
    width: 100%;
  }

  .modal__btn--half-width {
    width: calc((100% - 10px * 2) / 2);
  }

  .modal.is-active {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  .modal--narrow .modal__content {
    width: 320px;
  }

  .btn {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 8px 19px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #7575e2;
    background-color: #f4f4fc;
    border: 2px solid rgba(255, 255, 255, 0);
    border-radius: 8px;
    cursor: pointer;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
  }

  .btn svg {
    width: 24px;
    height: 16px;
    margin-right: 8px;
  }

  .btn:disabled {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .btn.disabled {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .btn--purple {
    color: #ffffff;
    background-color: #7575e2;
  }

  .btn--purple:disabled {
    color: #ffffff;
    background-color: #dddddd;
  }

  .btn--purple.disabled {
    color: #ffffff;
    background-color: #dddddd;
  }

  .btn--purple-border {
    border-color: #7575e2;
  }

  .btn--purple-border:disabled {
    color: #dddddd;
    background-color: rgba(255, 255, 255, 0);
    border-color: #dddddd;
    pointer-events: none;
  }

  .btn--purple-border.disabled {
    color: #dddddd;
    background-color: rgba(255, 255, 255, 0);
    border-color: #dddddd;
    pointer-events: none;
  }

  .btn--transparent {
    background-color: rgba(255, 255, 255, 0);
  }

  .btn--transparent:disabled {
    color: #dddddd;
    background-color: rgba(255, 255, 255, 0);
    pointer-events: none;
  }

  .btn--transparent.disabled {
    color: #dddddd;
    background-color: rgba(255, 255, 255, 0);
    pointer-events: none;
  }

  .custom-input,
  .custom-textarea {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .custom-input__label,
  .custom-textarea__label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 8px;
  }

  .custom-input__label svg,
  .custom-textarea__label svg {
    width: 9px;
    height: 9px;
    margin-top: 5px;
    margin-left: 5px;
  }

  .custom-input label,
  .custom-textarea label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
  }

  .custom-input label input,
  .custom-input label textarea,
  .custom-textarea label input,
  .custom-textarea label textarea {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    min-height: 40px;
    padding: 8px 20px;
    color: #333333;
    border: 2px solid #b4b4d7;
    border-radius: 8px;
    outline: none;
    -webkit-transition: border 0.3s ease, -webkit-box-shadow 0.3s ease;
    transition: border 0.3s ease, -webkit-box-shadow 0.3s ease;
    -o-transition: border 0.3s ease, box-shadow 0.3s ease;
    transition: border 0.3s ease, box-shadow 0.3s ease;
    transition: border 0.3s ease, box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;
  }

  .custom-input label input::-webkit-input-placeholder,
  .custom-input label textarea::-webkit-input-placeholder,
  .custom-textarea label input::-webkit-input-placeholder,
  .custom-textarea label textarea::-webkit-input-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .custom-input label input::-moz-placeholder,
  .custom-input label textarea::-moz-placeholder,
  .custom-textarea label input::-moz-placeholder,
  .custom-textarea label textarea::-moz-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .custom-input label input:-ms-input-placeholder,
  .custom-input label textarea:-ms-input-placeholder,
  .custom-textarea label input:-ms-input-placeholder,
  .custom-textarea label textarea:-ms-input-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .custom-input label input::-ms-input-placeholder,
  .custom-input label textarea::-ms-input-placeholder,
  .custom-textarea label input::-ms-input-placeholder,
  .custom-textarea label textarea::-ms-input-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .custom-input label input::placeholder,
  .custom-input label textarea::placeholder,
  .custom-textarea label input::placeholder,
  .custom-textarea label textarea::placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .custom-input label input:hover,
  .custom-input label textarea:hover,
  .custom-textarea label input:hover,
  .custom-textarea label textarea:hover {
    border: 2px solid #7575e2;
  }

  .custom-input label input:focus,
  .custom-input label textarea:focus,
  .custom-textarea label input:focus,
  .custom-textarea label textarea:focus {
    border: 2px solid #7575e2;
  }

  .custom-input label input:disabled,
  .custom-input label textarea:disabled,
  .custom-textarea label input:disabled,
  .custom-textarea label textarea:disabled {
    background-color: #f8f8f8;
    border-color: #f8f8f8;
  }

  .custom-input label input:disabled::-webkit-input-placeholder,
  .custom-input label textarea:disabled::-webkit-input-placeholder,
  .custom-textarea label input:disabled::-webkit-input-placeholder,
  .custom-textarea label textarea:disabled::-webkit-input-placeholder {
    color: #dddddd;
  }

  .custom-input label input:disabled::-moz-placeholder,
  .custom-input label textarea:disabled::-moz-placeholder,
  .custom-textarea label input:disabled::-moz-placeholder,
  .custom-textarea label textarea:disabled::-moz-placeholder {
    color: #dddddd;
  }

  .custom-input label input:disabled:-ms-input-placeholder,
  .custom-input label textarea:disabled:-ms-input-placeholder,
  .custom-textarea label input:disabled:-ms-input-placeholder,
  .custom-textarea label textarea:disabled:-ms-input-placeholder {
    color: #dddddd;
  }

  .custom-input label input:disabled::-ms-input-placeholder,
  .custom-input label textarea:disabled::-ms-input-placeholder,
  .custom-textarea label input:disabled::-ms-input-placeholder,
  .custom-textarea label textarea:disabled::-ms-input-placeholder {
    color: #dddddd;
  }

  .custom-input label input:disabled::placeholder,
  .custom-input label textarea:disabled::placeholder,
  .custom-textarea label input:disabled::placeholder,
  .custom-textarea label textarea:disabled::placeholder {
    color: #dddddd;
  }

  .custom-input__error,
  .custom-textarea__error {
    position: absolute;
    top: 6px;
    right: 0;
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ed6041;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
  }

  .custom-input__success,
  .custom-textarea__success {
    position: absolute;
    top: 6px;
    right: 0;
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #65cd54;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
  }

  .custom-input.is-invalid input,
  .custom-textarea.is-invalid input {
    border: 2px solid #ed6041;
  }

  .custom-input.is-invalid input:focus,
  .custom-input.is-invalid input:hover,
  .custom-textarea.is-invalid input:focus,
  .custom-textarea.is-invalid input:hover {
    border: 2px solid rgba(237, 96, 65, 0.8);
  }

  .custom-input.is-invalid .custom-input__error,
  .custom-textarea.is-invalid .custom-input__error {
    opacity: 1;
  }

  .custom-input.is-valid input,
  .custom-textarea.is-valid input {
    border: 2px solid #65cd54;
  }

  .custom-input.is-valid input:focus,
  .custom-input.is-valid input:hover,
  .custom-textarea.is-valid input:focus,
  .custom-textarea.is-valid input:hover {
    border: 2px solid rgba(101, 205, 84, 0.7);
  }

  .custom-input.is-valid .custom-input__success,
  .custom-textarea.is-valid .custom-input__success {
    opacity: 1;
  }

  .custom-textarea label textarea {
    min-height: 120px;
  }

  .custom-textarea.is-invalid textarea {
    border: 2px solid #ed6041;
  }

  .custom-textarea.is-invalid textarea:focus,
  .custom-textarea.is-invalid textarea:hover {
    border: 2px solid rgba(237, 96, 65, 0.8);
  }

  .custom-textarea.is-invalid .custom-textarea__error {
    opacity: 1;
  }

  .custom-textarea.is-valid textarea {
    border: 2px solid #7575e2;
  }

  .custom-textarea.is-valid textarea:focus,
  .custom-textarea.is-valid textarea:hover {
    border: 2px solid rgba(117, 117, 226, 0.7);
  }

  .custom-checkbox {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .custom-checkbox__error {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #ed6041;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
  }

  .custom-checkbox input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);
  }

  .custom-checkbox label {
    position: relative;
    padding-left: 30px;
    font-size: 14px;
    line-height: 20px;
  }

  .custom-checkbox label span {
    margin-bottom: 0;
    margin-left: 0;
  }

  .custom-checkbox .custom-checkbox__label {
    cursor: pointer;
  }

  .custom-checkbox .custom-checkbox__icon {
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #b4b4d7;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: border-color 0.3s ease, background-color 0.3s ease, background-image 0.3s ease;
    -o-transition: border-color 0.3s ease, background-color 0.3s ease, background-image 0.3s ease;
    transition: border-color 0.3s ease, background-color 0.3s ease, background-image 0.3s ease;
  }

  .custom-checkbox .custom-checkbox__icon::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0);
    background-image: url("../img/svg/check.svg");
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 4px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: background-color 0.3s ease, background-image 0.3s ease;
    -o-transition: background-color 0.3s ease, background-image 0.3s ease;
    transition: background-color 0.3s ease, background-image 0.3s ease;
  }

  .custom-checkbox label:hover .custom-checkbox__icon {
    border-color: #7575e2;
  }

  .custom-checkbox input:focus + .custom-checkbox__icon {
    border-color: #525288;
  }

  .custom-checkbox input:checked + .custom-checkbox__icon::before {
    background-color: #7575e2;
  }

  .custom-checkbox input:disabled + .custom-checkbox__icon {
    border-color: #f8f8f8;
    pointer-events: none;
  }

  .custom-checkbox input:disabled + .custom-checkbox__icon::before {
    background-color: #f8f8f8;
    background-image: none;
    pointer-events: none;
  }

  .custom-checkbox input:disabled + .custom-checkbox__icon + .custom-checkbox__label {
    color: #dddddd;
    pointer-events: none;
  }

  .custom-checkbox input:checked:disabled + .custom-checkbox__icon {
    border-color: #f8f8f8;
  }

  .custom-checkbox input:checked:disabled + .custom-checkbox__icon::before {
    background-color: #f8f8f8;
    background-image: url("../img/svg/check-disabled.svg");
    pointer-events: none;
  }

  .custom-checkbox input:checked:disabled + .custom-checkbox__icon + .custom-checkbox__label {
    color: #dddddd;
    pointer-events: none;
  }

  .form-search {
    position: relative;
    width: 280px;
    margin-left: auto;
  }

  .form-search label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 44px;
    background: #ffffff;
    border: 2px solid transparent;
    border-radius: 8px;
    -webkit-transition: border 0.3s ease, -webkit-box-shadow 0.3s ease;
    transition: border 0.3s ease, -webkit-box-shadow 0.3s ease;
    -o-transition: box-shadow 0.3s ease, border 0.3s ease;
    transition: box-shadow 0.3s ease, border 0.3s ease;
    transition: box-shadow 0.3s ease, border 0.3s ease, -webkit-box-shadow 0.3s ease;
  }

  .form-search label:hover {
    -webkit-box-shadow: 0 4px 16px rgba(56, 56, 117, 0.2);
    box-shadow: 0 4px 16px rgba(56, 56, 117, 0.2);
  }

  .form-search label:focus-within {
    border-color: #7575e2;
  }

  .form-search .form-search__icon {
    width: 16px;
    height: 16px;
    margin-right: 9px;
    margin-left: 19px;
  }

  .form-search__input {
    width: 100%;
    padding: 0;
    padding-right: 30px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    border: none;
    outline: none;
  }

  .form-search ::-webkit-input-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-search ::-moz-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-search :-ms-input-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-search ::-ms-input-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-search ::placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-search__select-list {
    position: absolute;
    top: 49px;
    left: 0;
    z-index: 4;
    width: 100%;
    min-height: 100%;
    max-height: 176px;
    margin: 0;
    padding: 8px 0 8px 4px;
    overflow-y: scroll;
    list-style: none;
    background: #ffffff;
    border-radius: 8px;
    -webkit-box-shadow: 0 4px 16px rgba(56, 56, 117, 0.2);
    box-shadow: 0 4px 16px rgba(56, 56, 117, 0.2);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
  }

  .form-search .scroller::-webkit-scrollbar {
    width: 12px;
    border-radius: 8px;
  }

  .form-search .scroller::-webkit-scrollbar-thumb {
    background: #b4b4d7;
    background-clip: content-box;
    border: 4px solid rgba(255, 255, 255, 0);
    border-radius: 8px;
  }

  .form-search .scroller {
    border-radius: 8px;
    scrollbar-color: #b4b4d7 #ffffff;
    scrollbar-width: thin;
  }

  .form-search__select-item {
    padding: 8px 16px;
    font-weight: 600;
    color: #333333;
    border-radius: 8px;
    cursor: pointer;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
  }

  .form-search__select-item:hover {
    background-color: #f4f4fc;
  }

  .form-search__reset {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 44px;
    height: 44px;
    padding: 0;
    color: #7575e2;
    background: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
  }

  .form-search__reset svg {
    width: 10px;
    height: 10px;
  }

  .form-search.list-opened form label {
    border: 2px solid #7575e2;
  }

  .form-search.list-opened .form-search__select-list {
    visibility: visible;
    opacity: 1;
  }

  .form-search.list-opened .form-search__reset {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: auto 0 0;
    padding: 0;
    list-style: none;
    gap: 16px;
  }

  .social__item {
    width: 22px;
    height: 22px;
  }

  .social__item svg {
    width: 22px;
    height: 22px;
  }

  .breadcrumbs {
    padding-top: 32px;
    padding-bottom: 20px;
  }

  .breadcrumbs__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .breadcrumbs__item {
    position: relative;
    margin-right: 20px;
  }

  .breadcrumbs__item:last-child {
    margin-right: 0;
  }

  .breadcrumbs__link {
    font-size: 14px;
    line-height: 20px;
    color: #7575e2;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
  }

  .breadcrumbs__link svg {
    width: 5px;
    height: 8px;
    margin-left: 20px;
  }

  .breadcrumbs__link:active {
    color: #333333;
  }

  .breadcrumbs__link--active {
    color: #333333;
    pointer-events: none;
  }

  .title {
    margin: 0;
    font-weight: 700;
    color: inherit;
  }

  .title--h1 {
    font-size: 48px;
    line-height: 64px;
  }

  .title--h2 {
    font-size: 40px;
    line-height: 64px;
  }

  .title--h3 {
    font-size: 32px;
    line-height: 48px;
  }

  .title--h4 {
    font-size: 20px;
    line-height: 32px;
  }

  .title--h5 {
    font-size: 16px;
    line-height: 20px;
  }

  .catalog {
    color: #333333;
  }

  .catalog__cards {
    margin: 37px 0 0;
    padding-bottom: 40px;
    border-bottom: 2px solid #f4f4fc;
  }

  .catalog__aside {
    -ms-grid-row: 1;
    -ms-grid-row-span: 3;
    -ms-grid-column: 1;
    grid-area: aside;
  }

  .catalog__content {
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 3;
    grid-area: content;
  }

  .catalog-filter {
    width: 100%;
  }

  .catalog-filter .title--h5 {
    float: left;
    margin-bottom: 16px;
  }

  .catalog-filter__block {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 16px 0;
    border: none;
  }

  .catalog-filter__block:first-of-type {
    padding-top: 8px;
  }

  .catalog-filter__item {
    margin-bottom: 16px;
  }

  .catalog-filter__item:last-child {
    margin-bottom: 0;
  }

  .catalog-filter__price-range {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .catalog-filter__price-range::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 2px;
    margin-top: -2px;
    background-color: #525288;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .catalog-filter__price-range input {
    width: 108px;
    height: 40px;
    padding: 0 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    border: 2px solid #b4b4d7;
    border-radius: 8px;
    outline: #b4b4d7;
    -webkit-transition: border-color 0.3s ease;
    -o-transition: border-color 0.3s ease;
    transition: border-color 0.3s ease;
  }

  .catalog-filter__price-range input::-webkit-input-placeholder {
    color: #b4b4d7;
  }

  .catalog-filter__price-range input::-moz-placeholder {
    color: #b4b4d7;
  }

  .catalog-filter__price-range input:-ms-input-placeholder {
    color: #b4b4d7;
  }

  .catalog-filter__price-range input::-ms-input-placeholder {
    color: #b4b4d7;
  }

  .catalog-filter__price-range input::placeholder {
    color: #b4b4d7;
  }

  .catalog-filter__price-range input:disabled {
    background-color: #f8f8f8;
    border-color: rgba(255, 255, 255, 0);
  }

  .catalog-filter__price-range input:disabled::-webkit-input-placeholder {
    color: #dddddd;
  }

  .catalog-filter__price-range input:disabled::-moz-placeholder {
    color: #dddddd;
  }

  .catalog-filter__price-range input:disabled:-ms-input-placeholder {
    color: #dddddd;
  }

  .catalog-filter__price-range input:disabled::-ms-input-placeholder {
    color: #dddddd;
  }

  .catalog-filter__price-range input:disabled::placeholder {
    color: #dddddd;
  }

  .catalog-filter__reset-btn {
    width: 100%;
    margin-top: 24px;
  }

  .catalog-sort {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
  }

  .catalog-sort form {
    width: 100%;
  }

  .catalog-sort__inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
  }

  .catalog-sort .title--h5 {
    margin-right: 20px;
  }

  .catalog-sort__type {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .catalog-sort__order {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: auto;
  }

  .catalog-sort__btn-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    /* Checked */
    /* Disabled */
    /* Checked + Disabled */
  }

  .catalog-sort__btn-text input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .catalog-sort__btn-text label {
    padding: 8px 22px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #7575e2;
    background-color: #f4f4fc;
    border-radius: 20px;
    cursor: pointer;
    -webkit-transition: color 0.3s ease, background-color 0.3s ease;
    -o-transition: color 0.3s ease, background-color 0.3s ease;
    transition: color 0.3s ease, background-color 0.3s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .catalog-sort__btn-text:not(:last-child) {
    margin-right: 7px;
  }

  .catalog-sort__btn-text input[type="radio"]:checked + label {
    color: #ffffff;
    background-color: #7575e2;
    pointer-events: none;
  }

  .catalog-sort__btn-text input[type="radio"]:disabled + label {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .catalog-sort__btn-text input[type="radio"]:checked:disabled + label {
    color: #f8f8f8;
    background-color: #dddddd;
  }

  .catalog-sort__btn-text input[type="radio"]:focus + label {
    color: #7575e2;
    background-color: #e8e8fa;
  }

  .catalog-sort__btn {
    /* Checked */
    /* Disabled */
    /* Checked + Disabled */
  }

  .catalog-sort__btn--up svg {
    -webkit-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);
  }

  .catalog-sort__btn--down {
    margin-left: 10px;
  }

  .catalog-sort__btn label {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 36px;
    height: 36px;
    padding: 0 size(12px);
    font-weight: 600;
    color: #7575e2;
    background-color: #f4f4fc;
    border-radius: 50%;
    cursor: pointer;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .catalog-sort__btn label svg {
    width: 16px;
    height: 14px;
  }

  .catalog-sort__btn input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .catalog-sort__btn input[type="radio"]:checked + label {
    color: #ffffff;
    background-color: #7575e2;
    pointer-events: none;
  }

  .catalog-sort__btn input[type="radio"]:disabled + label {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .catalog-sort__btn input[type="radio"]:checked:disabled + label {
    color: #f8f8f8;
    background-color: #dddddd;
    pointer-events: none;
  }

  .catalog-sort__btn input[type="radio"]:focus + label {
    color: #7575e2;
    background-color: #e8e8fa;
  }

  .form-checkbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    overflow: hidden;
  }

  .form-checkbox label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
  }

  .form-checkbox label::before {
    content: "";
    display: block;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 2px solid #b4b4d7;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: border-color 0.3s ease;
    -o-transition: border-color 0.3s ease;
    transition: border-color 0.3s ease;
  }

  .form-checkbox input:hover + label::before {
    border-color: #7575e2;
  }

  .form-checkbox input:focus + label::before {
    border-color: #7575e2;
  }

  .form-checkbox input:checked + label::before {
    background-color: #7575e2;
    background-image: url("../img/svg/check.svg");
    background-repeat: no-repeat;
    background-position: center;
    border-color: rgba(255, 255, 255, 0);
  }

  .form-checkbox input:disabled + label {
    color: #dddddd;
    pointer-events: none;
  }

  .form-checkbox input:disabled + label::before {
    background: #f8f8f8;
    border-color: rgba(255, 255, 255, 0);
    pointer-events: none;
  }

  .form-checkbox input:disabled:hover + label {
    pointer-events: none;
  }

  .cards {
    display: -ms-grid;
    display: grid;
    -webkit-column-gap: 32px;
    -moz-column-gap: 32px;
    column-gap: 32px;
    row-gap: 40px;
    -ms-grid-columns: (1fr)[3];
    grid-template-columns: repeat(3, 1fr);
  }

  .rate {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #eaeaf8;
    border: none;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
  }

  .rate.is-invalid .rate__message {
    opacity: 1;
  }

  .rate__caption {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
  }

  .rate__caption svg {
    width: 9px;
    height: 9px;
    margin-top: 2px;
    margin-left: 5px;
  }

  .rate__bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
  }

  .rate__progress {
    font-size: 24px;
    line-height: 32px;
    color: #b4b4d7;
  }

  .rate__group {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    width: 320px;
    height: 48px;
    -webkit-transition: background-image 0.3s ease;
    -o-transition: background-image 0.3s ease;
    transition: background-image 0.3s ease;
  }

  .rate__group label {
    margin-right: 15px;
  }

  .rate__group label:first-of-type {
    margin-right: 0;
  }

  .rate__count {
    margin: 0;
    margin-left: 12px;
    color: #b4b4d7;
  }

  .rate__message {
    position: absolute;
    top: -26px;
    right: 0;
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ed6041;
    opacity: 0;
  }

  .rate__group:not(:checked) > label {
    float: right;
    width: 51px;
    height: 48px;
    overflow: hidden;
    font-size: 30px;
    color: #ffffff;
    white-space: nowrap;
    cursor: pointer;
    background: url("../img/svg/star-default.svg") no-repeat top 0 left 0;
    background-size: 51px 48px;
  }

  .rate__group input:checked ~ label {
    background: url("../img/sprite/icon-full-star.svg") no-repeat top 0 left 0;
    background-size: 51px 48px;
  }

  .rate__group input:checked:disabled ~ label {
    background: url("../img/svg/star-disabled.svg") no-repeat top 0 left 0;
    background-size: 51px 48px;
    pointer-events: none;
  }

  .rate__group input:disabled ~ label {
    background: url("../img/svg/star-disabled2.svg") no-repeat top 0 left 0;
    background-size: 51px 48px;
    pointer-events: none;
  }

  .rate__group:not(:checked) > label:hover,
  .rate__group:not(:checked) > label:hover ~ label {
    background: url("../img/svg/star-hover.svg") no-repeat top 0 left 0;
    background-size: 51px 48px;
  }

  .rate__group > input:focus + label {
    outline: 1px solid #ed6041;
  }

  .product-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    background-color: #ffffff;
  }

  .product-card__img {
    position: relative;
    padding-bottom: calc((240 / 280) * 100%);
  }

  .product-card__img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .product-card__rate {
    width: 100%;
  }

  .product-card__rate svg {
    width: 17px;
    height: 16px;
    margin-right: 5px;
  }

  .product-card__rate svg:last-of-type {
    margin-right: 0;
  }

  .product-card__info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 10px 0 5px;
  }

  .product-card__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: auto;
  }

  .product-card__btn {
    min-width: 150px;
  }

  .product-card__btn svg {
    margin-right: 8px;
  }

  .product-card__btn:disabled {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .product-card__btn.disabled {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .product-card__btn--in-cart {
    background-color: rgba(255, 255, 255, 0);
  }

  .product-card__title {
    margin: 0;
    padding-top: 8px;
  }

  .product-card__price {
    margin: 0;
    padding-top: 4px;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
  }

  .pagination {
    width: 100%;
    margin: 40px 0 0;
  }

  .pagination__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .pagination__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  .pagination__item:first-child {
    margin-left: 0;
  }

  .pagination__link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 8px 14px;
    color: #7575e2;
    background-color: #f4f4fc;
    border-radius: 50px;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
  }

  .pagination__link--active {
    color: #ffffff;
    background-color: #7575e2;
    pointer-events: none;
  }

  .pagination__link--text {
    min-width: 83px;
    color: #7575e2;
    background-color: #f4f4fc;
    border-radius: 20px;
  }

  .pagination__link:disabled {
    color: #dddddd;
    background-color: #f8f8f8;
  }

  .pagination__link:disabled .pagination__link--active {
    background-color: #dddddd;
  }

  .pagination__link.disabled {
    color: #dddddd;
    background-color: #f8f8f8;
  }

  .pagination__link.pagination__link--active.disabled {
    color: #ffffff;
    background-color: #dddddd;
  }

  .pagination__link.pagination__link--active:disabled {
    color: #ffffff;
    background-color: #dddddd;
  }

  .form-review {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 400px;
  }

  .form-review__item {
    margin-bottom: 20px;
  }

  .form-review__item:last-child {
    margin-bottom: 0;
  }

  .form-review__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 5px;
    padding-top: 23px;
  }

  .form-review__label {
    display: inline-block;
    -ms-flex-item-align: start;
    align-self: flex-start;
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
  }

  .form-review__label--required {
    position: relative;
  }

  .form-review__label--required::before {
    content: "*";
    position: absolute;
    top: 2px;
    right: -6px;
    width: 5px;
    height: 5px;
    font-size: 12px;
    line-height: 16px;
    color: #ed6041;
  }

  .form-review__input {
    width: 100%;
    padding: 8px 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    background-color: inherit;
    border: 2px solid #b4b4d7;
    border-radius: 8px;
  }

  .form-review__input--textarea {
    height: 70px;
  }

  .form-review__input::-webkit-input-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-review__input::-moz-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-review__input:-ms-input-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-review__input::-ms-input-placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-review__input::placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #b4b4d7;
  }

  .form-review__warning {
    display: block;
    margin: 0;
    padding-right: 5px;
    font-size: 14px;
    line-height: 18px;
    text-align: end;
    color: #ed6041;
  }

  .form-review__button {
    margin-top: 7px;
    margin-right: 70px;
    margin-left: 70px;
  }

  .form-review__rate {
    margin-bottom: 33px;
  }

  .form-review__btn {
    width: 100%;
  }

  .banner {
    position: relative;
    width: 100%;
    min-height: 280px;
    margin: 0 auto;
    background-color: #333333;
  }

  .banner img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: right;
    object-position: right;
  }

  .banner__info {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 140px;
  }

  .banner__message {
    margin: 0;
    font-weight: 700;
    color: #65cd54;
  }

  .banner .title--h1 {
    margin-bottom: 5px;
    color: #ffffff;
  }

  .banner__text {
    margin: 0 0 30px;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }

  .banner .btn {
    -ms-flex-item-align: start;
    align-self: flex-start;
  }

  .basket {
    color: #333333;
  }

  .basket__list {
    display: -ms-grid;
    display: grid;
    margin: 0 0 60px;
    padding: 0;
    list-style: none;
    grid-row-gap: 32px;
  }

  .basket__summary {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 60px 180px;
    background-color: #f4f4fc;
    border-radius: 8px;
  }

  .basket__summary-order {
    width: 100%;
    max-width: 300px;
  }

  .basket__summary-order .btn {
    width: 100%;
    margin-top: 32px;
  }

  .basket__summary-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 0 0 16px;
    font-size: 20px;
    line-height: 32px;
    color: #333333;
  }

  .basket__summary-item:last-of-type {
    margin-bottom: 0;
  }

  .basket__summary-text--total {
    font-weight: 700;
  }

  .basket__summary-value--bonus {
    color: #ed6041;
  }

  .basket__promo {
    width: 100%;
    max-width: 440px;
  }

  .basket__promo .title--h4 {
    margin-bottom: 13px;
  }

  .btn-icon {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 0;
    color: #7575e2;
    background-color: #f4f4fc;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
  }

  .btn-icon:disabled {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .btn-icon.disabled {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .btn-icon svg {
    width: 7px;
    height: 12px;
  }

  .btn-icon--prev {
    -webkit-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .quantity {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .quantity input {
    width: 60px;
    padding: 5px;
    text-align: center;
    color: #333333;
    border: none;
    outline: none;
  }

  .quantity input::-webkit-input-placeholder {
    text-align: center;
    color: #333333;
  }

  .quantity input::-moz-placeholder {
    text-align: center;
    color: #333333;
  }

  .quantity input:-ms-input-placeholder {
    text-align: center;
    color: #333333;
  }

  .quantity input::-ms-input-placeholder {
    text-align: center;
    color: #333333;
  }

  .quantity input::placeholder {
    text-align: center;
    color: #333333;
  }

  .basket-form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
  }

  .basket-form .btn {
    margin-top: 20px;
  }

  .basket-form form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    color: #333333;
  }

  .basket-form form .custom-input {
    width: 308px;
    margin-right: 10px;
  }

  .basket-form form .custom-input__error {
    top: 3px;
  }

  .basket-form form .custom-input__sucess {
    top: 3px;
  }

  .basket-form form label {
    margin-bottom: 8px;
    line-height: 20px;
  }

  .basket-form form input {
    padding: 8px 20px;
    background-color: #ffffff;
    border: 2px solid #b4b4d7;
    border-radius: 8px;
    outline: #7575e2;
  }

  .basket-form form input::-webkit-input-placeholder {
    font-weight: 600;
    line-height: 24px;
    color: #b4b4d7;
  }

  .basket-form form input::-moz-placeholder {
    font-weight: 600;
    line-height: 24px;
    color: #b4b4d7;
  }

  .basket-form form input:-ms-input-placeholder {
    font-weight: 600;
    line-height: 24px;
    color: #b4b4d7;
  }

  .basket-form form input::-ms-input-placeholder {
    font-weight: 600;
    line-height: 24px;
    color: #b4b4d7;
  }

  .basket-form form input::placeholder {
    font-weight: 600;
    line-height: 24px;
    color: #b4b4d7;
  }

  .basket-form form input:focus {
    border-color: #7575e2;
  }

  .product {
    color: #333333;
  }

  .product .container {
    display: -ms-grid;
    display: grid;
    grid-column-gap: 40px;
    -ms-grid-columns: 560px auto;
    grid-template-columns: 560px auto;
  }

  .product .title--h3 {
    margin-bottom: 8px;
  }

  .product__img {
    width: 560px;
    height: 480px;
  }

  .product__img img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .product__rate {
    margin-bottom: 18px;
  }

  .product__rate svg {
    width: 17px;
    height: 16px;
    margin-right: 5px;
  }

  .product__rate svg:last-of-type {
    margin-right: 0;
  }

  .product__price {
    margin: 0 0 16px;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  .product__tabs-controls {
    max-width: 516px;
    margin-left: 24px;
  }

  .product__tabs-list {
    width: 100%;
    max-width: 456px;
    margin: 0 0 0 46px;
    padding: 0;
    list-style: none;
  }

  .product__tabs-list .item-list {
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    grid-column-gap: 20px;
    -ms-grid-columns: 160px auto;
    grid-template-columns: 160px auto;
  }

  .product__tabs-text p {
    margin: 0 0 10px;
  }

  .product__tabs-text p:last-child {
    margin-bottom: 0;
  }

  .product-similar {
    color: #333333;
  }

  .product-similar .title--h3 {
    margin-bottom: 40px;
  }

  .product-similar__slider {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    max-width: 1112px;
    margin: 0 auto;
  }

  .product-similar__slider-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: calc(100% + 16px);
    max-width: 936px;
    margin: 0 auto;
  }

  .product-similar .product-card {
    display: none;
    width: calc(33.3% - 16px);
    margin: 0 16px;
  }

  .product-similar .product-card.is-active {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .product-similar .product-card:last-child {
    margin-right: 0;
  }

  .slider-controls {
    position: absolute;
    top: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 0;
    color: #7575e2;
    background-color: #f4f4fc;
    border: none;
    border-radius: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
    -webkit-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
  }

  .slider-controls svg {
    width: 7px;
    height: 12px;
  }

  .slider-controls:disabled {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .slider-controls.disabled {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .slider-controls--prev {
    left: 0;
    margin-right: 16px;
  }

  .slider-controls--prev svg {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .slider-controls--next {
    right: 0;
  }

  .review-block {
    color: #333333;
  }

  .review-block__list {
    display: -ms-grid;
    display: grid;
    margin: 0 0 40px;
    padding: 0 0 13px;
    list-style: none;
    border-bottom: 2px solid #f4f4fc;
    grid-row-gap: 12px;
  }

  .review-block .item-list {
    display: -ms-grid;
    display: grid;
    margin-bottom: 20px;
    grid-column-gap: 20px;
    -ms-grid-columns: 160px auto;
    grid-template-columns: 160px auto;
  }

  .review-block__buttons {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .review-block__buttons .up-btn {
    position: absolute;
    top: 5px;
    right: -18px;
  }

  .review-card {
    padding-top: 24px;
    border-top: 2px solid #f4f4fc;
  }

  .review-card__head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .review-card__data {
    font-size: 14px;
    line-height: 20px;
    color: #b4b4d7;
  }

  .review-card__rate {
    margin-bottom: 20px;
  }

  .review-card__rate svg {
    width: 17px;
    height: 16px;
    margin-right: 5px;
  }

  .review-card__rate svg:last-of-type {
    margin-right: 0;
  }

  .review-card__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .item-list__title {
    font-weight: 700;
  }

  .item-list__text {
    margin: 0;
  }

  .link {
    font-weight: 600;
    color: #9a9ac6;
    cursor: pointer;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
  }

  .link:active {
    color: #a2a2ff;
  }

  .basket-item {
    position: relative;
    display: -ms-grid;
    display: grid;
    padding-bottom: 32px;
    color: #333333;
    border-bottom: 2px solid #f4f4fc;
    grid-column-gap: 40px;
    -ms-grid-columns: 140px 401px 140px 138px 140px 40px;
    grid-template-columns: 140px 401px 140px 138px 140px 40px;
  }

  .basket-item:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  .basket-item__img {
    width: 140px;
    height: 120px;
  }

  .basket-item__img img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .basket-item__title {
    margin: 0 0 10px;
    font-size: 20px;
    line-height: 32px;
  }

  .basket-item__list {
    margin: 0;
    padding: 0;
    list-style: none;
    color: #b4b4d7;
  }

  .basket-item__price,
  .basket-item__total-price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  .basket-item__price {
    margin: 0;
  }

  .basket-item .cross-btn {
    margin-top: 40px;
  }

  .basket-item--short {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    grid-column-gap: 0;
    padding-bottom: 20px;
    border-bottom: none;
  }

  .basket-item--short .basket-item__description {
    margin-right: 34px;
    margin-left: 34px;
  }

  .basket-item--short .basket-item__title {
    margin: 0 0 8px;
    font-size: 16px;
    line-height: 24px;
  }

  .basket-item--short .basket-item__list {
    margin: 0 0 8px;
    padding: 0;
    list-style: none;
    font-size: 14px;
    line-height: 20px;
    color: #9a9ac6;
  }

  .basket-item--short .basket-item__price {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .cross-btn {
    width: 40px;
    height: 40px;
    padding: 0;
    color: #7575e2;
    background: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
  }

  .cross-btn svg {
    width: 10px;
    height: 10px;
  }

  .up-btn {
    position: absolute;
    right: 22px;
    bottom: 330px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 48px;
    height: 48px;
    padding: 0;
    background-color: #f4f4fc;
    border: 2px solid #7575e2;
    border-radius: 50%;
    cursor: pointer;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
  }

  .up-btn svg {
    width: 12px;
    height: 18px;
  }

  .up-btn:disabled {
    color: #dddddd;
    background-color: rgba(255, 255, 255, 0);
    border-color: #dddddd;
    pointer-events: none;
  }

  .up-btn.disabled {
    color: #dddddd;
    background-color: rgba(255, 255, 255, 0);
    border-color: #dddddd;
    pointer-events: none;
  }

  .tabs {
    max-width: 100%;
    margin-top: 30px;
  }

  .tabs__controls {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 25px;
  }

  .tabs__control {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 157px;
    padding: 8px 20px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
  }

  .tabs__control:disabled {
    color: #dddddd;
    pointer-events: none;
  }

  .tabs__control.disabled {
    color: #dddddd;
    pointer-events: none;
  }

  .tabs__control.is-active {
    background-color: #e8e8fa;
    pointer-events: none;
    outline: none;
  }

  .tabs__control.is-active:focus {
    background-color: #e8e8fa;
  }

  .tabs__control:disabled.is-active {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .tabs__control.disabled.is-active {
    color: #dddddd;
    background-color: #f8f8f8;
    pointer-events: none;
  }

  .tabs__content {
    position: relative;
    margin-bottom: 40px;
    padding-top: 20px;
    border-top: 2px solid #f4f4fc;
    -webkit-transition: height 0.3s;
    -o-transition: height 0.3s;
    transition: height 0.3s;
  }

  .tabs__element {
    position: absolute;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease, visibility 0.3s ease;
    -o-transition: opacity 0.3s ease, visibility 0.3s ease;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .tabs__element.is-active {
    z-index: 1;
    width: 100%;
    visibility: visible;
    opacity: 1;
  }

  /* @media (hover: hover), screen and (min-width: 0\\0) {
  &:hover,
  &:focus {
    color: $color-default-white;
  }
} */

  @media (hover: hover), screen and (min-width: 0\\0
  ) {
    .header__basket-link:hover,
    .header__basket-link:focus {
      -webkit-box-shadow: 0 4px 16px rgba(56, 56, 117, 0.2);
      box-shadow: 0 4px 16px rgba(56, 56, 117, 0.2);
    }

    .main-nav__link:hover,
    .main-nav__link:focus {
      background-color: #e8e8fa;
    }

    .btn:hover,
    .btn:focus {
      background-color: #e8e8fa;
    }

    .btn:active {
      background-color: #a2a2ff;
    }

    .btn--purple:hover,
    .btn--purple:focus {
      background-color: #a2a2ff;
    }

    .btn--purple:active {
      background-color: #525288;
    }

    .custom-checkbox .custom-checkbox__icon:hover {
      border-color: #7575e2;
    }

    .custom-checkbox .custom-checkbox__icon:focus {
      border-color: #525288;
    }

    .form-search__reset:hover,
    .form-search__reset:focus {
      color: #ed6041;
    }

    .breadcrumbs__link--active:hover,
    .breadcrumbs__link--active:focus {
      color: #333333;
    }

    .breadcrumbs__link:hover,
    .breadcrumbs__link:focus {
      color: #a2a2ff;
    }

    .catalog-sort__btn-text label:hover,
    .catalog-sort__btn-text label:focus {
      background-color: #e8e8fa;
    }

    .catalog-sort__btn label:hover,
    .catalog-sort__btn label:focus {
      background-color: #e8e8fa;
    }

    .pagination__link:hover {
      background-color: #e8e8fa;
    }

    .btn-icon:hover,
    .btn-icon:focus {
      background-color: #e8e8fa;
    }

    .slider-controls:hover,
    .slider-controls:focus {
      background-color: #e8e8fa;
    }

    .slider-controls:active {
      color: #7575e2;
      background-color: #a2a2ff;
      pointer-events: none;
    }

    .link:hover,
    .link:focus {
      color: #e8e8fa;
    }

    .cross-btn:hover,
    .cross-btn:focus {
      color: #ed6041;
    }

    .cross-btn:active {
      color: #525288;
    }

    .up-btn:hover,
    .up-btn:focus {
      background-color: #e8e8fa;
    }

    .up-btn:active {
      background-color: #a2a2ff;
    }

    .tabs__control:hover,
    .tabs__control:focus,
    .tabs__control:active {
      background-color: #f4f4fc;
    }
  }

  @font-face {
    font-family: "Open Sans";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${OpenSansNormalWoff2}) format("woff2"), url(${OpenSansNormalWoff}) format("woff");
  }

  @font-face {
    font-family: "Open Sans";
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${OpenSansSemiWoff2}) format("woff2"), url(${OpenSansSemiWoff}) format("woff");
  }

  @font-face {
    font-family: "Open Sans";
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${OpenSansBoldWoff2}) format("woff2"), url(${OpenSansBoldWoff}) format("woff");
  }
`;

export {GlobalStyle};
