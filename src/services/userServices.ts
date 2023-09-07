const baseurl: string = "/api/user";

export const getUsers = async () => {
  try {
    const response = await fetch(baseurl, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getUser = async (id: string | undefined) => {
  try {
    if (!id) return;
    const response = await fetch(`${baseurl}/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const addProductToCart = async (
  name: string,
  product,
  token: string
) => {
  const headers = new Headers({
    Authorization: token,
    "Content-Type": "application/json",
  });
  const options = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({ name, product }),
  };

  try {
    const response = await fetch(baseurl, options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    //console.error("There was a problem with the fetch operation:", error);
  }
};
