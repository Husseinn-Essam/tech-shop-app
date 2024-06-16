import catalogServices from "@/services/catalogServices";
import Card from "./Card";
import ProductType from "@/types/ProductType";

interface CatalogProps {
  catfilters: string | undefined;
  sortFilters: string | undefined;
  searchBarFilters: string;
}

// Sort Products based on filters search params
const sortProducts = (
  prods: ProductType[],
  sortMethod: string | undefined
): ProductType[] => {
  switch (sortMethod) {
    case "Sort by Price : high to low":
      return prods.slice().sort((a, b) => b.price - a.price);
    case "Sort by Price : low to high":
      return prods.slice().sort((a, b) => a.price - b.price);
    case "Sort by Rating":
      return prods.slice().sort((a, b) => b.rating - a.rating);
    default:
      return prods;
  }
};

const Catalog: React.FC<CatalogProps> = async ({
  catfilters,
  sortFilters,
  searchBarFilters,
}) => {
  //const prods: ProductType[] = await catalogServices.getCategory(["Laptops"]);

  // Get products data by category
  const prods: ProductType[] = await catalogServices.getCategory(catfilters);
  const sortedProds =
    searchBarFilters?.length > 0
      ? sortProducts(
          prods.filter((prod) =>
            prod.name.toLowerCase().includes(searchBarFilters)
          ),
          sortFilters
        )
      : sortProducts(prods, sortFilters);

  return (
    <>
      {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-2"> */}
      <div data-theme='mytheme' className=" grid grid-cols-1 bg-base  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 justify-items-center	">
        {sortedProds?.length > 0 ? (
          sortedProds.map((prod) => (
            <Card
              key={prod._id}
              name={prod.name}
              price={prod.price}
              stock={prod.stock}
              rating={prod.rating}
              images={prod.images || []}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
};

export default Catalog;
