import {
  Background,
  Header,
  Container,
  ServicesCard,
  Input,
  Lista,
} from "./styles";
import { FaPlus, FaTimes } from "react-icons/fa";
import cardImage from "../../assets/images/cardImage.svg";
import { useEffect, useState } from "react";
import { useProducts } from "../../providers/Products";
import { useAdmin } from "../../providers/Admin";
import { useAuth } from "../../providers/Auth";
import UserListInfo from "../../components/UserListInfo";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { useUserServices } from "../../providers/Services";
import { useForm } from "react-hook-form";
import { Box, Button, Modal, Typography } from "@mui/material";
import CustomDatePicker from "../../components/CustomDatePicker";

import { useHistory } from "react-router-dom";

interface SearchData {
  title: string;
}

interface iProduct {
  id?: number;
  prodId?: number;
  userId: string;
  title: string;
  description: string;
  url: string;
  price: number;
  done: boolean;
  payed: boolean;
}

const DashboardAdm = () => {
  const {
    adminGetUsers,
    adminServices,
    adminGetServices,
    adminAddService,
    pickUser,
  } = useAdmin();
  const { products } = useProducts();
  const { accessToken, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const [actualProd, setActualProd] = useState<iProduct>({} as iProduct);
  const { userGetServices, userServices } = useUserServices();
  const { register, handleSubmit } = useForm<SearchData>();
  const { searchProduct } = useProducts();
  const history = useHistory();

  const [newDate, setNewDate] = useState<Date | null>(
    setHours(setMinutes(new Date(), 0), 9)
  );

  const handleNewDate = (novaData: Date | null) => {
    setNewDate(novaData);
  };

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

  const handleOpenModal = (item: iProduct) => {
    setOpen(true);
    setActualProd(item);
  };

  const handleAddService = () => {
    const date = newDate + "";
    const newService = { ...actualProd, date };
    adminAddService(newService, pickUser.id, accessToken);
    setOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSearch = ({ title }: SearchData) => {
    searchProduct(title, accessToken);
  };

  const incomingServices = userServices
    .filter((service) => new Date(service.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const previousServices = userServices
    .filter((service) => new Date(service.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  useEffect(() => {
    adminGetUsers(accessToken);
    adminGetServices(accessToken);
    userGetServices(pickUser.id);
  }, [pickUser.id, userServices]);

  return (
    <>
      <Background>
        <Header>
          <div className="footerDesktop">
            <div className="divHeaderTitle">
              <h3>Menu</h3>
              <Button
                sx={{
                  backgroundColor: "#80CBC4",
                  color: "white",
                  padding: "10px 50px",
                  margin: "5px",
                }}
                onClick={() => history.push("/anamnese")}
              >
                Anamnese
              </Button>
              <Button
                sx={{
                  backgroundColor: "#80CBC4",
                  color: "white",
                  padding: "10px 46px",
                  margin: "5px",
                }}
                onClick={() => history.push("/dashboard")}
              >
                Dashboard
              </Button>
            </div>
          </div>

          <section>
            <p>
              Hoje, {todayDate.getDate()} de {formatDate(todayDate)}
            </p>
            <h2>{pickUser.name}!</h2>
            <span>
              Serviços: {incomingServices.length} compromisso(s) marcados.{" "}
            </span>
          </section>
          <div onClick={() => history.push("/dashboard")}>
            <img src={cardImage} alt="headerImage" />
          </div>
        </Header>

        <Container>
          <div className="content1">
            <h3>Dados do usuário</h3>
            <ul>
              <Lista>
                <p>Nome: {pickUser.name} </p>
              </Lista>
              <Lista>
                <p>Número: {pickUser.contact} </p>
              </Lista>
              <Lista>
                <p>E-mail: {pickUser.email} </p>
              </Lista>
              <Lista>
                <p>CPF: {pickUser.cpf} </p>
              </Lista>
              <Lista>
                <p>ID: {pickUser.id} </p>
              </Lista>
            </ul>
          </div>
          <div className="content2">
            <h3>Próximas Sessões</h3>
            <div className="listHeaders1">
              <h4>Data </h4>
              <h4>Procedimento </h4>
              <h4>Realizado | Pago </h4>
            </div>
            <UserListInfo
              services={incomingServices}
              admin={true}
              userControl={true}
            />
          </div>
        </Container>

        <Container className="set">
          <div className="content3">
            <h3>Histórico de Sessões</h3>
            <div className="listHeaders2">
              <h4>Data </h4>
              <h4>Procedimento </h4>
              <h4>Realizado</h4>
              <h4>Pago</h4>
            </div>
            <UserListInfo
              services={previousServices}
              admin={true}
              userControl={true}
            />
          </div>
          <div className="content4">
            <form onSubmit={handleSubmit(handleSearch)}>
              <Input
                placeholder="O que você gostaria de fazer hoje?"
                {...register("title")}
              />
              <button type="submit"></button>
            </form>

            <ul className="Services">
              {!products.length ? (
                <div>Não encontrado</div>
              ) : (
                products.map((item) => {
                  return (
                    <ServicesCard key={item.id}>
                      <div>
                        <img src={item.url} alt="cardimage" />

                        <h6>{item.title}</h6>
                        <button onClick={() => handleOpenModal(item)}>
                          <FaPlus />
                        </button>
                      </div>
                    </ServicesCard>
                  );
                })
              )}
            </ul>
          </div>
        </Container>
      </Background>
      <Modal open={open}>
        <Box sx={style}>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              backgroundColor: "white",
              color: "red",
              marginLeft: "90%",
            }}
          >
            <FaTimes />
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {actualProd.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: "13px",
              color: "#706f74",
              marginBottom: "20px",
            }}
          >
            {actualProd.description}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Escolha uma data e horário
          </Typography>
          <CustomDatePicker handleNewDate={handleNewDate} />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              sx={{
                heigth: "20px",
                width: "150px",
                backgroundColor: "#42918d",
                mt: 2,
                fontSize: "13px",
                color: "white",
                "&:hover": {
                  backgroundColor: "#367673",
                },
              }}
              onClick={() => handleAddService()}
            >
              <FaPlus /> Agendar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DashboardAdm;
