import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem 10rem;

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

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.375rem;
      border: 0;
      border-radius: 0.375rem;

      background: ${({ theme }) => theme['yellow-light']};

      outline: 0;

      &:hover {
      }

      svg {
        color: ${({ theme }) => theme['yellow-dark']};
      }
    }
  }
`;
