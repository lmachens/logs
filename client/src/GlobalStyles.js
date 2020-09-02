import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *:after,
      *:before {
        box-sizing: border-box;
      }

      :root {
        --base-color: #f6f6f4;
        --bg-color: #000;
        --bg-gradient: linear-gradient(
          140deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(81, 81, 81, 1) 100%
        );
      }

      html {
        font-size: 100%;
      }

      body {
        color: var(--base-color);
        background: var(--bg-color);
        background: var(--bg-gradient);
        padding: 0;
        margin: 0;
      }
    `}
  />
);

export default GlobalStyles;
