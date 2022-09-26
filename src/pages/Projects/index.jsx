import React from "react";

import dataProjects from "../../datasProjects";

import { ContainerProjects } from "./styled";

import { Cards } from "../../components/Cards";

export const Projects = () => {
  return (
    <ContainerProjects id="projects">
      <div className="container-cards">
        {dataProjects.map((item, index) => (
          <Cards
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </ContainerProjects>
  );
};
