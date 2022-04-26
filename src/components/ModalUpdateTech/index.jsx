import { useForm } from "react-hook-form";
import Button from "../Button";
import {
  ButtonsContainer,
  Container,
  FakeInput,
  FormContainer,
  ModalHeader,
  Overlay,
  SelectorContainer,
} from "./styles";
import api from "../../services/api";

const ModalUpdateTech = ({
  open,
  close,
  tech_id,
  title,
  userToken,
  userInfo,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitFunction = async (data) => {
    await api.put(`/users/techs/${tech_id}`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    reset();
    userInfo();
    close();
  };

  const delTech = async () => {
    await api.delete(`/users/techs/${tech_id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    userInfo();
    close();
  };

  if (!open) return null;

  return (
    <>
      <Overlay />
      <Container>
        <ModalHeader>
          <h1>Tecnologia Detalhes</h1>
          <button onClick={() => close()}>X</button>
        </ModalHeader>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <label>Nome do projeto</label>
            <FakeInput>
              <h2>{title}</h2>
            </FakeInput>
            <SelectorContainer>
              <label>Selecionar staus</label>
              <select name="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </SelectorContainer>
            <ButtonsContainer>
              <Button type="submit">Atualizar</Button>
              <Button
                colorSchema="--grey1"
                colorSchemaHover="--grey2"
                onClick={delTech}
              >
                Excluir
              </Button>
            </ButtonsContainer>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default ModalUpdateTech;