import {combineReducers} from "redux";

import {items} from "./cart/items";
import {checkout} from "./checkout";
import {setRegion} from "./justinModule/justinRegionSet";

export const rootReducer = combineReducers({
  items,
  checkout,
  setRegion
});

export type RootState = ReturnType<typeof rootReducer>;
