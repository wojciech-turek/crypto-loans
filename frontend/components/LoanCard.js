import React from "react";
import { Button, Card, Container, Image, Progress } from "semantic-ui-react";

export default function LoanCard(props) {
  const progress = (props.collected / props.target) * 100;

  const handleClick = () => {
    props.setLoanAddress(props.loanAddress);
    props.handleOpenModal(true);
  };

  return (
    <Card color={"violet"}>
      <Image src="/44069.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>
          <p>{props.description}</p>
          <p>
            <span className="attribute">Length: </span>
            {props.months} month
          </p>
          <p>
            <span className="attribute">Offered interest:</span>{" "}
            {props.interest} % APY
          </p>
          <p>
            <span className="attribute">Target amount:</span> {props.target} ETH
          </p>
          {props.contributors > 0 ? (
            <p>
              <span className="attribute">There's already </span>{" "}
              {props.contributors} contribution(s)!
            </p>
          ) : null}
          <p>
            <span className="attribute">Already collected:</span>{" "}
            {props.collected} ETH
          </p>
          <Progress percent={progress} indicating />
        </Card.Description>
        <Container textAlign="center">
          <Button basic color="green" onClick={handleClick}>
            Loan
          </Button>
          <Button basic color="orange" onClick={handleClick}>
            View Details
          </Button>
        </Container>
      </Card.Content>
    </Card>
  );
}
