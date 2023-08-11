import catalogServices from "@/services/catalogServices";
import ProductType from "@/types/ProductType";
import Catalog from "@/components/Catalog";
const Store = async () => {
  const prods: ProductType[] = await catalogServices.getAllProds();
  console.log("we store");

  //const prods: ProductType[] = await catalogServices.getCategory(["Laptops"]);
  return <Catalog prods={prods} />;
};

export default Store;
