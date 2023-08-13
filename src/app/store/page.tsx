import catalogServices from "@/services/catalogServices";
import ProductType from "@/types/ProductType";
import Catalog from "@/components/Catalog";
import { useCategoryFilter } from "@/context/categoryFilterContext";
const Store = async () => {
  //const { state, disptch } = useCategoryFilter();
  const prods: ProductType[] = await catalogServices.getCategory(["Laptops"]);

  //const prods: ProductType[] = await catalogServices.getAllProds();
  // console.log(prods);

  return <Catalog />;
};

export default Store;
