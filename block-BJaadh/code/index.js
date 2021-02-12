// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

numbers.indexOf(101); // 8

// - Find the last index of `9` in numbers

numbers.lastIndexOf();

// - Convert value of strings array into a sentance like "This is a collection of words"

strings.join("");

// - Add two new words in the strings array "called" and "sentance"

var newString = [...strings];

newString.push("called");
newString.push("sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

strings.join(" ");

// - Remove the first word in the array (strings)

newString.shift();

// - Find all the words that contain 'is' use string method 'includes'

strings.includes("is");

// - Find all the words that contain 'is' use string method 'indexOf'

strings.indexOf("is");

// - Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every((x) => {
  x % 3 === 0;
});

// -  Sort Array from smallest to largest

// - Remove the last word in strings

Math.min(...numbers);

// - Find largest number in numbers

console.log(Math.max(...numbers));

// - Find longest string in strings

// - Find all the even numbers

let en = numbers.filter((x) => {
  if (x % 2 === 0) {
    return x;
  }
});
console.log(en);

// - Find all the odd numbers

let odd = number.filter((x) => {
  if (x % 2 !== 0) {
    return x;
  }
});

console.log(odd);

// - Place a new word at the start of the array use (unshift)

newString.unshift("There");

// - Make a subset of numbers array [18,9,7,11]

numbers.slice(3, 7);

// - Make a subset of strings array ['a','collection']

strings.slice(2, 4);

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'

console.log(customers.filter((customer) => customer.firstname.startsWith("J")));
// - Create new array with only first name

let newArray = customers.map((customer) => customer.firstname)
console.log(newArray)

// - Create new array with all the full names (ex: "Joe Blogs")

let newArrayTwo = customers.map((coustmer) => {
  `${customers.firstname}&& ${customers.lastname}`
})


// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.

