import { InputHTMLAttributes } from 'react';
import { InputContainer, InputWrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
}

export function Input({ isOptional = false, ...rest }: InputProps) {
  return (
    <InputWrapper>
      <InputContainer {...rest} isOptional={isOptional} />
      {isOptional && <span>Opcional</span>}
    </InputWrapper>
  );
}
