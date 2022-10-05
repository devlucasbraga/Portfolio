import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ButtonForm } from "../../components/ButtonForm";

import { ContainerContact, FormContact } from "./styled";

import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_jevsb7j",
        "template_eog9eyj",
        templateParams,
        "dIqXMR5e087BecAv8",
      )
      .then(
        (res) => {
          console.log("EMAIL EVIADO", res.status, res.text);
          setEmail("");
          setName("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO:", err);
        },
      );
  }

  return (
    <ContainerContact id="contact">
      <div className="content-contact">
        <div className="contact-left">
          <h1>Contate-me</h1>
          <div className="linha"></div>
          <HiOutlineMail />
          <span>lucasbraga_a@outlook.com</span>
          <BsTelephone />
          <span>+55 (11) 984744610</span>
          <HiOutlineLocationMarker />
          <span>Diadema - São Paulo - Brasil</span>
        </div>
        <FormContact onSubmit={sendEmail}>
          <h1>Menssagem</h1>
          <div className="linha"></div>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <textarea
            placeholder="Deixe sua menssagem"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <ButtonForm />
        </FormContact>
      </div>
    </ContainerContact>
  );
};
