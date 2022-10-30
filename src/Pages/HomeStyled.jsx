import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  gap: 50px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 968px) {
    flex-direction: column;
    height: fit-content;
    align-items: center;
  }
`;

export const SpanStyled = styled.span`
  color: #a45b5e;
  float: rights;
`;
