import { ContainerItem, ResumePaymentContainer } from './styles';

interface ResumePaymentProps {
  itensTotal: number;
  deliveryTotal: number;
  total: number;
}

export function ResumePayment({
  itensTotal,
  deliveryTotal,
  total,
}: ResumePaymentProps) {
  return (
    <ResumePaymentContainer>
      <ContainerItem>
        <p>Total de itens</p>
        <span>R$ {itensTotal}</span>
      </ContainerItem>
      <ContainerItem>
        <p>Entrega</p>
        <span>R$ {deliveryTotal}</span>
      </ContainerItem>
      <ContainerItem>
        <p>Total</p>
        <span>R$ {total}</span>
      </ContainerItem>
    </ResumePaymentContainer>
  );
}
