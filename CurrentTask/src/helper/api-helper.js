const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit");
  const result = await response.json();
  return result;
};
const getSingleProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/6`);
  const result = await response.json();
  return result;
};

const getDeleteProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};
export { getProducts, getSingleProduct, getDeleteProduct };
