import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 6px 36px;

  background: ${({ theme }) => theme['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  p {
    margin: 0 1.25rem;
    font-size: 0.875rem;
    line-height: 1.156rem;
    text-align: center;

    color: ${({ theme }) => theme['base-label']};
  }
`;

export const TitleCard = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.625rem;

  color: ${({ theme }) => theme['base-subtitle']};
`;

export const Tag = styled.span`
  margin-top: 0.75rem;
  padding: 0.25rem 0.5rem;

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 0.813rem;

  border-radius: 100px;

  color: ${({ theme }) => theme['yellow-dark']};
  background: ${({ theme }) => theme['yellow-light']};
`;

export const ActionBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 8px;

  margin: 33px 24px 20px;

  p {
    display: flex;
    gap: 4px;

    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;

    color: ${({ theme }) => theme['base-text']};

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      font-style: normal;
      line-height: 130%;
      color: ${({ theme }) => theme['base-text']};
    }
  }
`;

export const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 4.5rem;
  height: 2.375rem;

  gap: 4px;
  padding: 8px;

  border-radius: 6px;

  background: ${({ theme }) => theme['base-button']};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 2.375rem;

  padding: 8px;
  border-radius: 6px;

  background: ${({ theme }) => theme['purple-dark']};
`;
