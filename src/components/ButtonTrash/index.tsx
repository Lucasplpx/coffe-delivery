import { HTMLAttributes } from 'react';
import { Trash } from 'phosphor-react';
import { ButtonTrashContainer } from './styles';

interface ButtonTrashProps extends HTMLAttributes<HTMLButtonElement> {}

export function ButtonTrash({ ...rest }: ButtonTrashProps) {
  return (
    <ButtonTrashContainer {...rest}>
      <Trash size={16} />
      Remover
    </ButtonTrashContainer>
  );
}
