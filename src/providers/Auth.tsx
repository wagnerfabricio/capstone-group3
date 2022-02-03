import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  name: string;
  contact: string;
  id: string;
  cpf: number;
  admin?: boolean;
}

interface iAuth {
  accessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface iSignUpData {
  email: string;
  password: string;
  name: string;
  contact: string;
  cpf: string;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (signUpData: iSignUpData) => Promise<void>;
  signOut: () => void;
  updateUser: (
    signUpdata: iSignUpData,
    accessToken: string,
    userId: string
  ) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<iAuth>(() => {
    const accessToken = localStorage.getItem("@massoterapia:accessToken");
    const user = localStorage.getItem("@massoterapia:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as iAuth;
  });

  const history = useHistory();

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/signin", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@massoterapia:accessToken", accessToken);
    localStorage.setItem("@massoterapia:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const signUp = useCallback(async (signUpdata: iSignUpData) => {
    await api
      .post("/signup", signUpdata)
      .then((_) => {
        toast.success("Cadastro realizado com sucesso! faça login");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Email já cadastrado!");
        console.log(err);
      });
  }, []);

  const updateUser = useCallback(
    async (signUpdata: iSignUpData, accessToken: string, userId: string) => {
      await api
        .patch(`/users/${userId}`, signUpdata, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          toast.success("Informações editadas com sucesso!");

          localStorage.setItem("@massoterapia:accessToken", accessToken);
          localStorage.setItem(
            "@massoterapia:user",
            JSON.stringify(response.data)
          );

          setData({ accessToken, user: response.data });
        })
        .catch((err) => {
          toast.error("Tente novamente!");
          console.log(err);
        });
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@massoterapia:accessToken");
    localStorage.removeItem("@massoterapia:user");

    setData({} as iAuth);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        accessToken: data.accessToken,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
