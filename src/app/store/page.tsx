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
      <div className="custom-filters flex flex-row mt-6 items-center justify-between">
        <SearchBar />
        <div className="filter-col custom-filter-btns flex flex-row gap-4 mr-2">
          <SortFilter />
          <CategoryFilter />
        </div>
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
