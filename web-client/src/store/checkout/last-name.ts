import {CartItemsActions} from "../cart/items";

export const CHECKOUT_SET_LAST_NAME = "CHECKOUT_SET_LAST_NAME";

interface CheckoutSetLastName {
  type: typeof CHECKOUT_SET_LAST_NAME;
  payload: {
    value: string;
  };
}

export function checkoutSetLastName(value: string): CheckoutSetLastName {
  return {
    type: CHECKOUT_SET_LAST_NAME,
    payload: {
      value
    }
  };
}

export function lastName(state = "", action: CheckoutSetLastName | CartItemsActions) {
  switch (action.type) {
    case CHECKOUT_SET_LAST_NAME:
      return action.payload.value;
    case "CART_DELETE_ALL_ITEMS":
      return "";
    default:
      return state;
  }
}
