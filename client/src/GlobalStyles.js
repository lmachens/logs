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

      @font-face {
        font-family: "Cascadia";
        src: url("/fonts/Cascadia.eot");
        src: url("/fonts/Cascadia.woff") format("woff"),
          url("/fonts/Cascadia.ttf") format("truetype"),
          url("/fonts/Cascadia.svg") format("svg");
        font-weight: normal;
        font-style: normal;
      }

      :root {
        --base-color: #f6f6f4;
        --error-color: #d42a2a;
        --warning-color: #c4920a;
        --info-color: #68d42a;
        --disabled-color: #7a7a7a;
        --bg-color: #000;
        --bg-gradient: linear-gradient(
          140deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(81, 81, 81, 1) 100%
        );
        --font-family: "Cascadia", Sans-Serif;
      }

      html {
        font-size: 100%;
        height: 100%;
      }

      body {
        color: var(--base-color);
        background-color: var(--bg-color);
        background-image: var(--bg-gradient);
        padding: 0;
        margin: 0;
        font-family: var(--font-family);
      }

      button {
        color: inherit;
        font: inherit;
      }

      a {
        text-decoration: none;
        color: inherit;

        :hover {
          text-decoration: underline;
        }
      }
    `}
  />
);

export default GlobalStyles;
