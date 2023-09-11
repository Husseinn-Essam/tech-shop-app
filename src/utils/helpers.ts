import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "5h",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secretKey, options);
  return token;
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secretKey);
    return decoded as JwtPayload;
  } catch (e) {
    console.error(e);
  }
}

export function generateShortOrderID(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let orderID = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    orderID += characters.charAt(randomIndex);
  }

  return orderID;
}

export const updateSearchParams = (type: string, value: string) => {
  //console.log(value);

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  // const catParam = searchParams.get("cat") || "";
  // const decodedCatParam = decodeURIComponent(catParam);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

// utils/urlHelpers.js
export function getCategoriesFromSearchParams(search: string) {
  const searchParams = new URLSearchParams(search);
  const catParam = searchParams.get("cat") || "";
  const decodedCatParam = decodeURIComponent(catParam);
  const catArray = decodedCatParam.split(",");
  return catArray;
}
