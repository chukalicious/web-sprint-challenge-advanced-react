//make a function that adds 2 strings and returns the added string
//check to make sure the strings are not empty
const addStrings = (str1, str2) => {
  if (str1 !== "" && str2 !== "") {
    return str1 + str2;
  } else {
    return "error";
  }
};

console.log(addStrings("en ", "Espanol"));
