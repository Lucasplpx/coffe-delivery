import { useCart } from '../../contexts/useCart';
import { Card } from '../Card';
import { CatalogoContainer, Wrapper } from './styles';

export function Catalogo() {
  const { products, handleRemoveProductCart, handleAddProductCart } = useCart();

  return (
    <CatalogoContainer>
      <h1>Nossos cafés</h1>
      <Wrapper>
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            description={product.description}
            tags={product.tags}
            iconCoffe={product.iconCoffe}
            price={product.price}
            quantity={product.quantity}
            onClickMinus={() => handleRemoveProductCart(product.id)}
            onClickPlus={() => handleAddProductCart(product.id)}
          />
        ))}
      </Wrapper>
    </CatalogoContainer>
  );
}
