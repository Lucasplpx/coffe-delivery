import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

import deliverySVG from '../../assets/img/delivery.svg';

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

export function Success() {
  const theme = useTheme();

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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
                <span>Cartão de Crédito</span>
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
