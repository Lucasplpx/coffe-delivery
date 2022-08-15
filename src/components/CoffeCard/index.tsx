import { ReactNode } from 'react';
import {
  CoffeCardContainer,
  Description,
  Header,
  Title,
  WrapperIcon,
} from './styles';

interface CoffeCardProps {
  children: ReactNode;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export function CoffeCard({ children, icon, title, subtitle }: CoffeCardProps) {
  return (
    <CoffeCardContainer>
      <Header>
        <WrapperIcon>{icon}</WrapperIcon>
        <div>
          <Title>{title}</Title>
          <Description>{subtitle}</Description>
        </div>
      </Header>
      {children}
    </CoffeCardContainer>
  );
}
