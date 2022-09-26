import { Card } from "./styled";

export const Cards = (props) => {
  return (
    <Card>
      <img src={props.image} alt={props.name} />
      <div className="info-card">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <button>See code</button>
      </div>
    </Card>
  );
};
