import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

import { ContentArrows } from "./styled";

export const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <ContentArrows>
      <BiRightArrow className="next" onClick={prevSlide} />
      <BiLeftArrow className="prev" onClick={nextSlide} />
    </ContentArrows>
  );
};
