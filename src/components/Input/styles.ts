import styled, { css } from 'styled-components';

interface InputContainerProps {
  isOptional?: boolean;
}

export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin: 0;

  span {
    position: absolute;
    top: 13px;
    right: 12px;

    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-label']};
  }
`;

export const InputContainer = styled.input<InputContainerProps>`
  padding: 0.75rem;

  ${({ isOptional }) =>
    isOptional &&
    css`
      padding-right: 3.75rem;
    `}

  width: ${({ width }) => width}px;

  margin: 0;
  border: 0;
  border-radius: 4px;

  font-size: 0.875rem;
  font-weight: 400;

  background: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};

  &:focus {
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme['yellow-dark']};
  }
`;
