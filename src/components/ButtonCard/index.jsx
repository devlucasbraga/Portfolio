import React from "react";

import { Button } from "./styled";

export const ButtonCard = ({ link }) => {
  return (
    <>
      <Button href={link} target="_black">
        See Project
      </Button>
      ;
    </>
  );
};
