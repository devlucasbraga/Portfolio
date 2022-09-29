import { ContainerContact, ContactRight, Linha } from "./styled";

import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

export const Contact = () => {
  return (
    <ContainerContact id="contact">
      <div className="content-contact">
        <div className="contact-left">
          <h1>Contate-me</h1>
          <Linha></Linha>
          <HiOutlineMail />
          <span>lucasbraga_a@outlook.com</span>
          <BsTelephone />
          <span>+55 (11) 984744610</span>
          <HiOutlineLocationMarker />
          <span>Diadema - São Paulo - Brasil</span>
        </div>
        <ContactRight>
          <h1>Preencha o formulário</h1>
          <Linha></Linha>
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Nome" />
          <textarea placeholder="Deixe sua menssagem"></textarea>
        </ContactRight>
      </div>
    </ContainerContact>
  );
};
