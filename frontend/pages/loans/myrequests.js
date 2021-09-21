import React, { useEffect, useState } from "react";
import {
  Container,
  Dimmer,
  Grid,
  Loader,
  Segment,
  Image,
  Button,
  Message,
} from "semantic-ui-react";
import Web3 from "web3";
import { getFactoryData } from "../../utils/getFactory";
import { getRequestLoan } from "../../utils/getLoanRequest";
import web3 from "../../web3";

export default function MyLoans() {
  const [loading, setLoading] = useState(true);
  const [requestData, setRequestData] = useState([]);

  const getLoanRequestInstance = async () => {
    const loanRequestInstace = await getRequestLoan(loanAddress);
    return loanRequestInstace;
  };

  const getDeployedLoans = async () => {
    const instance = await getFactoryData();
    const requests = await instance.methods.getDeployedLoanRequests().call();
    return requests;
  };

  useEffect(async () => {
    window.ethereum?.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
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
    const requestsMadeByCurrentAccount = requestsDetailed.filter(
      (el) => el[0] === accounts[0]
    );
    console.log(requestsMadeByCurrentAccount);
    setRequestData(requestsMadeByCurrentAccount);
    setLoading(false);
  }, []);

  return (
    <Container className="wrapper">
      <Dimmer active={loading}>
        <Loader>
          <div>Loading...</div>
        </Loader>
      </Dimmer>
      <h2>My requests</h2>

      {requestData.map((request, index) => {
        return (
          <Segment key={index}>
            <h2>
              Request #{index} - {request[1]}
            </h2>
            <Grid columns={3} divided>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Image size="medium" src="/44069.png" wrapped />
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <p>
                    <span className="attribute">Target: </span>{" "}
                    {Web3.utils.fromWei(request[6])} ETH
                  </p>
                  <p>
                    <span className="attribute">Collected: </span>{" "}
                    {Web3.utils.fromWei(request[7])} ETH
                  </p>
                  <p>
                    <span className="attribute">Withdrawable: </span>{" "}
                    <span
                      className={
                        Web3.utils.fromWei(request[6]) !==
                        Web3.utils.fromWei(request[7])
                          ? "negative"
                          : "positive"
                      }
                    >
                      {Web3.utils.fromWei(request[6]) !==
                      Web3.utils.fromWei(request[7])
                        ? "FALSE"
                        : "TRUE"}
                    </span>
                  </p>
                  <Message>
                    You can only withdraw funds when you reach full target.
                  </Message>
                </Grid.Column>
                <Grid.Column className="buttonsList">
                  <Button
                    color="green"
                    disabled={
                      Web3.utils.fromWei(request[6]) !==
                      Web3.utils.fromWei(request[7])
                    }
                  >
                    Withdraw
                  </Button>
                  <Button color="orange" disabled>
                    Repay
                  </Button>
                  <Button color="red">Cancel</Button>
                  <Message color="red">
                    Canceling will refund all active contributors!
                  </Message>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        );
      })}
    </Container>
  );
}
