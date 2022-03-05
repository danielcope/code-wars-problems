// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// ===================================

const removeUrlAnchor = (url) => {
  let result = "";

  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") break;

    result += url[i];
  }

  return result;
};
