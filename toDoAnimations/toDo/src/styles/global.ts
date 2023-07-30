import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    #root {
        background: linear-gradient(#030419 , #060732);
        height: 100vh;
        position: relative;
        width: 100%;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        padding: 0;
        ::-webkit-scrollbar {
            width: 10px;
        };
        ::-webkit-scrollbar-thumb {
            background-color: #888;
        };
        ::-webkit-scrollbar-track {
            background-color: #f1f1f1;
        };
    }

    button {
        border: none;
        cursor: pointer;
    }
`