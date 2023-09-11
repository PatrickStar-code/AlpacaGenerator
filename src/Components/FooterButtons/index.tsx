import { ImageSquare, Shuffle } from "phosphor-react";
import { ButtonAction } from "./style";
import html2canvas from "html2canvas";
import { useContext } from "react";
import { AlpacaContext } from "../../AlpacaContext/Context";
import { Dicionario } from "../../AlpacaContext/Dictionary";
export function FooterButtons() {
  const { changeStyle } = useContext(AlpacaContext);
  const handleDownload = () => {
    const box = document.querySelector(".alpaca");
    if (box instanceof HTMLCanvasElement) {
      html2canvas(box).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "alpaca.png";
        link.click();
      });
    }
    else{
        console.error("Element with class '.alpaca' not found");
    }
  };

  const GetRandomItem = () => {
    const keysHair = Object.keys(Dicionario.Hair);
    const RandomKeyHair = keysHair[Math.floor(Math.random() * keysHair.length)];
    changeStyle(RandomKeyHair, "Hair");

    const keysEars = Object.keys(Dicionario.Ears);
    const RandomKeyEars = keysEars[Math.floor(Math.random() * keysEars.length)];
    changeStyle(RandomKeyEars, "Ears");

    const keysEyes = Object.keys(Dicionario.Eyes);
    const RandomKeyEyes = keysEyes[Math.floor(Math.random() * keysEyes.length)];
    changeStyle(RandomKeyEyes, "Eyes");

    const keysMouth = Object.keys(Dicionario.Mouth);
    const RandomKeyMouth =
      keysMouth[Math.floor(Math.random() * keysMouth.length)];
    changeStyle(RandomKeyMouth, "Mouth");

    const keysNeck = Object.keys(Dicionario.Neck);
    const RandomKeyNeck = keysNeck[Math.floor(Math.random() * keysNeck.length)];
    changeStyle(RandomKeyNeck, "Neck");

    const keysLeg = Object.keys(Dicionario.Leg);
    const RandomKeyLeg = keysLeg[Math.floor(Math.random() * keysLeg.length)];
    changeStyle(RandomKeyLeg, "Leg");

    const keysAcessories = Object.keys(Dicionario.Acessories);
    const RandomKeyAcessories =
      keysAcessories[Math.floor(Math.random() * keysAcessories.length)];
    changeStyle(RandomKeyAcessories, "Acessories");

    const keysBackground = Object.keys(Dicionario.Background);
    const RandomKeyBackground =
      keysBackground[Math.floor(Math.random() * keysBackground.length)];
    changeStyle(RandomKeyBackground, "Background");
  };

  return (
    <>
      <ButtonAction onClick={GetRandomItem}>
        <Shuffle size={18} /> Random
      </ButtonAction>
      <ButtonAction onClick={handleDownload}>
        <ImageSquare size={18} />
        Download
      </ButtonAction>
    </>
  );
}
