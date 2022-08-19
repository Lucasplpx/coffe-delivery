import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../contexts/useCart';

import { useTheme } from 'styled-components';
import { Carrinho } from '../../components/Carrinho';
import { CoffeCard } from '../../components/CoffeCard';
import { Input } from '../../components/Input';
import { SelectPayment } from '../../components/SelectPayment';
import { ResumePayment } from '../../components/ResumePayment';

import {
  ButtonConfirm,
  ButtonsContainer,
  CheckoutContainer,
  CheckoutWrapper,
  CoffeCardWrapper,
  CompleteRequestContainer,
  ConfirmRequestContainer,
  Divider,
  FieldWrapper,
  FormContainer,
  Title,
  WrapperCoffeCard,
} from './styles';

export function Checkout() {
  const {
    products,
    totalProducts,
    handleAddProductCart,
    handleRemoveProductCart,
    handleDeleteProductCart,
  } = useCart();
  const theme = useTheme();
  const navigate = useNavigate();

  const productsFiltered = products.filter((product) => product.quantity > 0);

  const frete = 3.99;

  function handleGoSuccess() {
    navigate('/checkout/success');
  }

  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <CompleteRequestContainer>
          <Title>Complete seu pedido</Title>

          <WrapperCoffeCard>
            <CoffeCard
              title='Endereço de Entrega'
              subtitle='Informe o endereço onde deseja receber seu pedido'
              icon={
                <MapPinLine
                  size={22}
                  color={theme['yellow-dark']}
                  weight='regular'
                />
              }
            >
              <FormContainer action=''>
                <Input placeholder='CEP' width={200} />
                <Input placeholder='Rua' width={560} />
                <FieldWrapper>
                  <Input placeholder='Número' width={200} />
                  <Input placeholder='Complemento' width={348} isOptional />
                </FieldWrapper>

                <FieldWrapper>
                  <Input placeholder='Bairro' width={200} />
                  <Input placeholder='Cidade' width={276} />
                  <Input placeholder='UF' width={60} />
                </FieldWrapper>
              </FormContainer>
            </CoffeCard>

            <CoffeCard
              title='Pagamento'
              subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
              icon={
                <CurrencyDollar
                  size={22}
                  color={theme['purple']}
                  weight='regular'
                />
              }
            >
              <ButtonsContainer>
                <SelectPayment
                  icon={<CreditCard size={16} color={theme.purple} />}
                  isSelected
                >
                  Cartão de crédito
                </SelectPayment>
                <SelectPayment icon={<Bank size={16} color={theme.purple} />}>
                  Cartão de débito
                </SelectPayment>
                <SelectPayment icon={<Money size={16} color={theme.purple} />}>
                  Dinheiro
                </SelectPayment>
              </ButtonsContainer>
            </CoffeCard>
          </WrapperCoffeCard>
        </CompleteRequestContainer>
        <ConfirmRequestContainer>
          <Title>Cafés selecionados</Title>
          <CoffeCardWrapper>
            {productsFiltered.map((product) => (
              <div key={product.id}>
                <Carrinho
                  title={product.name}
                  price={product.price}
                  iconCoffe={product.iconCoffe}
                  quantity={product.quantity}
                  onClickMinus={() => handleRemoveProductCart(product.id)}
                  onClickPlus={() => handleAddProductCart(product.id)}
                  handleRemove={() => handleDeleteProductCart(product.id)}
                />
                <Divider />
              </div>
            ))}

            <Divider />
            <ResumePayment
              itensTotal={totalProducts}
              deliveryTotal={frete}
              total={totalProducts + frete}
            />

            <ButtonConfirm onClick={handleGoSuccess}>
              Confirmar pedido
            </ButtonConfirm>
          </CoffeCardWrapper>
        </ConfirmRequestContainer>
      </CheckoutWrapper>
    </CheckoutContainer>
  );
}
