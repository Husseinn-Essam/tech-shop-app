const baseurl: string = "http://localhost:3000/api/products";

const getAllProds = async () => {
  const res = await fetch(`${baseurl}`);
  console.log(res);
  return res.json();
};

const getCategory = async (selectedCategories: string[]) => {
  //console.log("hen");

  const res = await fetch(
    `${baseurl}?categories=${selectedCategories.join(",")}`
  );
  //console.log(res);

  return res.json();
};

export default { getAllProds, getCategory };
