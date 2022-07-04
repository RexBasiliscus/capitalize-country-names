const capitalizeCountryNames = string => {
  let words = string.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "of" || words[i] === "the" || words[i] === "and") {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }

  console.log(words.join(' '));
}
