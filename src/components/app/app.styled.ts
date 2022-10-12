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
`;

export { GlobalStyle };
