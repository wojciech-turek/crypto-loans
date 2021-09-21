import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Image,
  Header,
  Dimmer,
  Loader,
  Form,
  Input,
} from "semantic-ui-react";
import { getRequestLoan } from "../utils/getLoanRequest";
import Web3 from "web3";
import web3 from "../web3";
import { useRouter } from "next/router";

export default function ModalContent(props) {
  const [contributionValue, setContributionValue] = useState("");
  const { open, setOpen, loanAddress } = props;
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState();

  const getLoanRequestInstance = async () => {
    const loanRequestInstace = await getRequestLoan(loanAddress);
    return loanRequestInstace;
  };

  const router = useRouter();

  useEffect(async () => {
    window.ethereum?.request({ method: "eth_requestAccounts" });
    const loanRequestInstace = await getLoanRequestInstance();
    const loanData = await loanRequestInstace.methods.getDetails().call();
    setModalData(loanData);
    setLoading(false);
  }, []);

  const handleContribute = async () => {
    setLoading(true);
    const loanRequestInstace = await getLoanRequestInstance();
    const accounts = await web3.eth.getAccounts();
    await loanRequestInstace.methods
      .contribute()
      .send({ from: accounts[0], value: Web3.utils.toWei(contributionValue) });
    setLoading(false);
    setOpen(false);
    router.reload(window.location.pathname);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Dimmer active={loading}>
        <Loader>Loading...</Loader>
      </Dimmer>
      <Modal.Header>Loan Details and Contribution</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="/44069.png" wrapped />
        <Modal.Description>
          <Header>{modalData?.[1]}</Header>
          <p>{modalData?.[2]}</p>
          <p>
            <span className="attribute">Available to contribute: </span>
            {modalData
              ? (
                  Web3.utils.fromWei(modalData?.[6]) -
                  Web3.utils.fromWei(modalData?.[7])
                ).toFixed(2)
              : null}{" "}
            ETH
          </p>
          <Form>
            <Form.Field>
              <Form.Input>Contribution size:</Form.Input>
              <Input
                type="number"
                step="0.1"
                labelPosition="right"
                label="ETH"
                value={contributionValue}
                onChange={(e) => setContributionValue(e.target.value)}
              ></Input>
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)} disabled={loading}>
          Cancel
        </Button>
        <Button
          content="Contribute"
          labelPosition="right"
          icon="checkmark"
          onClick={handleContribute}
          positive
          disabled={loading}
        />
      </Modal.Actions>
    </Modal>
  );
}
