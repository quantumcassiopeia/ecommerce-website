import { ProductCart } from "../ProductCart/ProductCart";
import { products } from "../../data/products";

import * as S from "./styles";

export const ProductsList: React.FC = () => {
  return (
    <S.Container>
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
