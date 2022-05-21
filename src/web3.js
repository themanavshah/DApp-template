import Web3 from "web3";
 
let web3;

const INFURA_API_KEY="";
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  //ADD YOUR INFURA_API_KEY before getting started
  const provider = new Web3.providers.HttpProvider(
    `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`
  );
  web3 = new Web3(provider);
}

export default web3;