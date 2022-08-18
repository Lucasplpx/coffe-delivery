import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 102px;

  padding: 80px 160px 0px;
`;

export const DescriptionDelivery = styled.div``;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;

  color: ${({ theme }) => theme['yellow-dark']};
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;

  color: ${({ theme }) => theme['base-subtitle']};
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 526px;
  padding: 40px;
  margin-top: 40px;

  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(
        65deg,
        ${({ theme }) => theme['yellow-dark']},
        ${({ theme }) => theme['purple']}
      )
      border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Info = styled.div`
  line-height: 20px;
  p {
    color: ${({ theme }) => theme['base-text']};
  }

  span {
    font-weight: 700;
  }
`;

interface IconWrapperProps {
  bgcolor?: string;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  background: ${({ bgcolor }) => bgcolor};

  border-radius: 999px;
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.white};
  }
`;

export const DescriptionImage = styled.div`
  align-content: end;
  display: grid;
`;
