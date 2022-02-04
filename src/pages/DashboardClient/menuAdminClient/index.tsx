import { Dispatch, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button, CircularProgress } from "@mui/material";
import InputMask from "react-input-mask";
import { useAuth } from "../../../providers/Auth";
import { FaTimes } from "react-icons/fa";
import { Container, Form } from "../updateClient/styles";
import { useProducts } from "../../../providers/Products";

interface MenuAdminClientProps {
  setOpenModal: (value: boolean) => void;
}

const MenuAdminClient = ({ setOpenModal }: MenuAdminClientProps) => {
  const [loading, setLoading] = useState(false);
  const { searchProduct } = useProducts();
  const { accessToken } = useAuth();
  const history = useHistory();

  return (
    <Container>
      <Button
        sx={{
          backgroundColor: "#80CBC4",
          color: "white",
          padding: "10px 50px",
          margin: "5px",
        }}
        onClick={() => {
          const searchEmpty = "";
          searchProduct(searchEmpty, accessToken);
          history.push("/anamnese");
        }}
      >
        Anamnese
      </Button>
      <Button
        sx={{
          backgroundColor: "#80CBC4",
          color: "white",
          padding: "10px 50px",
          margin: "5px",
        }}
        onClick={() => {
          const searchEmpty = "";
          searchProduct(searchEmpty, accessToken);
          history.push("/dashboard");
        }}
      >
        Voltar
      </Button>
    </Container>
  );
};

export default MenuAdminClient;
