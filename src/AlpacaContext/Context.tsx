import { ReactNode, createContext, useState } from "react";

interface AlpacaContextInterface{
    ActiveButton: string
    changeButton: (button: string) => void
}

export const AlpacaContext = createContext({}as AlpacaContextInterface);


export function AlpacaContextProvider({children} : {children:ReactNode}){
    const [ActiveButton, setActiveButton] = useState("Hair");


    function changeButton(button: string){
         setActiveButton(button);
    }

    return(
        <AlpacaContext.Provider value={{ActiveButton,changeButton}}>
            {children}
        </AlpacaContext.Provider>
    )
}