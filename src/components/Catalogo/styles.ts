import styled from 'styled-components';

export const CatalogoContainer = styled.div`
  padding: 0 10rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    margin-bottom: 3.375rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`;
