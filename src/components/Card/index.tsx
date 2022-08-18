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
}

export function Card({
  title,
  description,
  tags,
  iconCoffe,
  price,
  quantity,
}: CardProps) {
  return (
    <CardContainer>
      <img src={`./img/${iconCoffe}.png`} alt='' />

      <TagWrapper>
        {tags.map((tagTitle) => (
          <Tag>{tagTitle}</Tag>
        ))}
      </TagWrapper>

      <TitleCard>{title}</TitleCard>
      <p>{description}</p>
      <ActionBuy>
        <p>
          <span>R$</span> {price}
        </p>

        <Counter size={2.375}>{quantity}</Counter>

        <IconContainer>
          <ShoppingCart size={22} color='white' weight='fill' />
        </IconContainer>
      </ActionBuy>
    </CardContainer>
  );
}
