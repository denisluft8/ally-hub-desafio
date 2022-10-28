import styled from "styled-components";

export const DivStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(216, 216, 216, 0.2);
  border-radius: 10px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2),
    inset 1px 1px 0px rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  font-family: "Plus Jakarta Sans", sans-serif;
  gap: 22px;
  height: 650px;
  margin: 12px;
  width: 600px;
  

  & > h1 {
    padding-bottom: 24px;
    color: #404040;
  }

  @media (max-width: 768px){
    height: 600px;
    width: 550px;

  }
`;
