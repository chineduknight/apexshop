import { css } from "@emotion/core";

import { BRAND_PRIMARY } from "styles/__color";

export default css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Fira Sans", sans-serif;
    background: ${BRAND_PRIMARY};
  }

  * {
    box-sizing: border-box;
  }
`;
