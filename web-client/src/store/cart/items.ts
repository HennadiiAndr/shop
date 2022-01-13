import {ProductType} from "../../api/@types";

export const CART_SET_ITEM_QTY = "CART_SET_ITEM_QTY";
export const CART_DELETE_ALL_ITEMS = "CART_DELETE_ALL_ITEMS";
export const CART_ADD_NEW_ITEM = "CART_ADD_NEW_ITEM";

interface CartItem {
  productId: ProductType["id"];
  discount: ProductType["discount"];
  qty: number;
  price: number;
}

interface CartSetItemQty {
  type: typeof CART_SET_ITEM_QTY;
  payload: {
    productId: ProductType["id"];
    qty: number;
  };
}

interface CartDeleteAllItems {
  type: typeof CART_DELETE_ALL_ITEMS;
}

interface CartAddNewItem {
  type: typeof CART_ADD_NEW_ITEM;
  payload: {
    productId: number;
    price: number;
    discount: number;
  };
}

export type CartItemsActions = CartSetItemQty | CartDeleteAllItems | CartAddNewItem;

export function cartSetItemQty(productId: CartItem["productId"], qty: CartItem["qty"]): CartSetItemQty {
  return {
    type: CART_SET_ITEM_QTY,
    payload: {
      productId,
      qty
    }
  };
}

export function cartAddNewItem(
  productId: CartItem["productId"],
  price: CartItem["price"],
  discount: CartItem["discount"]
): CartAddNewItem {
  return {
    type: CART_ADD_NEW_ITEM,
    payload: {
      productId,
      price,
      discount
    }
  };
}

export function cartDeleteAllItems(): CartDeleteAllItems {
  return {
    type: CART_DELETE_ALL_ITEMS
  };
}

// reducer
export function items(state: Array<CartItem> = [], action: CartItemsActions) {
  switch (action.type) {
    case "CART_SET_ITEM_QTY":
      return state
        .map(item => {
          if (item.productId === action.payload.productId) {
            return {
              ...item,
              qty: action.payload.qty
            };
          }
          return item;
        })
        .filter(item => item.qty > 0);
    case "CART_DELETE_ALL_ITEMS":
      return [];
    case "CART_ADD_NEW_ITEM":
      return [
        ...state,
        {
          productId: action.payload.productId,
          price: action.payload.price,
          qty: 1,
          discount: action.payload.discount
        }
      ];
    default:
      return state;
  }
}
