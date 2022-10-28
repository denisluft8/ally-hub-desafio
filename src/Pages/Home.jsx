import { useState } from "react";
import { Container, Input } from "../components";
import { cpfFormat } from "../utils/cpfFormat";
import { phoneFormat } from "../utils/phoneFormat";

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
  );
};
