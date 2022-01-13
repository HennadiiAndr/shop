import {CartItemsActions} from "../cart/items";

export const CHECKOUT_SET_COMMENT = "CHECKOUT_SET_COMMENT";

interface CheckoutSetComment {
  type: typeof CHECKOUT_SET_COMMENT;
  payload: {
    value: string;
  };
}

export function checkoutSetComment(value: string): CheckoutSetComment {
  return {
    type: CHECKOUT_SET_COMMENT,
    payload: {
      value
    }
  };
}

export function comment(state = "", action: CheckoutSetComment | CartItemsActions) {
  switch (action.type) {
    case "CHECKOUT_SET_COMMENT":
      return action.payload.value;
    case "CART_DELETE_ALL_ITEMS":
      return "";
    default:
      return state;
  }
}
