import {CartItemsActions} from "../cart/items";

export const JUSTINMODULE_SET_REGION = "JUSTINMODULE_SET_REGION";

interface JustinModuleSetRegion {
  type: typeof JUSTINMODULE_SET_REGION;
  payload: {
    value: string;
  };
}

export function justinModuleSetRegion(value: string): JustinModuleSetRegion {
  return {
    type: JUSTINMODULE_SET_REGION,
    payload: {
      value
    }
  };
}

export function setRegion(state = "", action: JustinModuleSetRegion | CartItemsActions) {
  switch (action.type) {
    case "JUSTINMODULE_SET_REGION":
      return action.payload.value;
    case "CART_DELETE_ALL_ITEMS":
      return "";
    default:
      return state;
  }
}
