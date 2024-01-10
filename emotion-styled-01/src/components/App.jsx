import React from "react";

import Hover from "./styled/Hover";

export default () => (
  <>
    <h1>Welcome to React Vite Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
    <hr/>
    <h2>Demo: <a target="_blank" href="https://emotion.sh/docs/styled"><code>@emotion/styled</code></a></h2>
    <hr/>
    <Hover>
      Hover to change color.
    </Hover>
  </>
);
