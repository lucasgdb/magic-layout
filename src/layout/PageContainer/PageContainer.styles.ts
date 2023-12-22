import { styled } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex: 1;

  overflow: hidden;
`;

export const OuterContainer = styled.div`
  display: flex;
  flex: 1;

  background-color: #f6f7f9;
  overflow-y: auto;
`;

export const InnerContainer = styled.div`
  flex: 1;
`;
