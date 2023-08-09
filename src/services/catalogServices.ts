const baseurl: string = "http://localhost:3001/api/products";

const getAllProds = async () => {
  const res = await fetch(`${baseurl}`);
  return res.json();
};

export default { getAllProds };
