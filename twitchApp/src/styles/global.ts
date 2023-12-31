import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border: none;
        color: #ffffff;
        font-family: 'Source Code Pro', monospace;
    }

    #root {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        background: linear-gradient(#9D00F8, #A835F0);
    }
`