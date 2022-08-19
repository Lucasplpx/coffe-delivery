import { Counter } from '../Counter';
import { ButtonTrash } from '../ButtonTrash';

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
  iconCoffe: string;
  quantity: number;

  onClickMinus: () => void;
  onClickPlus: () => void;
  handleRemove: () => void;
}

export function Carrinho({
  title,
  price,
  iconCoffe,
  quantity,
  onClickMinus,
  onClickPlus,
  handleRemove,
}: CarrinhoProps) {
  return (
    <CarrinhoContainer>
      <Info>
        <img src={`./img/${iconCoffe}.png`} width={64} height={64} alt='' />
        <Details>
          <Title>{title}</Title>
          <ActionsContainer>
            <Counter onClickMinus={onClickMinus} onClickPlus={onClickPlus}>
              {quantity}
            </Counter>
            <ButtonTrash onClick={handleRemove} />
          </ActionsContainer>
        </Details>
      </Info>

      <span>R$ {price}</span>
    </CarrinhoContainer>
  );
}
