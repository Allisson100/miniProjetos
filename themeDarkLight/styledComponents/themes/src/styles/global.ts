import { createGlobalStyle } from "styled-components";


export default createGlobalStyle `
    #root {
        width: 100vw;
        height: 100vh;
    }

    * {
        margin: 0;
        outline: 0;
        box-sizing: border-box;
        padding: 0;
    }

    button {
        cursor: pointer;
        border: none;
    }
`