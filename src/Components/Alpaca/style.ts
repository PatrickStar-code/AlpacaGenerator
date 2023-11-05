import styled from "styled-components";
import { Dicionario } from "../../AlpacaContext/Dictionary";


interface AcessoriesProps{
    prop: string;
}


export const Box = styled.div<AcessoriesProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27rem;
    height:27rem;
    border-radius:12px;
    background-image: url(${props => Dicionario.Background[props.prop]});
    background-size: cover;
    z-index: 0;
    margin:0 auto;
    @media screen and (max-width: 768px){
        width: 100%;
        margin: 1rem;
        padding: 0;
        
    }   

`;

export const  Target= styled.div<AcessoriesProps>`
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 25rem;
    height: 27rem;
        
    @media screen and (max-width: 768px){
        width: 100%;
    }
   
`;

export const  Neck = styled(Target)`
    background-image: url(${props => Dicionario.Neck[props.prop]});
    bottom: 0;
    z-index: 1;   
    `

export const Hair = styled(Target)`
    background-image: url(${props => Dicionario.Hair[props.prop]});  
    z-index: 3;
`;

export const Nose = styled(Target)`
    background-image: url("assets/alpaca/nose.png");
    z-index: 2;
    ;
`;

export const Eyes = styled(Target)`
    background-image: url(${props => Dicionario.Eyes[props.prop]});
    z-index: 3;
`;

export const Ears = styled(Target)`
    background-image: url(${props => Dicionario.Ears[props.prop]});
    z-index: 0;
`;


export const Leg = styled(Target)`
    background-image: url(${props => Dicionario.Leg[props.prop]});
    bottom: 0;
    left: 0;
    width: 28rem;
`;

export const Mounth = styled(Target)`
    background-image: url(${props => Dicionario.Mouth[props.prop]});

    z-index: 4;
`;

export const Acessories = styled(Target)`
    background-image: url(${props => Dicionario.Acessories[props.prop]});
    z-index: 8;
    left: 1.2rem;
    `