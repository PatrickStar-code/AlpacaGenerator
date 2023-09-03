import { useContext } from "react";
import { Button, ButtonsContainer, ButtonsDiv } from "./style";
import { AlpacaContext} from "../../AlpacaContext/Context";
export function Buttons() {
    const {ActiveButton, changeButton} = useContext(AlpacaContext);
    function HandleChangeButton(button: string){
        changeButton(button);
    }
    console.log(ActiveButton);
    return (
        <ButtonsContainer>
            <div>
                <span>ACCESSORIZE THE ALPACA</span>
                <ButtonsDiv>
                <Button type="button"  onClick={() => HandleChangeButton("Hair")} status={ActiveButton === "Hair" && true} >Hair</Button>
                <Button type="button" onClick={() => HandleChangeButton("Ears")} status={ActiveButton === "Ears" && true}>Ears</Button>
                <Button type="button" onClick={()=>HandleChangeButton("Eyes")} status={ActiveButton === "Eyes" && true}>Eyes</Button>
                <Button type="button" onClick={()=>HandleChangeButton("Mounth")} status={ActiveButton === "Mounth" && true}>Mounth</Button>
                <Button type="button" onClick={()=>HandleChangeButton("Neck")} status={ActiveButton === "Neck" && true}>Neck</Button>
                <Button type="button" onClick={()=>HandleChangeButton("Leg")} status={ActiveButton === "Leg" && true}>Leg</Button>
                <Button type="button" onClick={()=>HandleChangeButton("Acessories")} status={ActiveButton === "Acessories" && true}>Acessories</Button>
                <Button type="button" onClick={()=>HandleChangeButton("Background")} status={ActiveButton === "Background" && true}>Background</Button>
                </ButtonsDiv>
            </div>
            <div>
              <span>STYLE</span>
            </div>
        </ButtonsContainer>
    );

}
