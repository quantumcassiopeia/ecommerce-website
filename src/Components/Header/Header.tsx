import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLogged = user != null;

  function handleUserAuth() {
    if (user === null) {
      dispatch({
        type: "user/login",
        payload: {
          name: "John",
          email: "john@email.com",
        },
      });
    } else {
      dispatch({
        type: "user/logout",
      });
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "LogOut" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
