import { combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import { cartReducer } from "./Cart/cart-reducer";

export const rootReducer = combineReducers({
  userReducer: userReducer,
  cartReducer: cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
