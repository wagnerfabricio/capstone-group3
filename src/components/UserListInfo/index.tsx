import { useAdmin } from "../../providers/Admin";
import { useAuth } from "../../providers/Auth";
import { Lista } from "./styles";

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

interface iUser {
  email: string;
  name: string;
  contact: string;
  id: string;
  cpf: number;
  admin?: boolean;
}

interface UserListInfoProps {
  services?: iService[] | undefined;
  users?: iUser[] | undefined;
  admin?: boolean | undefined;
  userServices?: iService[] | undefined;
  userControl?: boolean | undefined;
}

const UserListInfo = ({
  services,
  users,
  admin = false,
  userServices,
  userControl = false,
}: UserListInfoProps) => {
  const { adminPayService, adminDoneService } = useAdmin();
  const { accessToken } = useAuth();

  if (admin && userControl) {
    return (
      <ul>
        {!!services &&
          services.map((element) => {
            const fixDate = new Date(element.date);
            return (
              <Lista key={element.id}>
                <p>
                  {fixDate.getDate() > 9
                    ? fixDate.getDate()
                    : `0${fixDate.getDate()}`}
                  /
                  {fixDate.getMonth() > 9
                    ? fixDate.getMonth() + 1
                    : `0${fixDate.getMonth() + 1}`}{" "}
                </p>
                <p>
                  {!!users &&
                    users
                      .filter((user) => user.id === element.userId)
                      .map((element) => element.name)}
                </p>
                <p>{element.title}</p>
                {element.done ? (
                  <input name="done" type="checkbox" checked />
                ) : (
                  <input
                    name="done"
                    type="checkbox"
                    onClick={() => adminDoneService(element.id, accessToken)}
                  />
                )}

                {element.payed ? (
                  <input name="payed" type="checkbox" checked />
                ) : (
                  <input
                    name="payed"
                    type="checkbox"
                    onClick={() => adminPayService(element.id, accessToken)}
                  />
                )}
              </Lista>
            );
          })}
      </ul>
    );
  }

  if (admin) {
    return (
      <ul>
        {!!services &&
          services.map((element) => {
            const fixDate = new Date(element.date);
            return (
              <Lista key={element.id}>
                <p>
                  {fixDate.getHours() > 9
                    ? fixDate.getHours()
                    : `0${fixDate.getHours()}`}
                  :
                  {fixDate.getMinutes() > 9
                    ? fixDate.getMinutes()
                    : `0${fixDate.getMinutes()}`}
                </p>
                <p>
                  {!!users &&
                    users
                      .filter((user) => user.id === element.userId)
                      .map((element) => element.name)}
                </p>
                <p>{element.title}</p>
                {element.done ? (
                  <input name="done" type="checkbox" checked />
                ) : (
                  <input
                    name="done"
                    type="checkbox"
                    onClick={() => adminDoneService(element.id, accessToken)}
                  />
                )}
                |
                {element.payed ? (
                  <input name="payed" type="checkbox" checked />
                ) : (
                  <input
                    name="payed"
                    type="checkbox"
                    onClick={() => adminPayService(element.id, accessToken)}
                  />
                )}
              </Lista>
            );
          })}
      </ul>
    );
  }

  return (
    <ul>
      {!!userServices &&
        userServices.map((element) => {
          const fixDate = new Date(element.date);
          return (
            <Lista key={element.id}>
              <p>
                {fixDate.getDate() > 9
                  ? fixDate.getDate()
                  : `0${fixDate.getDate()}`}
                /
                {fixDate.getMonth() > 9
                  ? fixDate.getMonth() + 1
                  : `0${fixDate.getMonth() + 1}`}{" "}
                |{" "}
                {fixDate.getHours() > 9
                  ? fixDate.getHours()
                  : `0${fixDate.getHours()}`}
                :
                {fixDate.getMinutes() > 9
                  ? fixDate.getMinutes()
                  : `0${fixDate.getMinutes()}`}
              </p>
              <p>{element.title}</p>
            </Lista>
          );
        })}
    </ul>
  );
};
export default UserListInfo;
