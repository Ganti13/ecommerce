"use client";

import { getAllCategories, getProducts } from "@/app/services/products";
import { productStore } from "@/app/store/productStore";
import { productProps } from "@/app/types/products";
import { useQuery } from "@tanstack/react-query";
import { Categories, Container, List, Wrapper } from "./styles";
import Image from "next/image";
import { formatCurrency } from "@/app/utils/currency";
import { ButtonHTMLAttributes, MouseEventHandler, useState } from "react";

export const ProductList = () => {
  const [filter, setFilter] = useState("");

  const { data } = useQuery<productProps[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(filter),
    refetchOnWindowFocus: false,
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  const products = !!filter
    ? data?.filter((product: productProps) => product.category === filter)
    : data;

  const addNewProduct = productStore((state) => state.addNewProduct);

  const handleCategory = (e: any, category: string) => {
    document.querySelectorAll("button").forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
    setFilter(category);
  };

  return (
    <Container>
      <Categories>
        <button className="active" onClick={(e) => handleCategory(e, "")}>
          all
        </button>
        {categories?.map((category: string) => (
          <button key={category} onClick={(e) => handleCategory(e, category)}>
            {category}
          </button>
        ))}
      </Categories>

      <List>
        {products?.map((item: productProps) => (
          <Wrapper key={item.id}>
            <Image
              src={item.image}
              height={1000}
              width={1000}
              alt={item.title}
            />
            <span>{formatCurrency(item.price)}</span>
            <h2>{item.title}</h2>
            <button onClick={() => addNewProduct(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  opacity="0.737212"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.737212"
                  d="M1 4.375H13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.737212"
                  d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add to Cart
            </button>
          </Wrapper>
        ))}
      </List>
    </Container>
  );
};
