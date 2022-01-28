import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../providers/Auth";
import { useHistory } from "react-router-dom";

import AsideImage from "../../assets/images/loginImage.jpeg";

import { TextField, Button, CircularProgress } from "@mui/material";

import {
  Container,
  Content,
  Form,
  FormContainer,
  ImageContainer,
} from "./styles";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({ resolver: yupResolver(signInSchema) });

  const handleSignIn = (data: SignInData) => {
    setLoading(true);
    signIn(data)
      .then((_) => {
        toast.success("Login efetuado com sucesso!");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
        setLoading(false);
      });
  };

  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={AsideImage} alt="Massagem" />
        </ImageContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit(handleSignIn)}>
            <h2>Login</h2>
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
              autoComplete="password"
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
              {loading ? <CircularProgress /> : "Logar"}
            </Button>
            <p>
              Crie uma conta, contrate hoje mesmo um dos nossos serviços e
              <strong> mude a sua vida</strong>!
            </p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push("/signup")}
            >
              Cadastrar
            </Button>
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Login;
