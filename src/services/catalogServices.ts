const baseurl: string = "http://localhost:3000/api/products";

const getAllProds = async () => {
  const res = await fetch(`${baseurl}`);
  return res.json();
};

const getCategory = async (selectedCategories: string[]) => {
  try {
    const response = await fetch(`${baseurl}/${selectedCategories.join(",")}`, {
      cache: "force-cache",
    });
    // const response = await fetch(`http://localhost:3000/api/products/Laptops`);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default { getAllProds, getCategory };
