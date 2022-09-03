import React, { useState } from "react";
import dogs from "../../assets/Dogs.jpg";
import animaisFantasticos from "../../assets/AnimaisFantasticos.jpg";

import { ContainerProjects } from "./styled";

import { Cards } from "../../components/Cards";

export const Projects = () => {
  const [card, setCard] = useState(true);

  function handleCard() {
    if (card === false) {
      const newStyled = {
        Transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 1,
      };
    }
  }

  return (
    <ContainerProjects id="projects">
      <div className="container">
        <Cards image={dogs} name="Dogs" setCard={setCard}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quos
          non nulla provident vitae nam temporibus, quo nisi distinctio
          veritatis explicabo expedita, doloribus assumenda aspernatur veniam
          quia qui deleniti eum?
        </Cards>
      </div>
    </ContainerProjects>
  );
};
