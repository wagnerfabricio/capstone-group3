import { Container } from "./style";

interface Card {
  title: string;
  description: string;
  image: any;
}

export const ServiceHomeCard = ({ image, title, description }: Card) => {
  return (
    <Container>
      <div className="image">
        <img src={image}></img>
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Container>
  );
};
