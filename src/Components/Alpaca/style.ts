import styled from "styled-components";
import { Dicionario } from "../../AlpacaContext/Dictionary";
export const Box = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27rem;
    height:27rem;
    border-radius:12px;
    background-color: #2a5ca7;
    z-index: 0;
`;

export const  Neck= styled.div`
    position: absolute;
    background-image: url(${Dicionario.neck.default});
    background-size: cover;
    background-repeat: no-repeat;
    width: 25rem;
    height: 27rem;
    bottom: 0;
    z-index: 1;    
`;

export const Hair = styled.div`
    position: absolute;
    background-image: url(${Dicionario.hair.default});
    background-size: cover;
    background-repeat: no-repeat;
    bottom:0;
    width: 25rem;
    height: 27rem;

`;

export const Nose = styled.div`
    position: absolute;
    background-image: url("src/assets/alpaca/nose.png");
    background-size: cover;
    background-repeat: no-repeat;
    bottom:0;
    width: 25rem;
    height: 27rem;
    z-index: 2;
    ;
`;

export const Eyes = styled.div`
    position: absolute;
    background-image: url(${Dicionario.eyes.default});
    background-size: cover;
    background-repeat: no-repeat;
    bottom:0;
    width: 25rem;
    height: 27rem;
    z-index: 3;
`;

export const Ears = styled.div`
    position: absolute;
    background-image: url(${Dicionario.ears.default});
    background-size: cover;
    background-repeat: no-repeat;
    bottom:0;
    width: 25rem;
    height: 27rem;
    z-index: 0;
`;


export const Leg = styled.div`
    position: absolute;
    background-image: url(${Dicionario.leg.default});
    background-size: cover;
    background-repeat: no-repeat;
    bottom:0;
    width: 25rem;
    height: 27rem;
    z-index: 0;
`;

export const Mounth = styled.div`
    position: absolute;
    background-image: url(${Dicionario.mouth.default});
    background-size: cover;
    background-repeat: no-repeat;
    bottom:0;
    width: 25rem;
    height: 27rem;
    z-index: 4;
`;

export const Acessories = styled.div`
    position: absolute;
    background-image: url(${Dicionario.acessories.headphone});
    background-size: cover;
    background-repeat: no-repeat;
    bottom:0;
    width: 25rem;
    height: 27rem;
    z-index: 5;
    `