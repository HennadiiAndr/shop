import {CartItemsActions} from "../cart/items";

export const CHECKOUT_SET_E_MAIL = "CHECKOUT_SET_E_MAIL";

interface CheckoutSetEMail {
  type: typeof CHECKOUT_SET_E_MAIL;
  payload: {
    value: string;
  };
}

export function checkoutSetEMail(value: string): CheckoutSetEMail {
  return {
    type: CHECKOUT_SET_E_MAIL,
    payload: {
      value
    }
  };
}

export function eMail(state = "", action: CheckoutSetEMail | CartItemsActions) {
  switch (action.type) {
    case CHECKOUT_SET_E_MAIL:
      return action.payload.value;
    case "CART_DELETE_ALL_ITEMS":
      return "";
    default:
      return state;
  }
}
