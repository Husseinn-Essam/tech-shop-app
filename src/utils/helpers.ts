export const updateSearchParams = (type: string, value: string) => {
  //console.log(value);

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const catParam = searchParams.get("cat") || "";
  const decodedCatParam = decodeURIComponent(catParam);
  console.log(decodedCatParam);
  console.log(`${window.location.pathname}`);

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
