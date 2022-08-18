import { ShoppingCart } from 'phosphor-react';
import {
  ActionBuy,
  CardContainer,
  Counter,
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
  const icon = 'cubano';
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
        <Counter>
          <span>-</span>
          <span>{quantity}</span>
          <span>+</span>
        </Counter>
        <IconContainer>
          <ShoppingCart size={22} color='white' weight='fill' />
        </IconContainer>
      </ActionBuy>
    </CardContainer>
  );
}
