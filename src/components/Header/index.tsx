import { HeaderContainer } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from '../../assets/img/logo.png';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt='' />

      <div>
        <p>
          <MapPin size={22} weight='fill' /> Goiânia, GO
        </p>
        <button>
          <ShoppingCart size={22} weight='fill' />
        </button>
      </div>
    </HeaderContainer>
  );
}
