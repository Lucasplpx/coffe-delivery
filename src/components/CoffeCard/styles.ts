import styled from 'styled-components';

export const CoffeCardContainer = styled.div`
  width: 100;
  max-width: 640px;

  padding: 40px;
  border-radius: 6px;

  background: ${({ theme }) => theme['base-card']};
`;

export const Header = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 2rem;
`;

export const WrapperIcon = styled.div``;
export const Title = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme['base-subtitle']};
`;
export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme['base-text']};
`;
