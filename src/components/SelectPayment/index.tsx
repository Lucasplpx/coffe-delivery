import { HTMLAttributes, ReactNode } from 'react';
import { SelectPaymentContainer } from './styles';

interface SelectPaymentProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSelected?: boolean;
  icon: JSX.Element;
}

export function SelectPayment({
  children,
  isSelected,
  icon,
  ...rest
}: SelectPaymentProps) {
  return (
    <SelectPaymentContainer {...rest} isSelected={isSelected}>
      {icon}
      {children}
    </SelectPaymentContainer>
  );
}
