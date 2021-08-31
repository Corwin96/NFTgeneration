import React from "react";
import { GenerateNFT } from "../components/GenerateNFT"

export const Home = () => {

  const [image, setImageValue] = React.useState();

  const handleGenerateButton = async () => {
    const generatedNFT = await GenerateNFT();
    setImageValue(generatedNFT);
  }

  React.useEffect(() => {
  });

  return (
    <section className="home">
      <div className="GenerateNFT">
        <button
          className="token-section__mint-button"
          onClick={() => handleGenerateButton()}
        >
          Generate NFT
        </button>
      </div>
      <div className="GeneratedNFT">
        <img src={image} alt="Nothing Yet" />
      </div>
    </section>
  );
}

