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

// uses diff url
export const makeOrder = async (id: string | undefined) => {
  if (!id) return;
  const options = {
    method: "PUT",
  };
  const response = await fetch(`api/orders/${id}`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export const changeItemQuantity = async (
  mode: string,
  productName: string,
  id: string
) => {
  if (!id) return;
  const options = {
    method: "PUT",

    body: JSON.stringify({ mode, productName }),
  };
  const response = await fetch(`${baseurl}/${id}`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
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
  } catch (error) {
    //console.error("There was a problem with the fetch operation:", error);
  }
};
