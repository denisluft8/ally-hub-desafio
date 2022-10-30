import { useState, useEffect } from "react";
import api from "../../Services/api";
import Select from "react-select";
import { DropStyled } from "./DropDownStyled";

export const DropDown = ({ itemsOption, placeholder, onChange }) => {
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
  }, [itemsOption]);

  return (
    <>
      <DropStyled>
        <Select
          closeMenuOnSelect={false}
          isMulti
          onChange={onChange}
          options={options}
          placeholder={placeholder}
        />
      </DropStyled>
    </>
  );
};
