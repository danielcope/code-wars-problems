// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//==============================================

// const domainName = (url) => {
//   let result = "";
//   let partOfDomain = false;

//   // check for cases where url does not start with "www." or "http"
//   if (
//     url[0] !== "w" &&
//     url[1] !== "w" &&
//     url[2] !== "w" &&
//     url[3] !== "." &&
//     url[0] !== "h" &&
//     url[1] !== "t" &&
//     url[2] !== "t" &&
//     url[3] !== "p" &&
//     partOfDomain === false
//   ) {
//     partOfDomain = true;

//     for (let i = 0; i < url.length; i++) {
//       result += url[i];

//       if (url[i + 1] === ".") {
//         return result;
//       }
//     }
//   }

//   for (let i = 0; i < url.length; i++) {
//     if (
//       url[i] === "/" &&
//       url[i - 1] === "/" &&
//       url[i + 1] !== "w" &&
//       url[i + 2] !== "w" &&
//       url[i + 3] !== "w"
//     ) {
//       console.log("hit");
//       partOfDomain = true;
//       continue;
//     }

//     if (url[i] === "." && url[i - 1] === "w" && url[i - 2] === "w") {
//       partOfDomain = true;
//       continue;
//     }

//     if (partOfDomain === true) {
//       result += url[i].toString();
//     }

//     if (partOfDomain === true && url[i + 1] === ".") {
//       return result;
//     }
//   }
// };

const domainName = (url) => {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
};

console.log(domainName("http://google.com"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("http://7w8sk-8.edu/index.php"));
console.log(domainName("https://123.net"));
console.log(domainName("icann.org"));
