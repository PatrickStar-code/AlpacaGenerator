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
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    

`;

export const Button = styled.button<ButtonInterface>`
border: none;
        border-radius: 12px;
        border: 1px solid #2a5ca7;
        padding: 1rem;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: .8rem;
        color: #2a5ca7;

        &:hover{
            background-color: #2a5ca7;
            color: #fff;
        }

        ${props => props.status && `background-color: #2a5ca7; color: #fff;`}
`

