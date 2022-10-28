import { useState } from "react";
import { Container, DropDown, Input } from "../components";
import { cpfFormat } from "../utils/cpfFormat";
import { phoneFormat } from "../utils/phoneFormat";
import { HomeContainer } from "./HomeStyled";

export const Home = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [cpfValue, setCpfValue] = useState("");

  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = phoneFormat(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };
  const handleCpfInput = (e) => {
    const formattedCpf = cpfFormat(e.target.value);
    setCpfValue(formattedCpf);
  };

  return (
    <HomeContainer>
      <Container title={"Dados Pessoais"}>
        <Input type={"text"} title={"Name"} />
        <Input type={"email"} title={"Email"} />
        <Input
          onChange={(e) => handlePhoneInput(e)}
          value={phoneValue}
          type={"tel"}
          title={"Telefone"}
        />
        <Input
          onChange={(e) => handleCpfInput(e)}
          value={cpfValue}
          type={"text"}
          title={"CPF"}
        />
      </Container>
      <Container title={"Destinos de Interesse"}>
        <DropDown itemsOption={"country"} placeholder={"Selecione os Países"} />
        <DropDown itemsOption={"city"} placeholder={"Selecione as Cidades"} />
      </Container>
    </HomeContainer>
  );
};
