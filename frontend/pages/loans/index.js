import React, { useEffect, useState } from "react";
import { Card, Container, Dimmer, Loader } from "semantic-ui-react";
import LoanCard from "../../components/LoanCard";
import { getFactoryData } from "../../utils/getFactory";
import Web3 from "web3";
import ModalContent from "../../components/Modal";

const getDeployedLoans = async () => {
  const instance = await getFactoryData();
  const requests = await instance.methods.getDeployedLoanRequests().call();
  return requests;
};

export default function loans() {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [loanAddress, setLoanAddress] = useState("");
  const [openModal, setOpenModal] = React.useState(false);

  useEffect(async () => {
    const instance = await getFactoryData();
    const getLoansData = async () => {
      const data = await getDeployedLoans();
      return data;
    };
    const data = await getLoansData();
    const allRequestsDetails = async () => {
      const populatedRequestsData = await data.map(async (request) => {
        const requestData = await instance.methods
          .getLoanRequestData(request)
          .call();
        return requestData;
      });
      return Promise.all(populatedRequestsData);
    };
    const requestsDetailed = await allRequestsDetails();
    const requestsWithContractAddress = requestsDetailed.map((el, index) => {
      el[11] = data[index];
      return el;
    });
    setRequests(requestsWithContractAddress);
    setLoading(false);
  }, []);

  return (
    <Container className="wrapper">
      <Dimmer active={loading}>
        <Loader>Loading...</Loader>
      </Dimmer>
      <h2>Loan requests looking for funding</h2>
      {openModal && (
        <ModalContent
          open={openModal}
          setOpen={setOpenModal}
          loanAddress={loanAddress}
        />
      )}
      <Card.Group itemsPerRow={4}>
        {requests.map((request, index) => {
          return (
            <LoanCard
              key={index}
              loanAddress={request[11]}
              title={request[1]}
              description={request[2]}
              months={request[4]}
              contributors={request[5]}
              target={Web3.utils.fromWei(request[6])}
              collected={Web3.utils.fromWei(request[7])}
              interest={request[10]}
              setLoanAddress={setLoanAddress}
              handleOpenModal={setOpenModal}
            />
          );
        })}
      </Card.Group>
    </Container>
  );
}
