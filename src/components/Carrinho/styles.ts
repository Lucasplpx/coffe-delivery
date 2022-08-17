import styled from 'styled-components';

export const CarrinhoContainer = styled.div`
  width: 100%;
  max-width: 368px;

  display: flex;
  justify-content: space-between;

  padding: 8px 4px;
  height: 80px;

  background: ${({ theme }) => theme['base-card']};

  span {
    font-weight: 700;
    color: ${({ theme }) => theme['base-text']};
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 20px;

  width: 255px;
`;

export const Details = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;
  height: 61px;
`;

export const Title = styled.h1`
  font-size: 16px;

  color: ${({ theme }) => theme['base-subtitle']};
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
