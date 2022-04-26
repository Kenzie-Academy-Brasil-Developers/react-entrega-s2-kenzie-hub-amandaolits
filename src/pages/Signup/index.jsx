import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import {
  Container,
  ContainerHeader,
  Content,
  SelectorContainer,
} from "./styles";
import { toast } from "react-toastify";

const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos!")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere!")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const hadleNavigation = (path) => {
    return history.push(path);
  };

  const onSubmitFunction = ({ name, email, password, course_module }) => {
    const user = {
      name,
      email,
      password,
      course_module,
      bio: "bio",
      contact: "contact",
    };

    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Ops! Algo deu errado!"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <ContainerHeader>
        <h2>Kenzie Hub</h2>
        <Button
          colorSchema="--grey2"
          colorSchemaHover="--grey1"
          onClick={() => hadleNavigation("/")}
        >
          Voltar
        </Button>
      </ContainerHeader>
      <Content>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis! Vamos nessa?!</span>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            label="E-mail"
            type="text"
            placeholder="Digite aqui seu e-mail"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Confirme aqui sua senha"
            register={register}
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          />
          <SelectorContainer>
            <label>Selecionar módulo</label>
            <select
              type="text"
              placeholder="Módulo"
              {...register("course_module")}
            >
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
              <option value="Quarto Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto Módulo">Sexto Módulo</option>
            </select>
          </SelectorContainer>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Signup;