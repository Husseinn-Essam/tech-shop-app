const baseurl: string = "./api/products";

const getAllProds = async () => {
  const res = await fetch(`${baseurl}`);
  return res.json();
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

export default { getAllProds, getCategory };
