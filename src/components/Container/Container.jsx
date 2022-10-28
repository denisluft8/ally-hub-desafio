import { DivStyled } from "./ContainerStyled";

export const Container = ({ title, children }) => {
  return (
    <DivStyled>
      <h1>{title}</h1>
      {children}
    </DivStyled>
  );
};
