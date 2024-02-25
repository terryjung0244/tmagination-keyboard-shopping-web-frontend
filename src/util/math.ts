export const calculateDiscountRate = (price: string, discountRate: string): number => {
  return parseInt(price) - parseInt(price) * parseFloat(discountRate);
};
