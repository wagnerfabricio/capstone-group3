import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";

import {
  TextField,
  Button,
  CircularProgress,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import { Container, Form } from "./styles";
import { useAdmin } from "../../providers/Admin";
import { useAuth } from "../../providers/Auth";

interface iUser {
  email: string;
  name: string;
  contact: string;
  id: string;
  cpf: number;
  admin?: boolean;
}

interface AnamneseData {
  userId?: string;
  name: string;
  birthday: string;
  ocupation: string;
  contact: string;
  address: string;
  rg: string;
  cpf: string;
  smoker: boolean;
  circulatoryDisorder: boolean;
  practicePhysicalActivity: boolean;
  regularMenstrualCycle: boolean;
  regularBowelFunctioning: boolean;
  heartChanges: boolean;
  hormonalDisorder: boolean;
  hypoHyperArterial: boolean;
  pacemakerCarrier: boolean;
  varicoseVeinsOrInjury: boolean;
}

interface AnamneseProps {
  user: iUser;
}

const anamneseSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  birthday: yup.string().required("Data de nascimento obrigatório"),
  ocupation: yup.string().required("Ocupação obrigatório"),
  contact: yup
    .string()
    .required("Digite seu telefone")
    .test("Min 11 dígitos", "Telefeno inválido", (val) => !val?.includes("_")),
  address: yup.string().required("Endereço obrigatório"),
  rg: yup.string().required("RG obrigatório"),
  cpf: yup
    .string()
    .required("Digite os 11 números do seu CPF")
    .test(
      "Min 11 dígitos",
      "Digite os 11 dígitos do seu CPF",
      (val) => !val?.includes("_")
    ),
  smoker: yup.boolean(),
  circulatoryDisorder: yup.boolean(),
  practicePhysicalActivity: yup.boolean(),
  regularMenstrualCycle: yup.boolean(),
  regularBowelFunctioning: yup.boolean(),
  heartChanges: yup.boolean(),
  hormonalDisorder: yup.boolean(),
  hypoHyperArterial: yup.boolean(),
  pacemakercarrier: yup.boolean(),
  varicoseVeinsOrInjury: yup.boolean(),
});

