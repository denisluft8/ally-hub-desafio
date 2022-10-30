import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: #dedede;
  border: solid 1px #cccccc;
  background: rgba(216, 216, 216, 0.2);
  border-radius: 10px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2),
    inset 1px 1px 0px rgba(255, 255, 255, 0.3);
  color: #404040;
  display: block;
  font-weight: bold;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 100px;

  &:hover {
    background-color: #e1e1e1;
    border-color: #c6c6c6;
  }

  &:active {
    background-color: #cccccc;
    border-color: #bdbdbd;
  }

  &:disabled {
    background-color: #919191;
    border-color: #919191;
    &:hover {
      border-color: #919191;
      background-color: #919191;
    }
  }
`;
