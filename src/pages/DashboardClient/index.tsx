import {
  Background,
  Header,
  Container,
  Footer,
  Card,
  ServicesCard,
  Input,
  AsideRight,
} from "./styles";
import { FaPlus } from "react-icons/fa";
import cardImage from "../../assets/images/cardImage.svg";
import profileImage from "../../assets/images/profileImage.svg";
import { useUserServices } from "../../providers/Services";
import { useAuth } from "../../providers/Auth";
import { useEffect } from "react";

const DashboardClient = () => {
  const arr = [1, 2, 3, 4];

  const { userGetServices, userServices } = useUserServices();
  const { user } = useAuth();

  useEffect(() => {
    userGetServices(user.id)
  }, [userServices])

  return (
    <>
      <Background>
        <Header>
          <div className="footerDesktop">
            <h3>Últimas sessões</h3>

            <p>24/01/2022</p>
            <p>Massagem Corretora</p>
            <p>24/01/2022</p>
            <p>Massagem Corretora</p>
          </div>
          <section>
            <p>
              <b>Hoje, 26 de janeiro</b>
            </p>
            <h2>Bom dia, Kenzinho!</h2>
            <span>Você tem 3 compromissos hoje</span>
          </section>
          <div>
            <img src={profileImage} alt="headerImage" />
          </div>
        </Header>
        <Container>
          <h3>Agenda de tratamentos</h3>
          <Card>
            <p>24/01/2022</p>
            <p>Massagem Corretora</p>
          </Card>
          <Card>
            <p>24/01/2022</p>
            <p>Massagem Corretora</p>
          </Card>
          <Card>
            <p>24/01/2022</p>
            <p>Massagem Corretora</p>
          </Card>
          <Card>
            <p>24/01/2022</p>
            <p>Massagem Corretora</p>
          </Card>

          <h3>Mais serviços</h3>
          <Input placeholder="O que você gostaria de fazer hoje?" />

          <ul>
            {userServices.map((item) => {
              return (
                <ServicesCard>
                  <div>
                    <img src={cardImage} alt="cardimage" />

                    <h6>{item.title}</h6>
                    <button>
                      <FaPlus />
                    </button>
                  </div>
                </ServicesCard>
              );
            })}
          </ul>
        </Container>

        <Footer>
          <div>
            <h3>Últimas sessões</h3>

            <Card>
              <p>24/01/2022</p>
              <p>Massagem Corretora</p>
            </Card>
            <Card>
              <p>24/01/2022</p>
              <p>Massagem Corretora</p>
            </Card>
          </div>
        </Footer>
        <AsideRight></AsideRight>
      </Background>
    </>
  );
};

export default DashboardClient;
