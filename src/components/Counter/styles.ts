import styled from 'styled-components';

interface CounterContainerProps {
  size?: number;
}

export const CounterContainer = styled.div<CounterContainerProps>`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 72px;
  max-width: 4.5rem;

  height: ${({ size }) => (size ? size : 2)}rem;
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
