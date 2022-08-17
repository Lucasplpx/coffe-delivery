import { Counter } from '../Counter';
import { ButtonTrash } from '../ButtonTrash';
import americanoIcon from '../../assets/img/americano.png';

import {
  ActionsContainer,
  CarrinhoContainer,
  Details,
  Info,
  Title,
} from './styles';

interface CarrinhoProps {
  title: string;
  price: number;
  icon: string;
}

export function Carrinho({ title, price, icon }: CarrinhoProps) {
  return (
    <CarrinhoContainer>
      <Info>
        <img src={icon} width={64} height={64} alt='' />
        <Details>
          <Title>{title}</Title>
          <ActionsContainer>
            <Counter>{1}</Counter>
            <ButtonTrash />
          </ActionsContainer>
        </Details>
      </Info>

      <span>R$ {price}</span>
    </CarrinhoContainer>
  );
}
