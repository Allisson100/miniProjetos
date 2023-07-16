import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    #root {
        width: 100%;
        height: 100vh;
        background: linear-gradient(#030419 , #060732);
        position: relative;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    button {
        border: none;
        cursor: pointer;
    }
`