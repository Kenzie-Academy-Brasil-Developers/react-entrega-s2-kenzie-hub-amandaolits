import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import {
  Container,
  FormContainer,
  ModalHeader,
  Overlay,
  SelectorContainer,
} from "./styles";
import api from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalNewTech = ({ open, close, userToken, userInfo }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    await api.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    reset();
    userInfo();
  };

  if (!open) return null;

  return (
    <>
      <Overlay />
      <Container>
        <ModalHeader>
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={() => close()}>X</button>
        </ModalHeader>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              label="Nome"
              type="text"
              placeholder="Digite aqui a tecnologia"
              register={register}
              name="title"
              error={errors.title?.message}
            />
            <SelectorContainer>
              <label>Selecionar staus</label>
              <select name="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </SelectorContainer>
            <Button type="submit">Cadastrar Tecnologia</Button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default ModalNewTech;