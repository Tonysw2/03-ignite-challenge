import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin: 2.5rem 0;

  button {
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    list-style: none;

    li button {
      border-radius: 6px;
      background-color: ${(props) => props.theme['gray-600']};
      height: 40px;
      width: 40px;
      color: ${(props) => props.theme['gray-300']};
      font-weight: 700;
      border: none;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:disabled):hover {
    color: ${(props) => props.theme['green-300']};
    transition: all 0.2s;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
