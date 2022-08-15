import { Card } from '../Card';
import { CatalogoContainer, Wrapper } from './styles';

export function Catalogo() {
  return (
    <CatalogoContainer>
      <h1>Nossos cafés</h1>
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <div>3</div>
        <div>4</div>
      </Wrapper>
    </CatalogoContainer>
  );
}
