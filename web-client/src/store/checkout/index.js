import {combineReducers} from "redux";

import {firstName} from "./first-name";
import {lastName} from "./last-name";
import {phoneNumber} from "./phone-number";
import {eMail} from "./e-mail";
import {deliveryDestination} from "./delivery-destination";
import {deliveryWay} from "./delivery-way";
import {payWay} from "./pay-way";
import {comment} from "./checkout-comment";

export const checkout = combineReducers({
  firstName,
  lastName,
  phoneNumber,
  eMail,
  deliveryDestination,
  deliveryWay,
  payWay,
  comment
});
