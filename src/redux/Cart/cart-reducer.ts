import { Product } from "../../data/products";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

interface CartAction {
  type: string;
  payload?: Product; // Payload opcional para flexibilidade
}

export function cartReducer(
  state = initialState,
  action: CartAction
): CartState {
  // Especificando o tipo de retorno
  switch (action.type) {
    case "cart/add-product":
      // Verifica se o produto já está no carrinho
      const isProductInCart = state.cart.some(
        (product) => product.id === action.payload?.id
      );

      if (isProductInCart) return state; // Retorna o estado atual se o produto já estiver no carrinho

      return {
        ...state,
        cart: [...state.cart, action.payload as Product], // Assegurando que payload não seja undefined
      };
    case "cart/remove-product":
      const productToRemove = action.payload as Product;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );

      return {
        ...state,
        cart: cartFiltered,
      };
    default:
      return state;
  }
}
