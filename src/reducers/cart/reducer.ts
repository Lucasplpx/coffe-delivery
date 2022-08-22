import produce from 'immer';
import { Product } from '../../contexts/useCart';
import { FormValuesDelivery, OptionPayment } from '../../page/Checkout';
import { CartTypes } from './actions';

interface CartState {
  products: Product[];
  deliveryAddress: FormValuesDelivery;
  totalProducts: number;
  amountProducts: number;
  methodPayment: OptionPayment;
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartTypes.ADD_AMOUNT_PRODUCT_CART: {
      return produce(state, (draft) => {
        const index = draft.products.findIndex(
          (product) => product.id === action.payload.id
        );

        const product = draft.products[index];

        product.quantity = product.quantity + 1;
        draft.amountProducts = draft.amountProducts + 1;

        if (product.quantity > 1) {
          product.price = Number(
            (product.price + product.priceBase).toFixed(2)
          );
        }

        const productsFiltered = draft.products.filter(
          (product) => product.quantity > 0
        );
        draft.totalProducts = productsFiltered.reduce((acc, next) => {
          return acc + next.price;
        }, 0);

        return draft;
      });
    }

    case CartTypes.REMOVE_AMOUNT_PRODUCT_CART: {
      return produce(state, (draft) => {
        const index = draft.products.findIndex(
          (product) => product.id === action.payload.id
        );

        const product = draft.products[index];

        if (product.price > product.priceBase) {
          product.price = Number(
            (product.price - product.priceBase).toFixed(2)
          );
        }

        if (product.quantity > 0) {
          product.quantity = product.quantity - 1;
          draft.amountProducts = draft.amountProducts - 1;
        }

        const productsFiltered = draft.products.filter(
          (product) => product.quantity > 0
        );
        draft.totalProducts = productsFiltered.reduce((acc, next) => {
          return acc + next.price;
        }, 0);

        return draft;
      });
    }

    case CartTypes.DELETE_PRODUCT_CART: {
      return produce(state, (draft) => {
        const index = draft.products.findIndex(
          (product) => product.id === action.payload.id
        );

        const product = draft.products[index];

        draft.amountProducts = draft.amountProducts - product.quantity;
        product.quantity = 0;

        draft.totalProducts = draft.totalProducts - product.price;
        product.price = product.priceBase;

        return draft;
      });
    }

    case CartTypes.ADD_DELIVERY_ADDRESS: {
      return produce(state, (draft) => {
        draft.deliveryAddress = action.payload.address;

        return draft;
      });
    }

    case CartTypes.SELECT_METHOD_PAYMENT: {
      return produce(state, (draft) => {
        draft.methodPayment = action.payload.method;

        return draft;
      });
    }

    default: {
      return state;
    }
  }
}
