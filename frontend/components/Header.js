import React, { useState } from "react";
import { Button, Container, Menu, Image } from "semantic-ui-react";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState("Home");

  const handleNavItemClick = (e) => setActive(e.target.name);
  return (
    <Menu borderless fixed="top">
      <Container>
        <Image src="/logo.png" floated="left" size="small" className="logo" />
        <Menu.Menu position="right">
          <Link href="/">
            <Menu.Item
              name="Home"
              active={active === "Home"}
              onClick={handleNavItemClick}
            >
              Home
            </Menu.Item>
          </Link>
          <Link href="/loans">
            <Menu.Item
              name="Browse"
              active={active === "Browse"}
              onClick={handleNavItemClick}
            >
              Browse Loans
            </Menu.Item>
          </Link>
          <Menu.Item
            name="Account"
            active={active === "Account"}
            onClick={handleNavItemClick}
          >
            My Account
          </Menu.Item>
          <Menu.Item name="upcomingEvents">
            <Link href="/new">
              <Button primary>Apply for a loan!</Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
