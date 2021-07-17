import { Global, css } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      style={css`
        html {
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />
  );
};

export default GlobalStyle;
