import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../lib/constants";

// import styles
import "./style.scss";
import meter from "../../assets/meter.jpg";

const Home = () => {
  const [parkedNFTs, setParkedNFTs] = useState([]);
  useEffect(() => {
    const homePageData = async () => {
      const { data } = await axios.get(`${API_URL}/nfts/get`);
      const nftData = data.data;
      setParkedNFTs(nftData);
      nftData.forEach(async (nft) => {
        axios.get(`https://api.opensea.io/api/v1/asset/${nft.reference.contractAddress}/${nft.reference.tokenId}?format=json`).then((resp) => {
          setParkedNFTs([]);
          let newNftData = nftData;
          const idx = newNftData.findIndex((n) => n.id === nft.id);
          newNftData[idx] = { ...nft, image: resp.data.image_url, name: resp.data.name, description: resp.data.description }
          setParkedNFTs(newNftData)
        })
      });
    };

    homePageData();
  }, []);
  return (
    <div className="container">
      <div className="home-wrapper">
        <h2 className="subtitle text-center">
          Replicating Value Flow in The Next Distributed Internet
        </h2>
        <h1 className="title text-center">Coder Economy</h1>
        <p className="text text-center">Building a Culture of Reputation Wealth and The Next Working Commons</p>
        <div className="row align-items-center justify-content-center px-2">
          {parkedNFTs && parkedNFTs.map((nft) => {
            return (
              <div
                key={nft.tokenId}
                className="col col-12 col-md-6 col-lg-4 mb-4 mh-30 h-auto"
              >
                <div className="card h-75">
                  <div className="card-top text-center">
                    <h3>{nft.name}</h3>
                    <img
                      src={nft.image}
                      alt="nft"
                      className="img-fluid w-100 px-1"
                    />
                  </div>

                  <div className="card-body mb-4">
                    <div className="mb-4">
                      <p>Date Parked: {new Date(nft.created).toDateString()}</p>
                      <p>Garage Deposit: ${nft.deposit}</p>
                      <p>Garage Yield: {nft.yield}%</p>
                    </div>

                    <div className="mb-4 w-100">
                      <img
                        src={meter}
                        className="img-thumbnail"
                        alt="parking meter"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
