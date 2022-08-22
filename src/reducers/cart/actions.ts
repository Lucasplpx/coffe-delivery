import { FormValuesDelivery, OptionPayment } from '../../page/Checkout';

export enum CartTypes {
  ADD_AMOUNT_PRODUCT_CART = 'ADD_AMOUNT_PRODUCT_CART',
  REMOVE_AMOUNT_PRODUCT_CART = 'REMOVE_AMOUNT_PRODUCT_CART',
  DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART',
  ADD_DELIVERY_ADDRESS = 'ADD_DELIVERY_ADDRESS',
  SELECT_METHOD_PAYMENT = 'SELECT_METHOD_PAYMENT',
}

export function addProductCart(id: string) {
  return {
    type: CartTypes.ADD_AMOUNT_PRODUCT_CART,
    payload: {
      id,
    },
  };
}

export function removeProductCart(id: string) {
  return {
    type: CartTypes.REMOVE_AMOUNT_PRODUCT_CART,
    payload: {
      id,
    },
  };
}

export function deleteProductCart(id: string) {
  return {
    type: CartTypes.DELETE_PRODUCT_CART,
    payload: {
      id,
    },
  };
}

export function addDeliveryAddress(addressData: FormValuesDelivery) {
  return {
    type: CartTypes.ADD_DELIVERY_ADDRESS,
    payload: {
      address: addressData,
    },
  };
}

export function selectMethodPayment(method: OptionPayment) {
  return {
    type: CartTypes.SELECT_METHOD_PAYMENT,
    payload: {
      method,
    },
  };
}
