const baseurl: string = "http://localhost:3000/api/user";

const addProductToCart = async (name, product, token) => {
  //   const headers = new Headers({
  //     Authorization: token,
  //     "Content-Type": "application/json",
  //   });
  console.log("token ", token);

  const options = {
    method: "PUT",
    // headers: headers,
    body: JSON.stringify({ name, product, token }),
  };

  try {
    const response = await fetch(baseurl, options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
