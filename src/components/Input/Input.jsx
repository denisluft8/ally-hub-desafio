import { DivStyled, InputStyled, LabelStyled } from "./InputStyled";

export const Input = ({ type, title, onChange, value, isRequired}) => {
  return (
    <DivStyled>
      <LabelStyled htmlFor={title}>{title}</LabelStyled>
      <InputStyled type={type} onChange={onChange} value={value} required/>
    </DivStyled>
  );
};
