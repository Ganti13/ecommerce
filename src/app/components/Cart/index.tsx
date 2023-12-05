"use client";
import { productStore } from "@/app/store/productStore";
import {
  CartFooter,
  CartHeader,
  CartQuantity,
  CloseCart,
  Container,
  ItemCart,
  ProductName,
  ProductPrice,
  RemoveProduct,
} from "./style";
import Image from "next/image";
import { formatCurrency } from "@/app/utils/currency";

export const Cart = () => {
  const showCart = productStore((state) => state.showCart);
  const handleShowCart = productStore((state) => state.handleShowCart);
  const products = productStore((state) => state.cart);
  const addNewProduct = productStore((state) => state.addNewProduct);
  const removeOneProduct = productStore((state) => state.removeOneProduct);
  const removeProduct = productStore((state) => state.removeProduct);

  const totalValueProducts = products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Container show={showCart ? showCart : null}>
      <CartHeader>
        <h1>Shopping cart</h1>
        <CloseCart onClick={handleShowCart}>x</CloseCart>
      </CartHeader>

      {products.map((product) => (
        <ItemCart key={product?.id}>
          <RemoveProduct onClick={() => removeProduct(product?.id)}>
            x
          </RemoveProduct>
          <Image
            src={product.image}
            alt={product.title}
            width={1000}
            height={1000}
          />

          <ProductName>{product?.title}</ProductName>

          <CartQuantity>
            <span>Qtd:</span>
            <div>
              <button
                disabled={product.quantity == 1}
                onClick={() => removeOneProduct(product.id)}
              >
                -
              </button>
              <div />
              <span>{product?.quantity}</span>
              <div />
              <button onClick={() => addNewProduct(product)}>+</button>
            </div>
          </CartQuantity>

          <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        </ItemCart>
      ))}

      <CartFooter>
        <div>
          <span>Total:</span>
          <span>{formatCurrency(totalValueProducts)}</span>
        </div>
        <button disabled={products.length < 1}>Finish checkout</button>
      </CartFooter>
    </Container>
  );
};
