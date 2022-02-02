import { Container } from "./style";
import HomeBannerimage from "../../assets/images/banner5.svg";
import { ServiceHomeCard } from "../../components/serviceHomeCard";
import HomeCardImage01 from "../../assets/images/homecard01.svg";
import HomeCardImage02 from "../../assets/images/homecard02.svg";
import HomeCardImage03 from "../../assets/images/homecard03.svg";
import HomeCardImage04 from "../../assets/images/homecard04.svg";
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
                image={HomeCardImage03}
                description="Para qunado o dia está corrido, mas a dorzinha não te deixa trabalhar"
                title="Massagem Rápida"
              ></ServiceHomeCard>
              <ServiceHomeCard
                image={HomeCardImage02}
                description="Massagem para os dias mais estressantes"
                title="Massagem Relaxante"
              ></ServiceHomeCard>
              <ServiceHomeCard
                image={HomeCardImage04}
                description="Para qunado sua pele está precisando de um trato especial."
                title="Massagem Hidratante"
              ></ServiceHomeCard>
              <ServiceHomeCard
                image={HomeCardImage01}
                description="Para os dias mais frios, pedras aquecidas te relaxam ainda mais"
                title="Massagem Aquecida"
              ></ServiceHomeCard>
            </div>
            <div className="services__details">
              <div className="detail__sector">
                <div className="detail__image">
                  <img src={DetailImage01}></img>
                </div>
                <div className="detail__text">
                  <p id="text">
                    Todo tipo de cuidados para você e para sua pele. Nossos
                    profissionais sempre utilizam o que há de mais moderno no
                    mundo dos cosméticos, além de serem experts no manuseio.
                  </p>
                </div>
              </div>
              <div className="detail__sector" id="imageSecond">
                <div className="detail__image">
                  <img src={DetailImage02}></img>
                </div>
                <div className="detail__text">
                  <p id="text">
                    Profissionais treinados nas melhores instituições de
                    cuidados para o corpo. Oferecemos todo os tipos de serviços
                    quando o assunto é massoterapia.
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
          <div className="footer__details">
            <p>Todos os direitos reservados</p>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Home;
