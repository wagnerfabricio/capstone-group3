import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface AdminProviderProps {
  children: ReactNode;
}

interface iUser {
  email: string;
  id: string;
  name: string;
  cpf: number;
  admin: boolean;
}

interface iService {
  id?: number;
  prodId: number;
  userId: string;
  title: string;
  description: string;
  url: string;
  price: number;
  date: string;
  done: boolean;
  payed: boolean;
}

interface AdminContextData {
  users: iUser[];
  adminLoadingUsers: boolean;
  adminGetUsers: (accessToken: string) => Promise<void>;

  adminServices: iService[];
  adminLoadingServices: boolean;
  adminGetServices: (accessToken: string) => Promise<void>;
  adminAddService: (newService: iService, userId: string, accessToken: string) => Promise<void>
  adminEditService: (editedService: iService, accessToken: string) => Promise<void>;
  adminPayService: (serviceId: number, accessToken: string) => Promise<void>;
  adminDoneService: (serviceId: number, accessToken: string) => Promise<void>;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const [users, setUsers] = useState<iUser[]>([]);
  const [adminLoadingUsers, setAdminLoadingUsers] = useState(true);
  const [adminServices, setAdminServices] = useState<iService[]>([]);
  const [adminLoadingServices, setAdminLoadingServices] = useState(true);

  const adminGetUsers = useCallback(async (accessToken: string) => {
    setAdminLoadingUsers(true);
    api
      .get("/users", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
        setAdminLoadingUsers(false);
      })
      .catch((err) => {
        toast.error("Algo deu errado ao acessar a lista de usuários");
        console.log(err);
        setAdminLoadingUsers(false);
      });
  }, []);

  const adminGetServices = useCallback(async (accessToken: string) => {
    setAdminLoadingServices(true);
    api
      .get("/services", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setAdminServices(res.data);
        setAdminLoadingServices(false);
      })
      .catch((err) => {
        toast.error("Erro ao acessar a lista de serviços");
        console.log(err);
        setAdminLoadingServices(false);
      });
  }, []);

  const adminAddService = useCallback(
    //newService devirá vir com o id do pruduto alterado de "id" para "prodId" se não, o server não atribuirá um novo id automaticamento para o serviço... userId deverá ser o id do usuário a ter o serviço cadastrado.
    async (newService: iService, userId: string, accessToken: string) => {
      await api
        .post(
          `/services`,
          { ...newService, userId },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          setAdminServices([...adminServices, res.data]);
        })
        .catch((err) => {
          toast.error("Ocorreu algum erro ao editar o serviço");
          console.log(err);
        });
    },
    [adminServices]
  );

  const adminEditService = useCallback(
    async (editedService: iService, accessToken: string) => {
      setAdminLoadingServices(true);
      await api
        .patch(`/services/${editedService.id}`, editedService, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((resp) => {
          setAdminLoadingServices(false);
          const filteredServices = adminServices.filter(
            (service) => service.id !== editedService.id
          );
          setAdminServices([...filteredServices, editedService]);
        })
        .catch((err) => {
          toast.error("Algo saiu errado ao alterar o serviço");
          console.log(err);
          setAdminLoadingServices(false);
        });
    },
    [adminServices]
  );

  const adminPayService = useCallback(
    async (serviceId: number, accessToken: string) => {
      setAdminLoadingServices(true);
      await api
        .patch(
          `/services/${serviceId}`,
          { payed: true },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((resp) => {
          setAdminLoadingServices(false);
          const filteredServices = adminServices.filter(
            (service) => service.id !== serviceId
          );
          const service = adminServices.find((serv) => serv.id === serviceId);

          if (service) {
            service.payed = true;
            setAdminServices([...filteredServices, service]);
          }
        })
        .catch((err) => {
          toast.error("Algo saiu errado ao pagar o serviço");
          console.log(err);
          setAdminLoadingServices(false);
        });
    },
    [adminServices]
  );

  const adminDoneService = useCallback(
    async (serviceId: number, accessToken: string) => {
      setAdminLoadingServices(true);
      await api
        .patch(
          `/services/${serviceId}`,
          { payed: true },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((resp) => {
          setAdminLoadingServices(false);
          const filteredServices = adminServices.filter(
            (service) => service.id !== serviceId
          );
          const service = adminServices.find((serv) => serv.id === serviceId);

          if (service) {
            service.done = true;
            setAdminServices([...filteredServices, service]);
          }
        })
        .catch((err) => {
          toast.error("Algo saiu errado ao marcar o serviço como feito");
          console.log(err);
          setAdminLoadingServices(false);
        });
    },
    [adminServices]
  );

  return (
    <AdminContext.Provider
      value={{
        users,
        adminLoadingUsers,
        adminGetUsers,
        adminServices,
        adminLoadingServices,
        adminAddService,
        adminGetServices,
        adminEditService,
        adminPayService,
        adminDoneService,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
