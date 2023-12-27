import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'DM Sans', sans-serif !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6, button, input, textarea {
    font-family: 'DM Sans', sans-serif !important;
  }

  section {
    position: relative;
  }

  img {
    max-width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  .sticky-nav-active header {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px;
  }
`;