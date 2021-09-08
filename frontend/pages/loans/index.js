import React, { useEffect, useState } from "react";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import LoanFactory from "../../../ethereum/artifacts/contracts/ChainWaveLoans.sol/LoanFactory.json";
import web3 from "../../web3";

const getFactoryData = async () => {
  const instance = new web3.eth.Contract(
    LoanFactory.abi,
    "0x3Bfd7d095c31d1642f501595f1dfEd8D4C63C9D7"
  );
  return instance;
};

const getDeployedLoans = async () => {
  const instance = await getFactoryData();
  const requests = await instance.methods.getDeployedLoanRequests().call();
  return requests;
};

export default function loans() {
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const getLoansData = async () => {
      const data = await getDeployedLoans();
      return data;
    };
    const data = await getLoansData();
    setLoading(false);
  }, []);
  return (
    <Container className="wrapper">
      <Dimmer active={loading}>
        <Loader>Loading...</Loader>
      </Dimmer>
      Loans
    </Container>
  );
}
