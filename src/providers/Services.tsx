import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface ServicesProviderProps {
  children: ReactNode;
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

interface ServicesData {
  userServices: iService[];
  userGetServices: (userId: string) => Promise<void>;
  addService: (
    newService: iService,
    userId: string,
    accessToken: string
  ) => Promise<void>;
  editService: (editedService: iService, accessToken: string) => Promise<void>;
  isServicesLoading: boolean;
}

const ServicesContext = createContext<ServicesData>({} as ServicesData);

export const ServicesProvider = ({ children }: ServicesProviderProps) => {
  const [userServices, setUserServices] = useState<iService[]>([]);
  const [isServicesLoading, setIsServicesLoading] = useState(true);

  const userGetServices = useCallback(async (userId: string) => {
    setIsServicesLoading(true);
    api
      .get(`/users/${userId}?_embed=services`)
      .then((res) => {
        setUserServices(res.data.services);
        setIsServicesLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsServicesLoading(false);
      });
  }, []);

  const addService = useCallback(
    //newService devirá vir com o id do pruduto alterado de "id" para "prodId" se não, o server não atribuirá um novo id para o serviço...
    async (newService: iService, userId: string, accessToken: string) => {
      newService.prodId = newService.id
      delete newService.id
      
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
          setUserServices([...userServices, res.data]);
          toast.success('Serviço adicionado com sucesso!')
        })
        .catch((err) => {
          toast.error("Ocorreu algum erro ao adicionar o serviço");
          console.log(err);
        });
    },
    [userServices]
  );

  const editService = useCallback(
    async (editedService: iService, accessToken: string) => {
      await api
        .patch(`/products/${editedService.id}`, editedService, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((resp) => {
          const filteredServices = userServices.filter(
            (service) => service.id !== editedService.id
          );
          setUserServices([...filteredServices, editedService]);
        })
        .catch((err) => {
          toast.error("Algo saiu errado ao alterar o serviço");
          console.log(err);
        });
    },
    [userServices]
  );

  return (
    <ServicesContext.Provider
      value={{
        userServices,
        isServicesLoading,
        userGetServices,
        addService,
        editService,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useUserServices = () => useContext(ServicesContext);
