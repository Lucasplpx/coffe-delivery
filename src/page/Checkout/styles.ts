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

export const WrapperCoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CompleteRequestContainer = styled.div``;

export const ConfirmRequestContainer = styled.div``;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const CoffeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  padding: 40px;

  border-radius: 6px 44px;

  background: ${({ theme }) => theme['base-card']};
`;

export const Divider = styled.div`
  width: 368px;
  background: ${({ theme }) => theme['base-button']};

  border: 1px solid ${({ theme }) => theme['base-button']};
`;
