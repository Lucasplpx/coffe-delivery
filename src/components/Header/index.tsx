import { CardButton, CountItem, HeaderContainer } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  function handleGoCheckout() {
    navigate('/checkout');
  }

  function handleGoHome() {
    navigate('/');
  }

  return (
    <HeaderContainer>
      <img src={Logo} onClick={handleGoHome} alt='' />

      <div>
        <p>
          <MapPin size={22} weight='fill' /> Goiânia, GO
        </p>
        <CardButton onClick={handleGoCheckout}>
          <ShoppingCart size={22} weight='fill' />
        </CardButton>
        <CountItem>3</CountItem>
      </div>
    </HeaderContainer>
  );
}
