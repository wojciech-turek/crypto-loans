import web3 from "./web3";
import LoanRequest from "./artifacts/contracts/CryptoLoans.sol/LoanRequest.json";

function getCampaign(address) {
  const instance = new web3.eth.Contract(JSON.parse(LoanRequest.abi), address);
  return instance;
}

export default getCampaign;
