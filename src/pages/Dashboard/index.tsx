import { useEffect, useState } from "react";
import { FiUser, FiCalendar } from "react-icons/fi";
import { useAdmin } from "../../providers/Admin";
import { useAuth } from "../../providers/Auth";
import profileImage from "../../assets/images/profileImage.svg";
import {
  PlannerContainer,
  Content,
  Pesquisa,
  SearchContainer,
  Container,
  ListaPesquisa,
  Aside,
} from "./styles";
import UserListInfo from "../../components/UserListInfo";
import { useHistory } from "react-router-dom";

interface iUser {
  email: string;
  name: string;
  contact: string;
  id: string;
  cpf: number;
  admin?: boolean;
}

const Dashboard = () => {
  const { users, adminServices, adminGetServices, adminGetUsers, pickNewUser } =
    useAdmin();

  const [searchedUser, setSearchedUser] = useState<iUser[]>([]);

  const history = useHistory();

  const searchUser = (name: string) => {
    const newUsers = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    setSearchedUser(newUsers);
  };

  const handleClick = (user: iUser) => {
    pickNewUser(user);
    history.push("/dashboardAdm");
  };

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
    adminGetServices(accessToken);
    adminGetUsers(accessToken);
  }, []);

  useEffect(() => {
    setSearchedUser(users);
  }, [users]);

  return (
    <Container>
      <PlannerContainer>
        <Aside>
          <div className="footerDesktop"></div>
          <section>
            <p>
              <b>
                Hoje, {todayDate.getDate()} de {formatDate(todayDate)}
              </b>
            </p>
            <h2>Bom dia, Kenzinho!</h2>
          </section>
          <div>
            <img src={profileImage} alt="headerImage" />
          </div>
        </Aside>
        <Content>
          <h3>Planejamento do dia</h3>
          <h5>Hora | Interagente | Procedimento | Realizado</h5>
          <UserListInfo services={adminServices} users={users} admin={true} />
        </Content>
        <SearchContainer>
          <Pesquisa
            placeholder="Pesquisa de cliente..."
            onChange={(e) => searchUser(e.target.value)}
          />
          <ul>
            <h4>Lista de Pacientes</h4>
            {searchedUser.map((element) => (
              <ListaPesquisa key={element.id}>
                <button onClick={() => handleClick(element)}>
                  <p>{element.name}</p>
                </button>
              </ListaPesquisa>
            ))}
          </ul>
        </SearchContainer>
      </PlannerContainer>
    </Container>
  );
};

export default Dashboard;
