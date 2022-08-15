import { Banner } from '../../components/Banner';
import { Catalogo } from '../../components/Catalogo';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Catalogo />
    </HomeContainer>
  );
}
