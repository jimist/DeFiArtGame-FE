/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment, useState } from "react";
import { useWallet, UseWalletProvider } from "use-wallet";
import Modal from "react-bootstrap/Modal";
import { ethers } from "ethers";

// import style
import "./style.scss";

// import images
import Fox from "../../assets/fox.svg";


const Header = () => {
  const wallet = useWallet();

  //Ethers setup
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // Modal Hooks
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function sendEth(amount){
      //Get address
      const account = await signer.getAddress();
      const balance = await provider.getBalance(account);
      
      if(Number(ethers.utils.formatUnits(balance, 18)) > amount){
        try{
            await signer.sendTransaction({
                to: "0x00fA52DEe11786ae8446a82bD87a34FCbf5F1c87",
                value: ethers.utils.parseEther(String(amount))
            });
        } catch(err){
            console.log(err);
        }
      } else {
        alert("Insufficient balance to do the transfer!");
      }
  }
    return (
    <Fragment>
      {wallet.status === "connected" ? (
        <Fragment>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Account Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <h4>Account:</h4>
                <p>{wallet.account}</p>
              </div>
              <div>
                <h4>Balance:</h4>
                <p>{wallet.balance}</p>
              </div>
            </Modal.Body>
          </Modal>
        </Fragment>
      ) : (
        ""
      )}
      <div className="container">
        <div className="header-container">
          {wallet.status === "connected" ? (
            <Fragment>
               <button
                className="btn-metamask-disconnect"
                onClick={() => {sendEth(0.001)}}
              >
                Send Eth
              </button>
              <button
                className="btn-metamask-disconnect"
                onClick={() => {
                  wallet.reset();
                }}
              >
                Disconnect
              </button>
              <button
                className="btn-metamask-disconnect"
                onClick={() => {
                  handleShow();
                }}
              >
                See Account Details
              </button>
            </Fragment>
          ) : (
            <button
              className="btn-metamask"
              onClick={() => {
                wallet.connect();
                handleShow();
              }}
            >
              <img
                src={Fox}
                alt="metamask-img"
                className="img-fluid pr-5"
                width="25"
              />
              Connect to MetaMask
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      // This is how connectors get configured
      // provided: {provided: window.CleanEthereum},
      // portis: { dAppId: "my-dapp-id-123-xyz" },
      portis: { dAppId: "my-dapp-id-123-xyz" },
    }}
  >
    <Header />
  </UseWalletProvider>
);
