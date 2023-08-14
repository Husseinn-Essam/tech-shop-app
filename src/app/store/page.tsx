import Catalog from "@/components/Catalog";
import CategoryFilter from "@/components/CategoryFilter";
import SortFilter from "@/components/SortFilter";
import SearchBar from "@/components/SearchBar";
const Store = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  return (
    <>
      <div>{searchParams?.search || "hi"}</div>
      <SearchBar />
      <div className="flex flex-row gap-2">
        <SortFilter />
        <CategoryFilter />
      </div>
      <Catalog
        catfilters={searchParams?.cat}
        sortFilters={searchParams?.sort}
        searchBarFilters={searchParams.search}
      />
    </>
  );
};

export default Store;
