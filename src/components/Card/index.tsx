import { ShoppingCart } from 'phosphor-react';
import { Counter } from '../Counter';
import {
  ActionBuy,
  CardContainer,
  IconContainer,
  Tag,
  TagWrapper,
  TitleCard,
} from './styles';

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  iconCoffe: string;
  price: number;
  quantity: number;

  onClickMinus: () => void;
  onClickPlus: () => void;
}

export function Card({
  title,
  description,
  tags,
  iconCoffe,
  price,
  quantity,
  onClickMinus,
  onClickPlus,
}: CardProps) {
  return (
    <CardContainer>
      <img src={`./img/${iconCoffe}.png`} alt='' />

      <TagWrapper>
        {tags.map((tagTitle) => (
          <Tag key={tagTitle}>{tagTitle}</Tag>
        ))}
      </TagWrapper>

      <TitleCard>{title}</TitleCard>
      <p>{description}</p>
      <ActionBuy>
        <p>
          <span>R$</span> {price}
        </p>

        <Counter
          size={2.375}
          onClickMinus={onClickMinus}
          onClickPlus={onClickPlus}
        >
          {quantity}
        </Counter>

        <IconContainer>
          <ShoppingCart size={22} color='white' weight='fill' />
        </IconContainer>
      </ActionBuy>
    </CardContainer>
  );
}
