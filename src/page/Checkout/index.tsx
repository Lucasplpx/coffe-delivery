import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { CoffeCard } from '../../components/CoffeCard';
import { Input } from '../../components/Input';
import {
  CheckoutContainer,
  CheckoutWrapper,
  CompleteRequestContainer,
  ConfirmRequestContainer,
  FieldWrapper,
  FormContainer,
  Title,
} from './styles';

export function Checkout() {
  const theme = useTheme();
  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <CompleteRequestContainer>
          <Title>Complete seu pedido</Title>

          <CoffeCard
            title='Endereço de Entrega'
            subtitle='Informe o endereço onde deseja receber seu pedido'
            icon={
              <MapPinLine
                size={22}
                color={theme['yellow-dark']}
                weight='regular'
              />
            }
          >
            <FormContainer action=''>
              <Input placeholder='CEP' width={200} />
              <Input placeholder='Rua' width={560} />
              <FieldWrapper>
                <Input placeholder='Número' width={200} />
                <Input placeholder='Complemento' width={348} isOptional />
              </FieldWrapper>

              <FieldWrapper>
                <Input placeholder='Bairro' width={200} />
                <Input placeholder='Cidade' width={276} />
                <Input placeholder='UF' width={60} />
              </FieldWrapper>
            </FormContainer>
          </CoffeCard>
        </CompleteRequestContainer>
        <ConfirmRequestContainer>
          <Title>Cafés selecionados</Title>
        </ConfirmRequestContainer>
      </CheckoutWrapper>
    </CheckoutContainer>
  );
}
