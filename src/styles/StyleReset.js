import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const StyleReset = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    html,
    body,
    #root {
        height:100%;
    }
    a {
        color:white;
        text-decoration :none;
    }
`;

export default StyleReset;
