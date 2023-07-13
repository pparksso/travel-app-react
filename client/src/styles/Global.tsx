import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const Global = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        font-size: 18px;
        color: #333;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 500;
    }
    body {
        position: relative;
        overflow-x: hidden;
    }
    button {
        background: none;
        border: none;
        outline: none;
        padding: 0;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: inherit;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 500;
        font-size: 18px;
    }
`;
