import AboutUsCard from "./AboutUsCard";
import { Container, Content } from "./styles";
import { Button } from "@mui/material";
import { TiArrowBack } from "react-icons/ti";
import { useHistory } from "react-router-dom";

import foster from '../../assets/images/foster.gif'
import rego from '../../assets/images/rego.gif'
import luiz from '../../assets/images/luiz.gif'
import bruno from '../../assets/images/bruno.gif'
import vagner from '../../assets/images/vagner.gif'

const group = [
  {
    name: "Felipe Foster",
    duty: "Quality Assurance",
    image: foster,
    git: "https://github.com/felipefoster",
  },
  {
    name: "Rêgo Falcão",
    duty: "Scrum Master",
    image: rego,
    git: "https://github.com/regofalcao",
  },
  {
    name: "Bruno Faria",
    duty: "Product Owner",
    image: bruno,
    git: "https://github.com/BrunoFaria93",
  },
  {
    name: "Luiz Paulo",
    duty: "Quality Assurance",
    image: luiz,
    git: "https://github.com/luizpcardoso",
  },
  {
    name: "Vagner Fabricio",
    duty: "Tech Leader",
    image: vagner,
    git: "https://github.com/wagnerfabricio",
  },
];

const About = () => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <Button
          onClick={() => history.push("/")}
          variant="contained"
          startIcon={<TiArrowBack />}
        >
          Voltar
        </Button>
      </Content>
      <Content>
        {group.map((member) => (
          <AboutUsCard
            key={member.image}
            name={member.name}
            duty={member.duty}
            image={member.image}
            git={member.git}
          />
        ))}
      </Content>
    </Container>
  );
};

export default About;
