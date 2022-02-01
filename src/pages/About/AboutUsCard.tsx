import { CardImageContainer } from "./styles";

interface AboutUsCardProps {
  image: string;
  name: string;
  duty: string;
  git: string;
}

const AboutUsCard = ({ name, duty, image, git }: AboutUsCardProps) => (
  <a href={git} rel="noreferrer" target="_blank">
    <CardImageContainer>
      <img src={image} alt={name} />
    </CardImageContainer>
    <h2>{name}</h2>
    <h4>{duty}</h4>
  </a>
);

export default AboutUsCard;
