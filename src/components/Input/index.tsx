import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';
import {
  ErrorMessage,
  InputBaseContainer,
  InputContainer,
  InputWrapper,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { isOptional = false, error, ...rest },
  ref
) => {
  return (
    <InputBaseContainer>
      <InputWrapper>
        <InputContainer ref={ref} {...rest} isOptional={isOptional} />
        {isOptional && <span>Opcional</span>}
      </InputWrapper>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputBaseContainer>
  );
};

export const Input = forwardRef(InputBase);
