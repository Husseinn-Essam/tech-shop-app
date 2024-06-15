// const baseurl: string =
//   "https://tech-shop-app.vercel.app/api/products";
const baseurl: string =
  "http://localhost:3000/api/products";

const getAllProds = async () => {
  try {
    const res = await fetch(`${baseurl}`);
    return res.json();
  } catch (e) {
    console.log(e);
  }
};


const getHighestRatedProdsInEachCategory = async () => {
  try {
    const allProds = await getAllProds();
    const highestRatedProds = {};

    // Organize products by category
    allProds.forEach((prod) => {
      
      
      if (!highestRatedProds[prod.categories[0]] || highestRatedProds[prod.categories[0]].rating < prod.rating) {
        highestRatedProds[prod.categories[0]] = prod;
      }
    });

    return highestRatedProds;
  } catch (error) {
    console.error("Error fetching highest rated products:", error);
    return {};
  }
};


const getCategory = async (selectedCategories: string | undefined) => {
  try {
    //console.log(selectedCategories);

    const response = await fetch(`${baseurl}/${selectedCategories}`, {
      cache: "force-cache",
    });
    // const response = await fetch(`${baseurl}/${selectedCategories}`);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    //console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllProds, getCategory, getHighestRatedProdsInEachCategory };
