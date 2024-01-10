import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { background, primary, secondary } from "../../../constants/colors";

export default (props) => (
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
    {props.children}
  </div>
);
