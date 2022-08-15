import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { CoffeCard } from '../../components/CoffeCard';
import { Input } from '../../components/Input';
import {
  CheckoutContainer,
  CheckoutWrapper,
  CompleteRequestContainer,
  ConfirmRequestContainer,
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
            <form action=''>
              <Input placeholder='Label' width={434} isOptional />
            </form>
          </CoffeCard>
        </CompleteRequestContainer>
        <ConfirmRequestContainer>
          <Title>Cafés selecionados</Title>
        </ConfirmRequestContainer>
      </CheckoutWrapper>
    </CheckoutContainer>
  );
}
