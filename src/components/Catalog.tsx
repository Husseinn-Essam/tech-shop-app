import catalogServices from "@/services/catalogServices";
import Card from "./Card";
import ProductType from "@/types/ProductType";
import { getCategoriesFromSearchParams } from "@/utils/helpers";
interface CatalogProps {
  catfilters: string | undefined;
  sortFilters: string | undefined;
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

const Catalog: React.FC<CatalogProps> = async ({ catfilters, sortFilters }) => {
  console.log(sortFilters);

  //const prods: ProductType[] = await catalogServices.getCategory(["Laptops"]);

  // Get products data by category
  const prods: ProductType[] = await catalogServices.getCategory(catfilters);
  const sortedProds = sortProducts(prods, sortFilters);
  //const prods: ProductType[] = await catalogServices.getAllProds();
  // console.log(prods);

  return (
    <>
      {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-2"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {sortedProds.length > 0 ? (
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
