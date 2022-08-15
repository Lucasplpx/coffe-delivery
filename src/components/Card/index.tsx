import { ShoppingCart } from 'phosphor-react';
import {
  ActionBuy,
  CardContainer,
  Counter,
  IconContainer,
  Tag,
  TitleCard,
} from './styles';

import ExpressoImg from '../../assets/img/expresso.png';

export function Card() {
  return (
    <CardContainer>
      <img src={ExpressoImg} alt='' />
      <Tag>TRADICIONAL</Tag>
      <TitleCard>Expresso Tradicional</TitleCard>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <ActionBuy>
        <p>
          <span>R$</span> 9,90
        </p>
        <Counter>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </Counter>
        <IconContainer>
          <ShoppingCart size={22} color='white' weight='fill' />
        </IconContainer>
      </ActionBuy>
    </CardContainer>
  );
}
