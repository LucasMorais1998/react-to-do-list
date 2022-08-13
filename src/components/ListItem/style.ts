import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--bg-color-secondary);
  padding: 0.6rem;
  border-radius: 0.6rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;

  input {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.3rem;
  }

  label {
    color: var(--secondary-color);
  }
`;
