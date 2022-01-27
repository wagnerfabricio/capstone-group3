import { Container } from "./style";

const Home = () => {
  return (
    <>
      <Container>
        <header></header>
        <main>
          <div className="home__image">
            <img></img>
          </div>
          <div className="services">
            <div className="services__cards"></div>
          </div>
          <div className="services__details"></div>
          <div className="services__pictures"></div>
        </main>
      </Container>
    </>
  );
};

export default Home;
