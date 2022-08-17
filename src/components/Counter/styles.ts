import styled from 'styled-components';

export const CounterContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 4.5rem;

  height: 2rem;
  border-radius: 6px;

  background: ${({ theme }) => theme['base-button']};

  svg {
    color: ${({ theme }) => theme['purple']};
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  cursor: pointer;

  border: none;
  padding: 0;
  outline: none;
  color: inherit;
  font: inherit;
  background: none;

  &:hover {
    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`;
