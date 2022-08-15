import styled, { css } from 'styled-components';

interface SelectProps {
  isSelected?: boolean;
}

export const SelectPaymentContainer = styled.button<SelectProps>`
  width: 100%;
  max-width: 11.167rem;

  display: flex;
  justify-content: start;
  align-items: center;

  gap: 12px;

  padding: 1rem;

  border: 0;
  border-radius: 6px;

  font-size: 12px;

  text-transform: uppercase;

  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};

  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${({ theme }) => theme['purple']};
      background: ${({ theme }) => theme['purple-light']};
    `}

  &:hover {
    background: ${({ theme, isSelected }) =>
      isSelected ? theme['purple-light'] : theme['base-hover']};
    color: ${({ theme }) => theme['base-subtitle']};
  }
`;
