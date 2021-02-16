let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr) {
  return [...arr].sort((a, b) => a.length - b.length).pop();
}

// - Convert the above array "words" into an array of length of word instead of word.

let length = words.map((x) => x.length);
console.log(length);

// - Create a new array that only contains word with atleast one vowel.

// let newArray = [];

// - Find the index of the word "rhythm"

words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.

let notVowel = words.filter((v) => !checkVowel(v)[0]);

// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(numbers) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));

  return sum;
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let newArray = numbers.map((x) => x * 3);
console.log(newArray);

// - Create a new array that contains only even numbers

let ev = numbers.filter((x) => x % 2 === 0);

// - Create  a new array that contains only odd numbers.

let odd = numbers.filter((y) => y % 2 !== 0);

// - Create a new array that should have true for even number and false for odd numbers.

var number = numbers.map((x) => {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

// - Sort the above number in assending order.
console.log(numbers.sort((a, b) => a - b));

// - Does sort mutate the original array?

// yes it does mutate the array

// - Find the sum of the numbers in the array.

let sum = numbers.reduce((acc, cv) => (acc += cv),0);
console.log(sum);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers (numbers){
  let length = array.length
  let total = array.reduce((acc, cv)=> acc + cv)
  return total / lenght
}

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(words) {
  let wordsLength = words.map((v) => v.length).reduce((a, c) => a + c);

  return wordsLength;

}


