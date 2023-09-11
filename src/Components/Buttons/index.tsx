import { useContext } from "react";
import { Button, ButtonsContainer, ButtonsDiv } from "./style";
import { AlpacaContext} from "../../AlpacaContext/Context";
import { Dicionario } from "../../AlpacaContext/Dictionary";	

export function Buttons() {
    const {ActiveButton, changeButton,changeStyle} = useContext(AlpacaContext);
    function HandleChangeButton(button: string){
        changeButton(button);
    }
    return (
        <ButtonsContainer>
            <div>
                <span>ACCESSORIZE THE ALPACA</span>
                <ButtonsDiv>
                {Object.keys(Dicionario).map((key) => {
                    return <Button type="button" key={key} onClick={()=>HandleChangeButton(key)}  status={ActiveButton === key ? "true" : "false"} >{key}</Button>;
                })}
                </ButtonsDiv>
            </div>
            <div>
              <span>STYLE</span>
              <ButtonsDiv>
                {ActiveButton && Object.keys(Dicionario[ActiveButton]).map((key) => {
                    return <Button type="button" key={key} onClick={()=>changeStyle(key, ActiveButton)} >{key}</Button>;
                })}
              </ButtonsDiv>
            </div>
        </ButtonsContainer>
    );

}
