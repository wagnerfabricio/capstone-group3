import { FiUser } from "react-icons/fi";
import { useAdmin } from "../../providers/Admin";
import {
  HeaderContainer,
  PlannerContainer,
  Content,
  Lista,
  Pesquisa,
  SearchContainer,
  Container,
  ListaPesquisa,
} from "./styles";

const Dashboard = () => {
  const { users } = useAdmin();
  console.log(users);

  const user = [
    {
      horário: "12:30",
      name: "Foster",
      service: "Quick Massagem",
      Realizado: true,
    },
    {
      horário: "13:00",
      name: "Vagner",
      service: "Quick Massagem",
      Realizado: false,
    },
    {
      horário: "13:30",
      name: "Rego",
      service: "Quick Massagem",
      Realizado: false,
    },
    {
      horário: "14:00",
      name: "Bruno",
      service: "Quick Massagem",
      realizado: true,
    },
  ];

  return (
    <Container>
      <HeaderContainer>
        <h2> Header </h2>
        <div>
          <FiUser size="40" />
        </div>
      </HeaderContainer>
      <PlannerContainer>
        <Content>
          <h3>Planejamento do dia</h3>
          <h5>Hora | Interagente | Procedimento | Realizado</h5>
          <ul>
            {user.map((element) => (
              <Lista>
                <p>{element.horário} | </p>
                <p>{element.name} | </p>
                <p>{element.service} | </p>
                <input name="isGoing" type="checkbox" />
              </Lista>
            ))}
          </ul>
        </Content>
        <SearchContainer>
          <Pesquisa placeholder="Pesquisa de cliente..."></Pesquisa>
          <ul>
            <h4>Lista de Pacientes</h4>
            {user.map((element) => (
              <ListaPesquisa>
                <p>{element.name}</p>
              </ListaPesquisa>
            ))}
          </ul>
        </SearchContainer>
      </PlannerContainer>
    </Container>
  );
};

export default Dashboard;
