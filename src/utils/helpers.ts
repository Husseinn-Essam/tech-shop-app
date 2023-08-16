import { error, log } from "console";
import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secretKey = process.env.SECRET_KEY;
  console.log(secretKey);
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
