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

import { FaPlus, FaSearch, FaTimes } from "react-icons/fa";
import cardImage from "../../assets/images/cardImage.svg";
import profileImage from "../../assets/images/profileImage.svg";
import { useUserServices } from "../../providers/Services";
import { useAuth } from "../../providers/Auth";
import { useEffect, useState } from "react";
import { useProducts } from "../../providers/Products";
import { useForm } from "react-hook-form";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { Box, Button, Modal, Typography } from "@mui/material";
import CustomDatePicker from "../../components/CustomDatePicker";

interface SearchData {
  title: string;
}
interface iService {
  id?: number;
  prodId?: number;
  userId: string;
  title: string;
  description: string;
  url: string;
  price: number;
  date: string;
  done: boolean;
  payed: boolean;
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
    const date = newDate + ''
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
  return (
    <>
      <Background>
        <Header>
          <div className="footerDesktop">
            <div>
              <h3>Últimas sessões</h3>
            </div>

            {userServices.map((item) => {
              return (
                <Card key={item.id}>
                  <p>{item.date}</p>
                  <p>{item.title}</p>
                </Card>
              );
            })}
          </div>

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
          <section>
            {userServices.map((item) => {
              return (
                <Card key={item.id}>
                  <p>{item.date}</p>
                  <p>{item.title}</p>
                </Card>
              );
            })}
          </section>

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
            }}
          >
            {actualProd.description}
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <CustomDatePicker handleNewDate={handleNewDate} />
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
              <FaPlus />
              <span>Agendar</span>
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DashboardClient;
