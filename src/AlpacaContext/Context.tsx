import { ReactNode, createContext, useState } from "react";

interface Acessories{
    Hair: string
    Ears: string
    Eyes: string
    Mouth: string
    Neck: string
    Leg: string
    Acessories: string
    Nose:string
    Background: string
}

interface AlpacaContextInterface{
    ActiveButton: string
    changeButton: (button: string) => void
    acessories: Acessories[]
    changeStyle: (Change: string, target: string) => void
    
}

export const AlpacaContext = createContext({}as AlpacaContextInterface);


export function AlpacaContextProvider({children} : {children:ReactNode}){
    const [ActiveButton, setActiveButton] = useState("Hair");
    const [acessories, setStyle] = useState<Acessories[]>([
        {
        "Hair": "Default",
        "Ears": "Default",
        "Eyes": "Default",
        "Neck": "Default",
        "Nose": "Default",
        "Mouth": "Default",
        "Leg": "Default",
        "Acessories": "Headphone",
        "Background": "Blue50"
        }
    ])

    function changeStyle(Change: string, target: string){
        setStyle(prevAccessories => {
            return prevAccessories.map(accessory => ({
              ...accessory,
              [target]: Change
            }));
          });
    }

    

    function changeButton(button: string){
         setActiveButton(button);
    }

    return(
        <AlpacaContext.Provider value={{ActiveButton,changeButton,acessories,changeStyle}}>
            {children}
        </AlpacaContext.Provider>
    )
}