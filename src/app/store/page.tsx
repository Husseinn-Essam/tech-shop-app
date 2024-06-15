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
    <div data-theme='mytheme' className="flex flex-col bg-base mt-4 ">
      {/* <h1 className="text-4xl mx-auto mb-5 font-sans text-white align-center">
        High Quality Products
      </h1> */}
      <div className="custom-filters flex flex-row bg-base   items-center justify-between ">
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
    </div>
  );
};

export default Store;
