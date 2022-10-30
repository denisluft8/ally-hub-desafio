import { ButtonStyled } from "./ButtonStyled";

export const Button = ({ label, onClick, type }) => {
  return (
    <ButtonStyled onClick={onClick} type={type}>
      {label}
    </ButtonStyled>
  );
};
