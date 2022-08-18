import styled from 'styled-components';

export const ResumePaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme['base-text']};
  }
  span {
    color: ${({ theme }) => theme['base-text']};
  }

  &:last-child {
    p {
      font-size: 20px;
      font-weight: 700;
      color: ${({ theme }) => theme['base-subtitle']};
    }
    span {
      font-size: 20px;
      font-weight: 700;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`;
