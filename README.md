This function takes the input country name as a string, then capitalizes the first letter(s) and outputs the result.

It was first created as a simple capitalization of a string input, which was a task in the Odin Project tutorial:

Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh;

   /* let capitalize = string => {
     
      let lowerCase = string.toLowerCase();
      let firstCapitalized = lowerCase[0].toUpperCase();
      console.log(firstCapitalized + lowerCase.substring(1));
    }

Which got me to think -- what if the input country name was longer than one word? How could I take a country name like 'united states of america' and capitalize the first letters of each word, except the word 'of' (as well as 'the' or 'and')?

It's my first try where I've used arrow functions, as well as constructed my own code.