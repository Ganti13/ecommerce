export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    maximumFractionDigits: 0,
    currency: "BRL",
  }).format(value);
};
