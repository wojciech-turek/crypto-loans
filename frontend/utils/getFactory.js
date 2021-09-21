import LoanFactory from "../../ethereum/artifacts/contracts/CryptoLoans.sol/LoanFactory.json";
import web3 from "../web3";

export const getFactoryData = async () => {
  const instance = new web3.eth.Contract(
    LoanFactory.abi,
    "0x20260c7Dc4dbd1E9518EaFcd568Deded62D352F0"
  );
  return instance;
};
