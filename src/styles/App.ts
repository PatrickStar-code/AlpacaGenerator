import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:flex-start;
    gap: 1rem;
    

    header{
        margin-top: 2rem;
        
        h1{
            font-size: 2rem;
            font-weight: 700;
            font-weight: bold;
            text-transform: uppercase;
            font-family: 'Roboto', sans-serif;
            color: #001636;
        }

    }
    main{
        display: flex;
        gap: 1rem;
        @media screen and (max-width: 768px){
            flex-direction: column;
        }
   
    }

    footer{
        display: flex;
        gap: 1rem;
        margin-top: 0%.5;
    }

    `;

