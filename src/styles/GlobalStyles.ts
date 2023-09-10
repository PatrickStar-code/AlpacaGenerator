import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #eeecee;
    }
   
    :focus {
        outline: 0;
    }

`