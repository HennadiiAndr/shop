import {CartItemsActions} from "../cart/items";

export const CHECKOUT_SET_PAY_WAY = "CHECKOUT_SET_PAY_WAY";

interface CheckoutSetPayWay {
  type: typeof CHECKOUT_SET_PAY_WAY;
  payload: {
    value: string;
  };
}

export function checkoutSetPayWay(value: string): CheckoutSetPayWay {
  return {
    type: CHECKOUT_SET_PAY_WAY,
    payload: {
      value
    }
  };
}

export function payWay(state = "", action: CheckoutSetPayWay | CartItemsActions) {
  switch (action.type) {
    case "CHECKOUT_SET_PAY_WAY":
      return action.payload.value;
    case "CART_DELETE_ALL_ITEMS":
      return "";
    default:
      return state;
  }
}
