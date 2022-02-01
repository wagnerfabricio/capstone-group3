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
import { FaPlus, FaSearch } from "react-icons/fa";
import cardImage from "../../assets/images/cardImage.svg";
import profileImage from "../../assets/images/profileImage.svg";
import { useUserServices } from "../../providers/Services";
import { useAuth } from "../../providers/Auth";
import { useEffect } from "react";
import { useProducts } from "../../providers/Products";
import { useForm } from "react-hook-form";
import { text } from "stream/consumers";
import MenuProfile from "./Menu";

interface SearchData {
  title: string;
}
const DashboardClient = () => {
  const { userGetServices, userServices } = useUserServices();
  const { user } = useAuth();
  const { getProducts, products, searchProduct } = useProducts();
  const { accessToken } = useAuth();

  const todayDate = new Date();

  const formatDate = (element: Date) => {
    switch (element.getMonth()) {
      case 0:
        return "Janeiro";
      case 1:
        return "Fevereiro";
      case 2:
        return "Março";
      case 3:
        return "Abril";
      case 4:
        return "Maio";
      case 5:
        return "Junho";
      case 6:
        return "Julho";
      case 7:
        return "Agosto";
      case 8:
        return "Setembro";
      case 9:
        return "Outubro";
      case 10:
        return "Novembro";
      case 11:
        return "Dezembro";
    }
  };

  useEffect(() => {
    getProducts();
    userGetServices(user.id);
  }, []);

  const handleSearch = ({ title }: SearchData) => {
    searchProduct(title, accessToken);
  };

  const { register, handleSubmit } = useForm<SearchData>();

  return (
    <>
      <Background>
        <Header>
          <div className="footerDesktop">
            <h3>Últimas sessões</h3>

            {userServices.map((item) => {
              return (
                <Card key={item.id}>
                  <p>{item.date}</p>
                  <p>{item.title}</p>
                </Card>
              );
            })}
          </div>
          <MenuProfile />
          <section>
            <p>
              <b>
                Hoje, {todayDate.getDate()} de {formatDate(todayDate)}
              </b>
            </p>
            <h2>Bom dia, {user.name}!</h2>
            <span>Você tem {userServices.length} compromisso(s) hoje. </span>
          </section>
          <div>
            <img src={profileImage} alt="headerImage" />
          </div>
        </Header>
        <Container>
          <h3>Agenda de tratamentos</h3>
          {userServices.map((item) => {
            return (
              <Card key={item.id}>
                <p>{item.date}</p>
                <p>{item.title}</p>
              </Card>
            );
          })}
          <h3>Mais serviços</h3>
          <form onSubmit={handleSubmit(handleSearch)}>
            <Input
              placeholder="O que você gostaria de fazer hoje?"
              {...register("title")}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>

          <ul>
            {!products.length ? (
              <div>Não encontrado</div>
            ) : (
              products.map((item) => {
                return (
                  <ServicesCard key={item.id}>
                    <div>
                      <img src={cardImage} alt="cardimage" />

                      <h6>{item.title}</h6>
                      <button>
                        <FaPlus />
                      </button>
                    </div>
                  </ServicesCard>
                );
              })
            )}
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
