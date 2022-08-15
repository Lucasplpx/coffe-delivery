import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  padding: 0 10rem;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;

  margin: 2.5rem 0 0.93rem;

  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.4rem;

  color: ${({ theme }) => theme['base-subtitle']};
`;

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
`;

export const CompleteRequestContainer = styled.div``;

export const ConfirmRequestContainer = styled.div``;
