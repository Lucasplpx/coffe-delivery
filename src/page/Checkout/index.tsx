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
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';

const required = 'Campo obrigatório';

const schema = z.object({
  cep: z.string().min(1, required),
  rua: z.string().min(1, required),
  numero: z.string().min(1, required),
  complemento: z.string(),
  bairro: z.string().min(1, required),
  cidade: z.string().min(1, required),
  uf: z.string().min(2, 'ex: GO').max(2, 'ex: GO'),
});

type FormValues = z.infer<typeof schema>;

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const productsFiltered = products.filter((product) => product.quantity > 0);

  const frete = 3.99;

  function handleGoSuccess() {
    navigate('/checkout/success');
  }

  const onSubmit = handleSubmit((dataForm) => {
    console.log(dataForm);

    handleGoSuccess();
  });

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
              <FormContainer>
                <Input
                  placeholder='CEP'
                  width={200}
                  error={errors.cep}
                  {...register('cep')}
                />
                <Input
                  placeholder='Rua'
                  width={560}
                  error={errors.rua}
                  {...register('rua')}
                />
                <FieldWrapper>
                  <Input
                    placeholder='Número'
                    width={200}
                    error={errors.numero}
                    {...register('numero')}
                  />
                  <Input
                    placeholder='Complemento'
                    width={348}
                    isOptional
                    error={errors.complemento}
                    {...register('complemento')}
                  />
                </FieldWrapper>

                <FieldWrapper>
                  <Input
                    placeholder='Bairro'
                    width={200}
                    error={errors.bairro}
                    {...register('bairro')}
                  />
                  <Input
                    placeholder='Cidade'
                    width={276}
                    error={errors.cidade}
                    {...register('cidade')}
                  />
                  <Input
                    placeholder='UF'
                    width={60}
                    error={errors.uf}
                    {...register('uf')}
                  />
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

            <ButtonConfirm onClick={onSubmit}>Confirmar pedido</ButtonConfirm>
          </CoffeCardWrapper>
        </ConfirmRequestContainer>
      </CheckoutWrapper>
    </CheckoutContainer>
  );
}
