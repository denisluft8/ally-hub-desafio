import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #d8d8d833;
  display: flex;
  height: 100vh;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
    align-items: center;
  }
`;
