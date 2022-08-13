import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #555;
  border-radius: 0.9rem;
  padding: 0.7rem;
  margin: 1.25rem 0;

  .add-icon {
    display: flex;
    margin-right: 0.9rem;
    font-size: 1.5rem;
    color: var(--secondary-color);
    cursor: pointer;
    transition: color ease 0.3s;

    &:hover {
      color: var(--primary-color);
    }
  }

  input {
    flex: 1;
    font-size: 1.125rem;
    border: 0;
    background: transparent;
    outline: none;
    color: var(--secondary-color);
  }
`;
