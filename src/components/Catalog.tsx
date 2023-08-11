import catalogServices from "@/services/catalogServices";
import Card from "./Card";
import ProductType from "@/types/ProductType";

type CatalogProps = {
  prods: ProductType[];
};
const Catalog: React.FC<CatalogProps> = ({ prods }) => {
  console.log("we rendered");

  return (
    <>
      {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-2"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {prods.length > 0 ? (
          prods.map((prod) => (
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
