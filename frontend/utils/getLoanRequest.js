import LoanRequest from "../../ethereum/artifacts/contracts/CryptoLoans.sol/LoanRequest.json";
import web3 from "../web3";

export const getRequestLoan = async (address) => {
  const instance = new web3.eth.Contract(LoanRequest.abi, address);
  return instance;
};
