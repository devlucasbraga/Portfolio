import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

import { NavIcons } from "./styled";

export const RedesSociais = () => {
  return (
    <NavIcons>
      <ul>
        <li>
          <a href="https://www.instagram.com/eo_braga/" target="_blank">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/devlucasbraga" target="_blank">
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-braga-bb39ba216"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </NavIcons>
  );
};
