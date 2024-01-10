import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { background, primary, secondary } from "../constants/colors";

export default () => (
  <>
    <h1>Welcome to React Vite Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
    <hr/>
    <h2>Demo: <a target="_blank" href="https://emotion.sh/docs/css-prop"><code>@emotion/react</code></a></h2>
    <hr/>
    <div
      css={css`
        padding: 32px;
        background-color: ${background};
        color: ${primary};
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${secondary};
        }
      `}
    >
      Hover to change color.
    </div>
  </>
);
