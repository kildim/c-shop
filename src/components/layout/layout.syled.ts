import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  min-height: calc(100 * var(--vh, 1vh));
`;

export {Layout};
