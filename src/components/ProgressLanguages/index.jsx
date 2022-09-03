import * as React from "react";

import { ContainerLanguages } from "./styled";

export default function ProgressLanguages({ language, value }) {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${value}%`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <ContainerLanguages>
      <span>{language}</span>
      <div className="b1">
        <div className="b2" style={style}>
          <span className="progress"> {value}%</span>
        </div>
      </div>
    </ContainerLanguages>
  );
}
