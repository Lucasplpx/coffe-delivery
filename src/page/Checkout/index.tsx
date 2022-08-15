import { Input } from '../../components/Input';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <h1>Checkout</h1>
      <Input placeholder='Label' width={434} isOptional />
    </CheckoutContainer>
  );
}
