import getData from "../fetch";

const ProductsApi = async () => {
  const data = await getData();
  return data.products;
};
export default ProductsApi;
