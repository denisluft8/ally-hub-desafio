import { useState } from "react";
import { Button, Container, DropDown, Input } from "../components";
import { cpfFormat } from "../utils/cpfFormat";
import { phoneFormat } from "../utils/phoneFormat";
import { HomeContainer, SpanStyled } from "./HomeStyled";

export const Home = () => {
  const [cpfValue, setCpfValue] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    countries: [""],
    cities: [""],
  });
  const [error, setError] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");

  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = phoneFormat(e.target.value);
    setForm({ ...form, phone: e.target.value });
    setPhoneValue(formattedPhoneNumber);
  };
  const handleCpfInput = (e) => {
    const formattedCpf = cpfFormat(e.target.value);
    setForm({ ...form, cpf: e.target.value });

    setCpfValue(formattedCpf);
  };

  const handleChangeCountry = (selectedOption) => {
    setForm({ ...form, countries: selectedOption });
  };
  const handleChangeCity = (selectedOption) => {
    setForm({ ...form, cities: selectedOption });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.cities.length === 0 || form.countries.length === 0) {
      setError(true);
    } else {
      setError(false);
      console.log(form);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <HomeContainer>
          <Container title={"Dados Pessoais"}>
            <Input
              type={"text"}
              title={"Name"}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              type={"email"}
              title={"Email"}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
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
            <DropDown
              itemsOption={"country"}
              onChange={handleChangeCountry}
              placeholder={"Selecione os Países"}
            />
            <DropDown
              itemsOption={"city"}
              onChange={handleChangeCity}
              placeholder={"Selecione as Cidades"}
            />
            {error === true ? (
              <>
                <SpanStyled>
                  Selecione pelo menos uma cidade e um país
                </SpanStyled>
              </>
            ) : (
              <></>
            )}
          </Container>
        </HomeContainer>
        <Button label={"Enviar"} type={"submit"} />
      </form>
    </>
  );
};
