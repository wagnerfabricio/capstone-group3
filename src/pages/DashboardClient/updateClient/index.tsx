import { Dispatch, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button, CircularProgress } from "@mui/material";
import InputMask from "react-input-mask";
import { useAuth } from "../../../providers/Auth";
import { Container, Form } from "./styles";
import { FaTimes } from "react-icons/fa";

interface SignInData {
  name: string;
  cpf: string;
  contact: string;
  email: string;
  password: string;
  confirm_password?: string;
  accessToken: string;
  userId: string;
}

const signInSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .test(
      "Minimo nome e sobrenome",
      "Digite seu nome completo",
      (name) => !!name?.includes(" ")
    ),
  cpf: yup
    .string()
    .required("Digite os 11 números do seu CPF")
    .test(
      "Min 11 dígitos",
      "Digite os 11 dígitos do seu CPF",
      (val) => !val?.includes("_")
    ),
  contact: yup
    .string()
    .required("Digite seu telefone")
    .test("Min 11 dígitos", "Telefeno inválido", (val) => !val?.includes("_")),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface UpdateClientProps {
  setOpenModal: (value: boolean) => void;
}

const UpdateClient = ({ setOpenModal }: UpdateClientProps) => {
  const [loading, setLoading] = useState(false);
  const { signUp, updateUser, user, accessToken } = useAuth();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({ resolver: yupResolver(signInSchema) });

  const handleSignIn = (data: SignInData) => {
    delete data.confirm_password;
    updateUser(data, accessToken, user.id);
    setOpenModal(false)
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <div className="headerModal">
          <h2>Atualizar Informações</h2>
          <Button
            className="closeButton"
            onClick={() => setOpenModal(false)}
            sx={{
              backgroundColor: "white",
              color: "red",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            <FaTimes />
          </Button>
        </div>

        <TextField
          fullWidth
          autoComplete="name"
          label={!!errors.name ? errors.name.message : "Nome Completo"}
          variant="outlined"
          {...register("name")}
          error={!!errors.name}
        />

        <InputMask mask="999.999.999-99" defaultValue="" {...register("cpf")}>
          {(inputProps: any, ref: any) => {
            return (
              <TextField
                {...inputProps}
                error={!!errors.cpf}
                label={!!errors.cpf ? errors.cpf.message : "CPF"}
                fullWidth
                variant="outlined"
                type="tel"
                inputRef={ref}
              />
            );
          }}
        </InputMask>

        <InputMask
          mask="(99) 99999-9999"
          defaultValue=""
          {...register("contact")}
        >
          {(inputProps: any) => {
            return (
              <TextField
                {...inputProps}
                error={!!errors.contact}
                label={!!errors.contact ? errors.contact.message : "Celular"}
                fullWidth
                variant="outlined"
                type="tel"
              />
            );
          }}
        </InputMask>

        <TextField
          fullWidth
          autoComplete="email"
          label={!!errors.email ? errors.email.message : "Email"}
          variant="outlined"
          {...register("email")}
          error={!!errors.email}
        />
        <TextField
          fullWidth
          label={!!errors.password ? errors.password.message : "Senha"}
          variant="outlined"
          type="password"
          {...register("password")}
          error={!!errors.password}
        />

        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          type="submit"
        >
          {loading ? <CircularProgress /> : "Atualizar"}
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateClient;
