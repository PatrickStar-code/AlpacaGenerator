import styled from "styled-components";

interface ButtonInterface  {
    status?: boolean;
}

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;


    div + div{
        margin-top: 1rem;
    }


    
`;

export const ButtonsDiv = styled.div`
    margin-top: 1rem;
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(3, 1fr);
    width: 28rem;

`;

export const Button = styled.button<ButtonInterface>`
        border: none;
        border-radius: 16px;
        border: 1px solid #2a5ca7;
        padding: 0.8rem;
        text-align: center;
        font-weight: bold;
        font-size: .8rem;
        color: #2a5ca7;
        cursor: pointer;
        -webkit-filter: opacity(65%);

        &:hover{
            background-color: #2a5ca7;
            color: #fff;
            -webkit-filter: opacity(100%);
        }

        ${props => props.status && `background-color: #2a5ca7; color: #fff;            -webkit-filter: opacity(100%);
`}
`

