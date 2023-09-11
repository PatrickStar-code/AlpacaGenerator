import { AlpacaContext } from "../../AlpacaContext/Context";
import { Acessories, Box, Ears, Eyes, Hair, Leg, Mounth, Neck, Nose } from "./style";
import { useContext } from "react";
export function Alpaca(){
    const {acessories} = useContext(AlpacaContext);
    console.log(acessories[0].Ears)
    return (
        <Box className="alpaca" prop={acessories[0].Background}>
            <Acessories prop={acessories[0].Acessories}/>
            <Ears prop={acessories[0].Ears}/>
            <Hair prop={acessories[0].Hair}	/>
            <Nose prop={acessories[0].Nose}/>
            <Mounth prop={acessories[0].Mouth}/>
            <Eyes   prop={acessories[0].Eyes}/>
            <Neck   prop={acessories[0].Neck}/>
            <Leg    prop={acessories[0].Leg}/>
        </Box>
    )
    }
