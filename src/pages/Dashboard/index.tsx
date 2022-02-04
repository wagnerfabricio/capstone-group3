import { useEffect, useState } from "react";
import { useAdmin } from "../../providers/Admin";
import { useAuth } from "../../providers/Auth";
import profileImage from "../../assets/images/profileImage.svg";
import formatDate from "../../utils/formatDate";
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
  const {
    users,
    adminServices,
    adminGetServices,
    adminGetUsers,
    pickNewUser,
    adminGetAnamnesis,
    pickUser,
  } = useAdmin();

  const { user } = useAuth();

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

  const incomingServices = adminServices
    .filter(
      (service) => new Date(service.date).getMonth() === todayDate.getMonth()
    )
    .filter(
      (service) => new Date(service.date).getDate() === todayDate.getDate()
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

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
            <h2>Bom dia, {user.name}</h2>
          </section>
          <div>
            <img src={profileImage} alt="headerImage" />
          </div>
        </Aside>
        <Content>
          <h3>Planejamento do dia</h3>
          <div className="listHeaders">
            <h4>Hora</h4>
            <h4>Interagente</h4>
            <h4>Procedimento</h4>

            <h4>Realizado | Pago</h4>
          </div>
          <UserListInfo
            services={incomingServices}
            users={users}
            admin={true}
          />
        </Content>
        <SearchContainer>
          <Pesquisa
            placeholder="Pesquisa de cliente..."
            onChange={(e) => searchUser(e.target.value)}
          />
          <h4>Lista de Pacientes</h4>
          <ul>
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
