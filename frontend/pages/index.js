import React from "react";
import { Button, Container, Grid } from "semantic-ui-react";
import Lottie from "react-lottie";
import animationData from "../public/72488-loud-speaker-alert.json";
import Link from "next/link";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <Grid className="main wrapper" centered>
        <Grid.Column width={6} verticalAlign="middle">
          <h1 className="main__heading">
            Find sound investments and help make dreams come true.
          </h1>
          <Link href="/loans">
            <Button>See funding requests</Button>
          </Link>
          <Link href="/loans/new">
            <Button>Apply for funding</Button>
          </Link>
        </Grid.Column>
        <Grid.Column width={6}>
          <Lottie options={defaultOptions} />
        </Grid.Column>
      </Grid>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3f51b5"
            fillOpacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,197.3C672,160,768,96,864,101.3C960,107,1056,181,1152,176C1248,171,1344,85,1392,42.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Home;
