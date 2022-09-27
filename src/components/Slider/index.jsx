import React, { useState } from "react";
import { SliderContent } from "../SliderContent";
import datasProjects from "../../datasProjects";
import { Arrows } from "../Arrows";

import { SliderContainer } from "./styled";

const len = datasProjects.length - 1;

export const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  return (
    <SliderContainer id="projects">
      <SliderContent activeIndex={activeIndex} imageSlider={datasProjects} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </SliderContainer>
  );
};
