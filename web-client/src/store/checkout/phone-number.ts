import {CartItemsActions} from "../cart/items";

export const CHECKOUT_SET_PHONE_NUMBER = "CHECKOUT_SET_PHONE_NUMBER";

interface CheckoutSetPhoneNumber {
  type: typeof CHECKOUT_SET_PHONE_NUMBER;
  payload: {
    value: string;
  };
}

export function checkoutSetPhoneNumber(value: string): CheckoutSetPhoneNumber {
  return {
    type: CHECKOUT_SET_PHONE_NUMBER,
    payload: {
      value
    }
  };
}

export function phoneNumber(state = "", action: CheckoutSetPhoneNumber | CartItemsActions) {
  switch (action.type) {
    case "CHECKOUT_SET_PHONE_NUMBER":
      return action.payload.value;
    case "CART_DELETE_ALL_ITEMS":
      return "";
    default:
      return state;
  }
}
