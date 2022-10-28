import { useState, useEffect } from "react";
import api from "../../Services/api";
import Select from "react-select";
import { DropStyled } from "./DropDownStyled";

export const DropDown = ({ itemsOption, placeholder }) => {
  const [options, setOptions] = useState([]);

  const loadOptions = async (op) => {
    await api.get(`${op}`).then(({ data }) => {
      setOptions(
        data.map((item) => {
          return {
            key: item.code,
            label: item.name_ptbr,
            value: item.name_ptbr,
          };
        })
      );
    });
  };

  useEffect(() => {
    loadOptions(itemsOption);
  }, []);

  useEffect(() => {
    console.log(options);
  }, [options]);

  return (
    <>
      <DropStyled>
        <Select
          isMulti
          options={options}
          placeholder={placeholder}
          closeMenuOnSelect={false}
        />
      </DropStyled>
    </>
  );
};
