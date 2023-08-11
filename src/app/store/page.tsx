import catalogServices from "@/services/catalogServices";
import ProductType from "@/types/ProductType";
import Catalog from "@/components/Catalog";
const Store = async () => {
  //const prods: ProductType[] = await catalogServices.getAllProds();
  const prods: ProductType[] = await catalogServices.getCategory(["Laptops"]);
  console.log(prods);

  return <Catalog prods={prods} />;
};

export default Store;
