import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../providers/Auth";
import { Link, useHistory } from "react-router-dom";

import AsideImage from "../../assets/images/loginImage.jpeg";

import { TextField, Button, CircularProgress } from "@mui/material";
import InputMask from "react-input-mask";

import {
  Container,
  Content,
  Form,
  FormContainer,
  ImageContainer,
} from "./styles";

interface SignInData {
  name: string;
  cpf: string;
  contact: string;
  email: string;
  password: string;
  confirm_password?: string;
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
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas diferentes"),
});

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({ resolver: yupResolver(signInSchema) });

  const handleSignIn = (data: SignInData) => {
    setLoading(true);

    delete data.confirm_password;

    signUp(data)
      .then((_) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <Content>
        <FormContainer>
          <Form onSubmit={handleSubmit(handleSignIn)}>
            <h2>Cadastro</h2>
            <TextField
              fullWidth
              autoComplete="name"
              label={!!errors.name ? errors.name.message : "Nome Completo"}
              variant="outlined"
              {...register("name")}
              error={!!errors.name}
            />

            <InputMask
              mask="999.999.999-99"
              defaultValue=""
              {...register("cpf")}
            >
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
                    label={
                      !!errors.contact ? errors.contact.message : "Celular"
                    }
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
            <TextField
              fullWidth
              label={
                !!errors.confirm_password
                  ? errors.confirm_password.message
                  : "Confirmar senha"
              }
              variant="outlined"
              type="password"
              {...register("confirm_password")}
              error={!!errors.confirm_password}
            />

            <Button
              variant="contained"
              color="primary"
              disabled={loading}
              type="submit"
            >
              {loading ? <CircularProgress /> : "Cadastrar"}
            </Button>
            <p>
              Já possui um cadastro? <Link to="/login">Clique aqui</Link> para
              fazer o seu login!
            </p>
          </Form>
        </FormContainer>
        <ImageContainer>
          <img src={AsideImage} alt="Massagem" />
        </ImageContainer>
      </Content>
    </Container>
  );
};

export default Signup;
