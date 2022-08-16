import { Minus, Plus } from 'phosphor-react';
import { ReactNode } from 'react';
import { ButtonWrapper, CounterContainer } from './styles';

interface CounterProps {
  children: ReactNode;
  onClickMinus?: () => void;
  onClickPlus?: () => void;
}

export function Counter({ onClickMinus, onClickPlus, children }: CounterProps) {
  return (
    <CounterContainer>
      <ButtonWrapper onClick={onClickMinus}>
        <Minus size={14} weight='bold' />
      </ButtonWrapper>
      <span>{children}</span>
      <ButtonWrapper onClick={onClickPlus}>
        <Plus size={14} weight='bold' />
      </ButtonWrapper>
    </CounterContainer>
  );
}
