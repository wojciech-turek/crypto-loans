import React, { useState, useEffect } from "react";
import {
  Container,
  Dimmer,
  Form,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";
import { useRouter } from "next/router";
import { getFactoryData } from "../../utils/getFactory";
import web3 from "../../web3";
import Web3 from "web3";

export default function NewLoan() {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    interest: "",
    target: "",
    months: "",
    image: [],
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    setError(false);
    setSuccess(false);
    setLoading(true);
    e.preventDefault();
    const contractIstance = await getFactoryData();
    const accounts = await web3.eth.getAccounts();
    // const fileData = new FormData();
    // fileData.append("file", formData.image);
    // const rawResponse = await fetch(
    //   "https://api.pinata.cloud/pinning/pinFileToIPFS",
    //   {
    //     method: "POST",
    //     headers: {
    //       pinata_api_key: process.env.NEXT_PUBLIC_PINIATA_API_KEY,
    //       pinata_secret_api_key: process.env.NEXT_PUBLIC_PINIATA_API_SECRET_KEY,
    //     },
    //     body: fileData,
    //   }
    // );
    // const content = await rawResponse.json();
    // const imageIpfs = content.IpfsHash;
    try {
      await contractIstance.methods
        .createLoanRequest(
          formData.title,
          Web3.utils.toWei(formData.target),
          formData.interest,
          formData.description,
          ["test"],
          formData.months
        )
        .send({ from: accounts[0] });
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.replace("/loans");
      }, 3000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.ethereum?.request({ method: "eth_requestAccounts" });
  }, []);

  const handleFormDataChange = (e) => {
    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: file,
      };
    });
  };

  return (
    <Container className="wrapper">
      <Dimmer active={loading}>
        <Loader>
          <div>Creating your request...</div>
        </Loader>
      </Dimmer>
      <h2>Create new loan request</h2>
      <Segment compact padded textAlign="center">
        <Form error={!!error} success={success} onSubmit={onSubmit}>
          <Form.Input
            name="title"
            value={formData.title}
            placeholder="Type here..."
            label="Title"
            onChange={handleFormDataChange}
          />
          <Form.TextArea
            name="description"
            value={formData.description}
            placeholder="Type here..."
            label="Description"
            onChange={handleFormDataChange}
          />
          <Form.Input
            onChange={handleChangeImage}
            type="file"
            label="Upload Image(s)"
            multiple
          />
          <Form.Input
            name="target"
            value={formData.target}
            placeholder="Type here..."
            label="Target (in ETH)"
            onChange={handleFormDataChange}
          />
          <Form.Input
            name="months"
            type="number"
            min="1"
            max="36"
            placeholder="Type here..."
            label="Loan length (in months)"
            value={formData.months}
            onChange={handleFormDataChange}
          />
          <Form.Input
            name="interest"
            type="number"
            min="0"
            max="100"
            placeholder="Type here..."
            label="Offered Interest (% per year)"
            value={formData.interest}
            onChange={handleFormDataChange}
          />
          <Form.Button>Submit</Form.Button>
          <Message error header="Error!" content={error}></Message>
          <Message success>
            <p>Request completed!</p>
            <p>Redirecting to main page...</p>
          </Message>
        </Form>
      </Segment>
    </Container>
  );
}
