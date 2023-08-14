import catalogServices from "@/services/catalogServices";
import ProductType from "@/types/ProductType";
import Catalog from "@/components/Catalog";
import { useCategoryFilter } from "@/context/categoryFilterContext";
import CategoryFilter from "@/components/CategoryFilter";
import { log } from "console";
import SortFilter from "@/components/SortFilter";
const Store = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  //const { state, disptch } = useCategoryFilter();
  //console.log(searchParams);

  return (
    <>
      <div>{searchParams?.cat || "hi"}</div>
      <div className="flex flex-row gap-2">
        <SortFilter />
        <CategoryFilter />
      </div>
      <Catalog searchParams={searchParams?.cat} />
    </>
  );
};

export default Store;
