import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem 10rem;

  img {
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 0.75rem;

    align-items: center;
    justify-content: center;

    p {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      justify-content: center;

      padding: 0.5rem;
      background: ${({ theme }) => theme['purple-light']};
      color: ${({ theme }) => theme['purple-dark']};

      border-radius: 0.375rem;
    }
  }
`;

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.375rem;
  border: 0;
  border-radius: 0.375rem;

  background: ${({ theme }) => theme['yellow-light']};

  outline: 0;
  cursor: pointer;

  &:hover {
  }

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`;

export const CountItem = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  width: 20px;
  height: 20px;

  border-radius: 999px;

  font-size: 12px;
  font-weight: 700;

  background: ${({ theme }) => theme['yellow-dark']};
  color: ${({ theme }) => theme.white};

  position: relative;
  top: -16px;
  right: 23px;
`;
