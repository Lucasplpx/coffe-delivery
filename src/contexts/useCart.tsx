import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import data from '../data/products.json';

import { FormValuesDelivery, OptionPayment } from '../page/Checkout';

import {
  addDeliveryAddress,
  addProductCart,
  deleteProductCart,
  removeProductCart,
  selectMethodPayment,
} from '../reducers/cart/actions';

import { cartReducer } from '../reducers/cart/reducer';

export interface Product {
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
  totalProducts: number;
  amountProducts: number;
  methodPayment: OptionPayment;
  deliveryAddress: FormValuesDelivery;
  handleAddProductCart: (id: string) => void;
  handleRemoveProductCart: (id: string) => void;
  handleDeleteProductCart: (id: string) => void;
  handleAddDeliveryAddress: (addressData: FormValuesDelivery) => void;
  handleSelectMethodPayment: (method: OptionPayment) => void;
}

const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

const PRODUCTS_MOCK: Product[] = data.products;

const CART_STATE_INIT = {
  products: PRODUCTS_MOCK,
  totalProducts: 0,
  amountProducts: 0,
  deliveryAddress: {} as FormValuesDelivery,
  methodPayment: 'money',
};

const KEY_VERSION_LOCAL_STORAGE = '@coffedelivery:v0.0.1';

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, CART_STATE_INIT, () => {
    const cartStateStorage = localStorage.getItem(KEY_VERSION_LOCAL_STORAGE);

    if (cartStateStorage) {
      return JSON.parse(cartStateStorage);
    }

    return CART_STATE_INIT;
  });

  const {
    products,
    amountProducts,
    deliveryAddress,
    totalProducts,
    methodPayment,
  } = cartState;

  useEffect(() => {
    localStorage.setItem(KEY_VERSION_LOCAL_STORAGE, JSON.stringify(cartState));
  }, [cartState]);

  function handleAddProductCart(id: string) {
    dispatch(addProductCart(id));
  }

  function handleRemoveProductCart(id: string) {
    dispatch(removeProductCart(id));
  }

  function handleDeleteProductCart(id: string) {
    dispatch(deleteProductCart(id));
  }

  function handleAddDeliveryAddress(addressData: FormValuesDelivery) {
    dispatch(addDeliveryAddress(addressData));
  }

  function handleSelectMethodPayment(method: OptionPayment) {
    dispatch(selectMethodPayment(method));
  }

  return (
    <CartContext.Provider
      value={{
        products,
        totalProducts,
        methodPayment,
        amountProducts,
        deliveryAddress,
        handleAddProductCart,
        handleRemoveProductCart,
        handleDeleteProductCart,
        handleAddDeliveryAddress,
        handleSelectMethodPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
