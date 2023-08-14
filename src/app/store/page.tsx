import catalogServices from "@/services/catalogServices";
import ProductType from "@/types/ProductType";
import Catalog from "@/components/Catalog";
import { useCategoryFilter } from "@/context/categoryFilterContext";
import CategoryFilter from "@/components/CategoryFilter";
import { log } from "console";
import SortFilter from "@/components/SortFilter";
import SearchBar from "@/components/SearchBar";
const Store = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  return (
    <>
      <div>{searchParams?.sort || "hi"}</div>
      <SearchBar />
      <div className="flex flex-row gap-2">
        <SortFilter />
        <CategoryFilter />
      </div>
      <Catalog
        catfilters={searchParams?.cat}
        sortFilters={searchParams?.sort}
      />
    </>
  );
};

export default Store;
