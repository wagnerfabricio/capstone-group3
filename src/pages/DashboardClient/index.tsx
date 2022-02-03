import {
  Background,
  Header,
  Container,
  Footer,
  ServicesCard,
  Input,
  AsideRight,
  NotFoundService,
} from "./styles";

import { FaPlus, FaSearch, FaTimes } from "react-icons/fa";
import { useUserServices } from "../../providers/Services";
import { useAuth } from "../../providers/Auth";
import { useEffect, useState } from "react";
import { useProducts } from "../../providers/Products";
import { useForm } from "react-hook-form";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { Box, Button, Modal, Typography } from "@mui/material";
import CustomDatePicker from "../../components/CustomDatePicker";
import UserListInfo from "../../components/UserListInfo";
import notFoundService from "../../assets/images/notFoundService.gif";
import MenuProfile from "./MenuProfile";

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

const DashboardClient = () => {
  const { userGetServices, userServices, addService } = useUserServices();
  const { user } = useAuth();
  const { getProducts, products, searchProduct } = useProducts();
  const { accessToken } = useAuth();
  const [open, setOpen] = useState(false);
  const [actualProd, setActualProd] = useState<iProduct>({} as iProduct);

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

  useEffect(() => {
    getProducts();
    userGetServices(user.id);
  }, []);

  const handleSearch = ({ title }: SearchData) => {
    searchProduct(title, accessToken);
  };

  const { register, handleSubmit } = useForm<SearchData>();

  const handleOpenModal = (item: iProduct) => {
    setOpen(true);
    setActualProd(item);
  };

  const handleAddService = () => {
    const date = newDate + "";
    const newService = { ...actualProd, date };
    addService(newService, user.id, accessToken);
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

  const incomingServices = userServices
    .filter((service) => new Date(service.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const previousServices = userServices
    .filter((service) => new Date(service.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Background>
        <Header>
          <div className="footerDesktop">
            <div className="divHeaderTitle">
              <h3>Últimas sessões</h3>
            </div>
            <UserListInfo userServices={previousServices} />
          </div>

          <section>
            <p>
              <b>
                Hoje, {todayDate.getDate()} de {formatDate(todayDate)}
              </b>
            </p>
            <h2>Bom dia, {user.name}!</h2>
            <span>
              Você tem {incomingServices.length} compromisso(s) marcados.{" "}
            </span>
          </section>
          <div className="divMenu">
            <MenuProfile />
          </div>
        </Header>
        <Container>
          <h2>Agenda de tratamentos</h2>
          {!incomingServices.length ? (
            <>
              <NotFoundService>
                <section>
                  <div>
                    <h3>Você ainda não tem serviços agendados</h3>
                    <p>Procure mais serviços abaixo.</p>
                  </div>
                  <div>
                    <img src={notFoundService} alt="" />
                  </div>
                </section>
              </NotFoundService>
            </>
          ) : (
            <>
              <section className="servicesList">
                <UserListInfo userServices={incomingServices} />
              </section>
            </>
          )}

          <h2>Mais serviços</h2>
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
        </Container>

        <Footer>
          <div>
            <h3>Últimas sessões</h3>
            <UserListInfo userServices={previousServices} />
          </div>
        </Footer>

        <AsideRight></AsideRight>
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
              startIcon={
                <FaPlus
                  style={{
                    fontSize: "small",
                  }}
                />
              }
            >
              Agendar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DashboardClient;
