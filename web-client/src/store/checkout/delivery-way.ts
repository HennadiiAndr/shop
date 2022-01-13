import {CartItemsActions} from "../cart/items";

export const CHECKOUT_SET_DELIVERY_WAY = "CHECKOUT_SET_DELIVERY_WAY";

interface CheckoutSetDeliveryWay {
  type: typeof CHECKOUT_SET_DELIVERY_WAY;
  payload: {
    value: string;
  };
}

export function checkoutSetDeliveryWay(value: string): CheckoutSetDeliveryWay {
  return {
    type: CHECKOUT_SET_DELIVERY_WAY,
    payload: {
      value
    }
  };
}

export function deliveryWay(state = "", action: CheckoutSetDeliveryWay | CartItemsActions) {
  switch (action.type) {
    case "CHECKOUT_SET_DELIVERY_WAY":
      return action.payload.value;
    case "CART_DELETE_ALL_ITEMS":
      return "";
    default:
      return state;
  }
}
