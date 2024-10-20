import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as S from "./styles";
import { Product } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";

interface ProductCartProps {
  product: Product;
}

export const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  const isProductOnCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    dispatch({
      type: "cart/add-product",
      payload: product,
    });
  }

  function handleRemoveProductFromCart() {
    dispatch({
      type: "cart/remove-product",
      payload: product,
    });
  }

  return (
    <S.Cart>
      <S.ProductImg src={product.image} alt={product.description} />

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar />
            ) : (
              <AiOutlineStar />
            )
          )}
          ({` ${product.rating.rate}`})
        </S.Review>
        <S.Price>{product.price}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.AddToCartButtonWrapper>
    </S.Cart>
  );
};
