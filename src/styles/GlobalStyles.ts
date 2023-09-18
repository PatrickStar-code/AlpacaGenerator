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
        width:100%;

        @media screen and (min-width: 375px){
            margin: 1rem;

        }
    }
   
    :focus {
        outline: 0;
    }

`