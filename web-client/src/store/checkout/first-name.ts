import {CartItemsActions} from "../cart/items";

export const CHECKOUT_SET_FIRST_NAME = "CHECKOUT_SET_FIRST_NAME";

interface CheckoutSetFirstName {
  type: typeof CHECKOUT_SET_FIRST_NAME;
  payload: {
    value: string;
  };
}

export function checkoutSetFirstName(value: string): CheckoutSetFirstName {
  return {
    type: CHECKOUT_SET_FIRST_NAME,
    payload: {
      value
    }
  };
}

export function firstName(state = "", action: CheckoutSetFirstName | CartItemsActions) {
  switch (action.type) {
    case "CHECKOUT_SET_FIRST_NAME":
      return action.payload.value;
    case "CART_DELETE_ALL_ITEMS":
      return "";
    default:
      return state;
  }
}
