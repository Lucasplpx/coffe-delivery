import { createContext, ReactNode, useContext, useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  tags: string[];
  iconCoffe: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  products: Product[];
  handleAddProduct: () => void;
}

const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

const PRODUCTS_MOCK: Product[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional', 'Gelado'],
    iconCoffe: 'expresso',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional', 'Gelado'],
    iconCoffe: 'americano',
    price: 9.87,
    quantity: 0,
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional', 'Gelado'],
    iconCoffe: 'expresso_cremoso',
    price: 7.87,
    quantity: 0,
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
    iconCoffe: 'cafe_gelado',
    price: 7.87,
    quantity: 0,
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com Leite'],
    iconCoffe: 'cafe_com_leite',
    price: 7.87,
    quantity: 0,
  },
];

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_MOCK);

  function handleAddProduct() {}
  return (
    <CartContext.Provider value={{ products, handleAddProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
