export const getProducts = async (category?: string) => {
  const hasCaterory = !!category ? `category/${category}` : "";
  const response = await fetch(
    `https://fakestoreapi.com/products/${hasCaterory}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const result = await response.json();
  return result;
};

export const getAllCategories = () =>
  fetch("https://fakestoreapi.com/products/categories", {
    next: {
      revalidate: 60 * 60 * 24,
    },
  }).then((response) => response.json());
