import { Container } from "./styles";

const Button = ({
  children,
  colorSchema = "--primary",
  colorSchemaHover = "--primary-focus",
  ...rest
}) => {
  return (
    <Container
      colorSchema={colorSchema}
      colorSchemaHover={colorSchemaHover}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;