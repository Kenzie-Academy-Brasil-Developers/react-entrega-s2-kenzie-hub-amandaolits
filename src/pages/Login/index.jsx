import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { Container, ContainerHeader, Content } from "./styles";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo de 6 dígitos!"),
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

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("@Kenziehub:user", JSON.stringify(user));
        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("E-mail ou senha inválidos!"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <ContainerHeader>
        <h2>Kenzie Hub</h2>
      </ContainerHeader>
      <Content>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
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
          <Button type="submit">Login</Button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <Button
          colorSchema={"--grey1"}
          colorSchemaHover={"--grey2"}
          onClick={() => hadleNavigation("/signup")}
        >
          Cadastre-se
        </Button>
      </Content>
    </Container>
  );
};

export default Login;