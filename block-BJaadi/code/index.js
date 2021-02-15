// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

// - Find the index of `101` in numbers

numbers.indexOf(101);

// - Find the last index of `9` in numbers

numbers.indexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"

strings.join(" ");

// - Add two new words in the strings array "called" and "sentance"

strings.push("called");
strings.push("sentence");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

strings.join(" ");

// - Remove the first word in the array (strings)

strings.shift();

// - Find all the words that contain 'is' use string method 'includes'

var word = strings.filter((String) => String.includes("is"));

// - Find all the words that contain 'is' use string method 'indexOf'

let words = strings.filter((string) => string.indexOf("is") !== -1);

// - Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every((num) => num % 3 === 0);

// -  Sort Array from smallest to largest

numbers.sort((a, b) => a - b);

// - Remove the last word in strings

strings.pop();

// - Find largest number in numbers

numbers.sort((a, b) => a - b).pop();

// - Find longest string in strings

strings.sort((a, b) => a.length - b.length);

// - Find all the even numbers

let ev = numbers.filter((num) => num % 2 === 0);

// - Find all the odd numbers

let odd = numbers.filter((num) => num % 2 !== 0);

// - Place a new word at the start of the array use (upshift)

strings.unshift("There");

// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881

numbers.map(num => {
  if(num === 12){
    return 1221
  }else if(num === 18){
    return 1881
  }else{
    return num
  }
})


// - Replace words in strings array with the length of the word

strings.map(string=> string.length)

// - Find the sum of the length of words using above question



// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'

let customer = customers.filter((customer) => customer.firstname.startWith("J"))

// - Create new array with only first name

let newArray = customers.map((customer) => customer.firstname)

// - Create new array with all the full names (ex: "Joe Blogs")

let newArray2 = customers.map((customer) => `${customer.firstname} ${customer.lastname}`)

// - Sort the array created above alphabetically


// - Create a new array that contains only user who has at least one vowel in the firstname.

