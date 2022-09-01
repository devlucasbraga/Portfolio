import React from "react";
import logo from "../../assets/logo.svg";

import { ContainerHeader } from "./styled";

export const Header = () => {
  return (
    <ContainerHeader>
      <div className="logo">
        <img src={logo} alt="Logo do portfolio do Lucas Braga" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </ContainerHeader>
  );
};
