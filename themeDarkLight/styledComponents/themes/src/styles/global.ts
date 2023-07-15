import { createGlobalStyle } from "styled-components";


export default createGlobalStyle `
    #root {
        width: 100%;
        height: 100%;
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