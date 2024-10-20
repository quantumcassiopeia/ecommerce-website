import styled from "styled-components";

export const Container = styled.main`
  max-width: 1240;
  margin: 4rem auto;
  height: 100%;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;

  & > * {
    flex: 1 300px;
  }
`;
