import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Container, Content } from "./styles";

const PageNotFound = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <h1>Ooops!</h1>

        <img
          src="https://i.pinimg.com/originals/d3/29/2d/d3292d428300479cda4ed24d89be521a.gif"
          alt="Cartoon jumping in the boack of another one to receive a massage"
        />
        <h2>Parece que você tentou acessar uma página que não existe!</h2>

        <Button variant="contained" onClick={() => history.push("/")}>
          Voltar para sua página
        </Button>
      </Content>
    </Container>
  );
};

export default PageNotFound;
