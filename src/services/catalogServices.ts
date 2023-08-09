const baseurl: string = "http://localhost:3000/api/products";

const getAllProds = async () => {
  const res = await fetch(`${baseurl}`);
  return res.json();
};

export default { getAllProds };
