import { ethers } from "ethers";
import { useHistory } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
// import style
import "./style.scss";

// import images
import Fox from "../../assets/fox.svg";

const Header = () => {
  const history = useHistory();
  const setCurrentAccount = useStoreActions((actions) => actions.wallet.update);
  const clearAccount = useStoreActions((actions) => actions.wallet.clear);
  const currentAccount = useStoreState((state) => state.wallet.account);

  const handleClick = async () => {
    if (!window.ethereum) return window.open("https://metamask.io/download");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = await provider.send("eth_requestAccounts", []);
    setCurrentAccount(account.toString());
  };
  return (
    <div className="container mb-4">
      <div className="header-container">
        <button className="btn btn-success" onClick={() => history.push("/")}>
          Home
        </button>
        <button
          className="btn btn-success"
          onClick={() => history.push("/mynfts")}
        >
          My NFTs
        </button>

        {console.log(currentAccount)}
        {currentAccount.length > 0 ? (
          <button
            className="btn-metamask-disconnect"
            onClick={() => {
              clearAccount();
            }}
          >
            Disconnect
          </button>
        ) : (
          <button className="btn-metamask" onClick={handleClick}>
            <img
              src={Fox}
              alt="metamask-img"
              className="img-fluid pr-5"
              width="25"
            />

            {window.ethereum ? "Connect to MetaMask" : "Download MetaMask"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
