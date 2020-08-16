import { createGlobalStyle } from "styled-components";

const StyleReset = createGlobalStyle`
    *, :not(ReactMarkdown)  {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html,
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
         "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕,
          "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial,
           돋움, Dotum, Tahoma, Geneva, sans-serif;
    }
    #root {
        height:100%;
    }
    a {
        text-decoration :none;
    }
    table {
        border-collapse: collapse;
    }
`;

export default StyleReset;