const Anamnese = () => {
  const [loading, setLoading] = useState(false);

  const { pickUser, anamnesis, adminAddAnamnesis, adminGetAnamnesis } =
    useAdmin();
  const { accessToken } = useAuth();

  const userAnamnesis = anamnesis.filter(
    (element) => element.userId === pickUser.id
  )[anamnesis.filter((element) => element.userId === pickUser.id).length - 1];

  const history = useHistory();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AnamneseData>({ resolver: yupResolver(anamneseSchema) });

  const handleSubmitAnamnese = (data: AnamneseData) => {
    const newData = { ...data, userId: pickUser.id };

    adminAddAnamnesis(newData, pickUser.id, accessToken);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSubmitAnamnese)}>
        <h2>Anamnese</h2>
        <div className="cadastroClient">
          <TextField
            fullWidth
            defaultValue={pickUser.name}
            autoComplete="name"
            label={!!errors.name ? errors.name.message : "Nome"}
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
          />
          <InputMask
            mask="99/99/99"
            defaultValue={userAnamnesis?.birthday}
            {...register("birthday")}
          >
            {(inputProps: any) => {
              return (
                <TextField
                  {...inputProps}
                  error={!!errors.birthday}
                  label={
                    !!errors.birthday
                      ? errors.birthday.message
                      : "Data de Nascimento"
                  }
                  fullWidth
                  variant="outlined"
                  type="tel"
                />
              );
            }}
          </InputMask>

          <TextField
            defaultValue={userAnamnesis?.ocupation}
            fullWidth
            autoComplete="ocupation"
            label={!!errors.ocupation ? errors.ocupation.message : "Ocupação"}
            variant="outlined"
            {...register("ocupation")}
            error={!!errors.ocupation}
          />
          <InputMask
            mask="(99) 99999-9999"
            defaultValue={pickUser.contact}
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
            defaultValue={userAnamnesis?.address}
            fullWidth
            autoComplete="address"
            label={!!errors.address ? errors.address.message : "Endereço"}
            variant="outlined"
            {...register("address")}
            error={!!errors.address}
          />
          <TextField
            defaultValue={userAnamnesis?.rg}
            fullWidth
            autoComplete="rg"
            label={!!errors.rg ? errors.rg.message : "RG"}
            variant="outlined"
            {...register("rg")}
            error={!!errors.rg}
          />

          <InputMask
            mask="999.999.999-99"
            defaultValue={pickUser.cpf}
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
        </div>
        <h2>Avaliação</h2>
        <div className="cadAvaliationClient">
          <FormControlLabel
            value="start"
            label="É fumante?"
            control={
              <Controller
                name="smoker"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.smoker ? userAnamnesis.smoker : false
                    }
                  />
                )}
              />
            }
          />
          <FormControlLabel
            value="start"
            label="Distúrbio circulatório?"
            control={
              <Controller
                name="circulatoryDisorder"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.circulatoryDisorder
                        ? userAnamnesis.circulatoryDisorder
                        : false
                    }
                  />
                )}
              />
            }
          />

          <FormControlLabel
            value="start"
            label="Pratica atividade física?"
            control={
              <Controller
                name="practicePhysicalActivity"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.practicePhysicalActivity
                        ? userAnamnesis.practicePhysicalActivity
                        : false
                    }
                  />
                )}
              />
            }
          />

          <FormControlLabel
            value="start"
            label="Ciclo menstrual regular?"
            control={
              <Controller
                name="regularMenstrualCycle"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.regularMenstrualCycle
                        ? userAnamnesis.regularMenstrualCycle
                        : false
                    }
                  />
                )}
              />
            }
          />

          <FormControlLabel
            value="start"
            label="Funcionamento intestinal Regular?"
            control={
              <Controller
                name="regularBowelFunctioning"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.regularBowelFunctioning
                        ? userAnamnesis.regularBowelFunctioning
                        : false
                    }
                  />
                )}
              />
            }
          />

          <FormControlLabel
            value="start"
            label="Alteração cardíacas?"
            control={
              <Controller
                name="heartChanges"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.heartChanges
                        ? userAnamnesis.heartChanges
                        : false
                    }
                  />
                )}
              />
            }
          />

          <FormControlLabel
            value="start"
            label="Distúrbio hormonal?"
            control={
              <Controller
                name="hormonalDisorder"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.hormonalDisorder
                        ? userAnamnesis.hormonalDisorder
                        : false
                    }
                  />
                )}
              />
            }
          />

          <FormControlLabel
            value="start"
            label="Tem hypo ou hypertensão arterial?"
            control={
              <Controller
                name="hypoHyperArterial"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.hypoHyperArterial
                        ? userAnamnesis.hypoHyperArterial
                        : false
                    }
                  />
                )}
              />
            }
          />

          <FormControlLabel
            value="start"
            label="Portador de marcapasso?"
            control={
              <Controller
                name="pacemakerCarrier"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.pacemakerCarrier
                        ? userAnamnesis.pacemakerCarrier
                        : false
                    }
                  />
                )}
              />
            }
          />

          <FormControlLabel
            value="start"
            label="Varizes ou Lesões?"
            control={
              <Controller
                name="varicoseVeinsOrInjury"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    defaultChecked={
                      !!userAnamnesis?.varicoseVeinsOrInjury
                        ? userAnamnesis.varicoseVeinsOrInjury
                        : false
                    }
                  />
                )}
              />
            }
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          type="submit"
        >
          {loading ? <CircularProgress /> : "Cadastrar"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/dashboardAdm")}
        >
          Voltar
        </Button>
      </Form>
    </Container>
  );
};

export default Anamnese;
