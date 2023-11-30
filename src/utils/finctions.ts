export const displaySalePrice = (price: string, discount: string): string => {
  return (parseFloat(price) - (parseFloat(price) * parseFloat(discount)) / 100)
    .toFixed(2)
    .toString();
};
