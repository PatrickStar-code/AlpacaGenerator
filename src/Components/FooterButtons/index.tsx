import { ImageSquare, Shuffle } from "phosphor-react";
import { ButtonAction } from "./style";

export function FooterButtons() {
    return (
        <>
            <ButtonAction><Shuffle size={18} /> Random</ButtonAction>
            <ButtonAction><ImageSquare size={18} />Download</ButtonAction>
        </>
    )
}