import styled from 'styled-components';

export const ButtonTrashContainer = styled.button`
  margin: 0;
  border: none;

  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  padding: 6px 8px;
  border-radius: 6px;

  width: 5.688rem;
  height: 2rem;

  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  background: ${({ theme }) => theme['base-button']};

  svg {
    color: ${({ theme }) => theme['purple']};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};

    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`;
