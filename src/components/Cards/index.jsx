import { Card } from "./styled";

export const Cards = (props) => {
  return (
    <Card onClick={() => props.setCard(!true)}>
      <label className="card">
        <img src={props.image} alt="" />
        <div className="info-card">
          <h1>{props.name}</h1>
          <p>{props.children}</p>
          <button>See code</button>
        </div>
      </label>
    </Card>
  );
};
