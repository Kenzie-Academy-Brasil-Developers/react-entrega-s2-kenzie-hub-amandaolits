import { Container } from "./styles";

const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span>({error})</span>}
      </div>
      <input {...register(name)} {...rest} />
    </Container>
  );
};

export default Input;