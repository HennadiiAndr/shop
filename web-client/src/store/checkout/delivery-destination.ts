import {CartItemsActions} from "../cart/items";

export const CHECKOUT_SET_DELIVERY_DESTINATION = "CHECKOUT_SET_DELIVERY_DESTINATION";

interface CheckoutSetDeliveryDestination {
  type: typeof CHECKOUT_SET_DELIVERY_DESTINATION;
  payload: {
    value: string;
  };
}

export function checkoutSetDeliveryDestination(value: string): CheckoutSetDeliveryDestination {
  return {
    type: CHECKOUT_SET_DELIVERY_DESTINATION,
    payload: {
      value
    }
  };
}

export function deliveryDestination(state = "", action: CheckoutSetDeliveryDestination | CartItemsActions) {
  switch (action.type) {
    case "CHECKOUT_SET_DELIVERY_DESTINATION":
      return action.payload.value;
    case "CART_DELETE_ALL_ITEMS":
      return "";
    default:
      return state;
  }
}
