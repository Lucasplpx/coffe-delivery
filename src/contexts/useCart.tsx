import { createContext, ReactNode, useContext, useReducer } from 'react';

import { produce } from 'immer';

interface Product {
  id: string;
  name: string;
  description: string;
  tags: string[];
  iconCoffe: string;
  price: number;
  priceBase: number;
  quantity: number;
}

interface CartContextProps {
  products: Product[];
  amountProducts: number;
  handleAddProductCart: (id: string) => void;
  handleRemoveProductCart: (id: string) => void;
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
    priceBase: 9.9,
    quantity: 0,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional', 'Gelado'],
    iconCoffe: 'americano',
    price: 9.87,
    priceBase: 9.87,
    quantity: 0,
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional', 'Gelado'],
    iconCoffe: 'expresso_cremoso',
    price: 10,
    priceBase: 10,
    quantity: 0,
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
    iconCoffe: 'cafe_gelado',
    price: 5.87,
    priceBase: 5.87,
    quantity: 0,
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com Leite'],
    iconCoffe: 'cafe_com_leite',
    price: 7.87,
    priceBase: 7.87,
    quantity: 0,
  },
];

interface CartState {
  products: Product[];
  totalProducts: number;
  amountProducts: number;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    (state: CartState, action: any) => {
      switch (action.type) {
        case 'ADD_PRODUCT_CART': {
          return produce(state, (draft) => {
            const index = draft.products.findIndex(
              (product) => product.id === action.payload.id
            );

            draft.products[index].quantity = draft.products[index].quantity + 1;
            draft.products[index].price = Number(
              (
                draft.products[index].price + draft.products[index].priceBase
              ).toFixed(2)
            );
            draft.amountProducts = draft.amountProducts + 1;
            return draft;
          });
        }

        case 'REMOVE_PRODUCT_CART': {
          return produce(state, (draft) => {
            const index = draft.products.findIndex(
              (product) => product.id === action.payload.id
            );

            if (draft.products[index].quantity > 0) {
              draft.products[index].quantity =
                draft.products[index].quantity - 1;
              draft.products[index].price = Number(
                (
                  draft.products[index].price - draft.products[index].priceBase
                ).toFixed(2)
              );
              draft.amountProducts = draft.amountProducts - 1;
            }
            return draft;
          });
        }

        default: {
          return state;
        }
      }
    },
    {
      products: PRODUCTS_MOCK,
      totalProducts: 0,
      amountProducts: 0,
    }
  );

  const { products, amountProducts } = cartState;

  function handleAddProductCart(id: string) {
    dispatch({
      type: 'ADD_PRODUCT_CART',
      payload: {
        id,
      },
    });
  }

  function handleRemoveProductCart(id: string) {
    dispatch({
      type: 'REMOVE_PRODUCT_CART',
      payload: {
        id,
      },
    });
  }

  return (
    <CartContext.Provider
      value={{
        products,
        handleAddProductCart,
        handleRemoveProductCart,
        amountProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
