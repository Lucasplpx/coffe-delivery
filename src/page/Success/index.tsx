import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

import deliverySVG from '../../assets/img/delivery.svg';
import { useCart } from '../../contexts/useCart';

import {
  DescriptionDelivery,
  DescriptionImage,
  IconWrapper,
  Info,
  ItemInfo,
  OrderInfo,
  Subtitle,
  SuccessContainer,
  Title,
} from './styles';

const MessageMethodPayment = {
  money: 'Dinheiro',
  credit: 'Cartão de Crédito',
  bank: 'Cartão de Débito',
};

export function Success() {
  const theme = useTheme();
  const { deliveryAddress, methodPayment } = useCart();

  return (
    <SuccessContainer>
      <DescriptionDelivery>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>

        <OrderInfo>
          <ItemInfo>
            <IconWrapper bgcolor={theme.purple}>
              <MapPin size={16} weight='fill' />
            </IconWrapper>
            <Info>
              <p>
                Entrega em{' '}
                <span>
                  Rua {deliveryAddress.rua}, {deliveryAddress.numero}
                </span>
              </p>
              <p>
                {deliveryAddress.bairro} - {deliveryAddress.cidade},{' '}
                {deliveryAddress.uf}
              </p>
            </Info>
          </ItemInfo>
          <ItemInfo>
            <IconWrapper bgcolor={theme.yellow}>
              <Timer size={16} weight='fill' />
            </IconWrapper>
            <Info>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min </span>
              </p>
            </Info>
          </ItemInfo>
          <ItemInfo>
            <IconWrapper bgcolor={theme['yellow-dark']}>
              <CurrencyDollar size={16} weight='fill' />
            </IconWrapper>
            <Info>
              <p>Pagamento na entrega</p>
              <p>
                <span>{MessageMethodPayment[methodPayment]}</span>
              </p>
            </Info>
          </ItemInfo>
        </OrderInfo>
      </DescriptionDelivery>
      <DescriptionImage>
        <img src={deliverySVG} alt='' />
      </DescriptionImage>
    </SuccessContainer>
  );
}
