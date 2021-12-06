import { useEffect, useState } from "react";
import axios from "axios";

// import styles
import "./style.scss";
import meter from "../../assets/meter.jpg";

const Home = () => {
  const [parkedNFTs, setParkedNFTs] = useState([]);
  useEffect(() => {
    const homePageData = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/get`);
      setParkedNFTs(data);
    };

    homePageData();
  }, []);
  return (
    <div className="container">
      {console.log(parkedNFTs)}
      <div className="home-wrapper">
        <h2 className="subtitle text-center">
          coordinated-crypto-art-skunk-pools
        </h2>
        <h1 className="title text-center">DeFi Art Game</h1>
        <p className="text text-center">Current Rewards Pool:</p>
        <div className="row align-items-center justify-content-center px-2">
          {parkedNFTs.map((nft) => {
            return (
              <div
                key={nft.token_id}
                className="col col-12 col-md-6 col-lg-4 mb-4 mh-30 h-auto"
              >
                <div className="card h-75">
                  <div className="card-top text-center">
                    <h3>{nft.name}</h3>
                    <img
                      src={nft.nft_reference}
                      alt="nft"
                      className="img-fluid w-100 px-1"
                    />
                  </div>

                  <div className="card-body mb-4">
                    <div className="mb-4">
                      <p>Date Parked: {new Date(nft.date).toDateString()}</p>
                      <p>Garage Deposit: ${nft.deposit}</p>
                      <p>Garage Yield: {nft.nft_yield}%</p>
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
