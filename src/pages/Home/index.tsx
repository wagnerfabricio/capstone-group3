import { Container } from "./style";
import HomeBannerimage from "../../assets/images/banner5.svg";
import { ServiceHomeCard } from "../../components/serviceHomeCard";
import HomeCardImage01 from "../../assets/images/homecard01.svg";
import DetailImage01 from "../../assets/images/detailImage01.svg";
import DetailImage02 from "../../assets/images/detailImage02.svg";
import FooterImage01 from "../../assets/images/FooterImage01.svg";
import FooterImage02 from "../../assets/images/FooterImage02.svg";
import HomeBackground from "../../assets/images/homeBackground.svg";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        <header>
          <ul>
            <li
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </li>
            <li
              onClick={() => {
                history.push("/signup");
              }}
            >
              Registre-se
            </li>
            <li
              onClick={() => {
                history.push("/about");
              }}
            >
              Sobre nós
            </li>
          </ul>
        </header>
        <main>
          <div className="home__image">
            <img src={HomeBannerimage}></img>
          </div>

          <div className="services">
            <div className="services__header">
              <h2>Serviços</h2>
            </div>
            <div className="services__cards">
              <ServiceHomeCard
                image={HomeCardImage01}
                description="Massagem com produtos para pele"
                title="Massagem"
              ></ServiceHomeCard>
              <ServiceHomeCard
                image={HomeCardImage01}
                description="Massagem com produtos para pele"
                title="Massagem"
              ></ServiceHomeCard>
              <ServiceHomeCard
                image={HomeCardImage01}
                description="Massagem com produtos para pele"
                title="Massagem"
              ></ServiceHomeCard>
              <ServiceHomeCard
                image={HomeCardImage01}
                description="Massagem com produtos para pele"
                title="Massagem"
              ></ServiceHomeCard>
            </div>
            <div className="services__details">
              <div className="detail__sector">
                <div className="detail__image">
                  <img src={DetailImage01}></img>
                </div>
                <div className="detail__text">
                  <p id="text">
                    Mr. Mime is a bipedal, humanoid Pokémon. Blue growths
                    resembling clown hair extend from the sides of its pale pink
                    head, and there is a magenta circle on each cheek. Its jaw
                    is...
                  </p>
                </div>
              </div>
              <div className="detail__sector" id="imageSecond">
                <div className="detail__image">
                  <img src={DetailImage02}></img>
                </div>
                <div className="detail__text">
                  <p id="text">
                    Mr. Mime is a bipedal, humanoid Pokémon. Blue growths
                    resembling clown hair extend from the sides of its pale pink
                    head, and there is a magenta circle on each cheek. Its jaw
                    is...
                  </p>
                </div>
              </div>
            </div>
            <div className="services__pictures">
              <img src={FooterImage01}></img>
              <img src={FooterImage02}></img>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer__top"></div>
          <div className="footer__details"></div>
        </footer>
      </Container>
    </>
  );
};

export default Home;
