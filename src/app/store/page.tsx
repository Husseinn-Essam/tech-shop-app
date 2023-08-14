import catalogServices from "@/services/catalogServices";
import ProductType from "@/types/ProductType";
import Catalog from "@/components/Catalog";
import { useCategoryFilter } from "@/context/categoryFilterContext";
import CategoryFilter from "@/components/CategoryFilter";
const Store = async () => {
  //const { state, disptch } = useCategoryFilter();

  return (
    <>
      <CategoryFilter />
      <Catalog />
    </>
  );
};

export default Store;
