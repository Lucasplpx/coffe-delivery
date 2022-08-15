import { Banner } from '../../components/Banner';
import { Catalogo } from '../../components/Catalogo';
import { Header } from '../../components/Header';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <Catalogo />
    </HomeContainer>
  );
}
