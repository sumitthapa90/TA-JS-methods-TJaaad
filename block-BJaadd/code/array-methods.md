Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

3. `flat`

- Parameter: it accepts an optional value of how deep a nested array should be flattened and the default value is
- Return: a single Array consisting of all the values present inside the subarray but without any subarrays
- Example

  let number = [1, 2 , 3,[4, 5,[6, 7,[8, 9]]]]
  number.flat(3);

  let bike = ["TVS","LML","KTM","DUCATI","BAJAJ","FREEDOM"]
  bike.flat(Infinity)

`flat` accept numbers and converts arrays which consists of sub arrays into normal arrays
No it does not mutate the original array

4. `push`

- Parameter: here we add the elements to be added to the end of the array
- Return: Array consisting of all the values which we wanted to append to the original array
- Example

```js
let numbers = [1, 2, 3, 4, 5];
number.push(6); // (6) [1, 2, 3, 4, 5, 6]
let colors = ["black", "pink", "white", "golden"];
colors.push(red); // ["black", "pink", "white", "golden", "red"]

let bike = ["TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"];
bike.push("yahama"); // (7) ["TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM", "yamaha"]

`push` accept numbers and converts arrays which consists of sub arrays into normal arrays
It mutates the original array

5`indexOf`;

   - Parameter: We input the element that we want to search for in the array
     Return: It returns the index at which the element is present in the array and if the element is not present it returns -1
     Example


     let numbers = [1, 2, 3, 4, 5, 6];
     numbers.indexOf(2); // 1
     let colors = ["black", "pink", "white", "golden"];
     colors.indexOf("white")// 2
     let bike = ["TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"];
     bike.indexOf("FREEDOM")// 5



   - `indexOf` searches if the element given in the parameter is present in the array, if it's present then it returns the index of the first     element, if the element is present more than once

   It does not mutate the original array

6`lastIndexOf`;

Parameter: We input the element that we want to search for in the array
Return: It returns the index at which the element is present in the array(If the element is present more than once then it returns the last element) and if the element is not present it returns -1
Example


 let numbers = [1, 2, 3, 4, 5, 6];
 numbers.lastIndexOf(6)// 5

let colors = ["black", "pink", "white", "golden"];
colors.lastIndexOf("golden")// 3


let bike = ["TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"];
bike.lastIndexOf("DUCATI")//3

`lastIndexOf` searches if the element given in the parameter is present in the array, if it's present then it returns the index of the lastelement if that element is present more than once

It does not mutate the original array


7`includes`;

Parameter: We input the element that we want to search for in the array
Return: If the element is present in the array then it returns true otherwise false
Example:

let numbers = [1, 2, 3, 4, 5, 6];
numbers.includes(7)// false

let colors = ["black", "pink", "white", "golden"];
colors.includes("golden")// true

var numbers = [2, 5, 9, 2];
numbers.includes(2); // true

`includes` searches if the element given in the parameter is present in the array, if it's present then it returns the index of the last element if that element is present more than once

It does not mutate the original array

8`reverse`;

Parameter: no inputs
Return: It returns the reversed array
Example

let numbers = [1, 2, 3, 4, 5, 6];
numbers.includes()// (6) [6, 5, 4, 3, 2, 1]

let colors = ["black", "pink", "white", "golden"];
colors.includes() // ["golden", "white", "pink", "black"]

var numbers = [2, 5, 9, 4, 1, 6, 3, ];
numbers.includes() // (7) [3, 6, 1, 4, 9, 5, 2]

`reverse` reverses the whole aray in the sense that the first array becomes the last array and the last array becomes the first

It mutates the original array

9`every`;


10`shift`;

Parameter: It consists of the elements that we want to add to the array
Return: It returns the length of the array that has been formed after adding the elements by using the unshift method
Example

let numbers = [1, 2, 3, 4, 5, 6];
numbers.shift(0) // (5) [2, 3, 4, 5, 6]


let colors = ["black", "pink", "white", "golden"];
colors.shift()// (3) ["pink", "white", "golden"]


let bike = ["TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"];
bike.shift() // ["LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"]

`unshift` accepts elements to be added to the array as parameters, It adds the elements to the beginning of the array and thus it mutates the array
- It mutates the original array

11`splice`;

Parameter: There is one parameter which is compulsory and two other parameters which are optional the compulsory parameter indicates the index from which the splicing should take place, then there is an optional parameter which indicates the number of elements to be deleted from the index, the other optional parameter can be used to add elements into the array with the specified index
Return: It returns the elements that have been deleted from the array in an array
Example

let months = ["Jan","Feb","Mar","Apr","May","Jun","July"]
months.splice(1)// (6) ["Feb", "Mar", "Apr", "May", "Jun", "July"]

let colors = ["black", "pink", "white", "golden"];
colors.splice()// (3) ["pink", "white", "golden"]

let bike = ["TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"];
bike.splice() // ["LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"]

`splice` just removees the specified number of elements to be removed from the specified index and can also be used to add elements at the specified index
It mutates the original array



12`find`;




13`unshift`;

Parameter: It consists of the elements that we want to add to the array
Return: It returns the length of the array that has been formed after adding the elements by using the unshift method
Example:

let numbers = [1, 2, 3, 4, 5, 6];
numbers.unshift() //0, 1, 2, 3, 4, 5, 6]

let colors = ["black", "pink", "white", "golden"];
colors.unshift() // (5) ["gray", "black", "pink", "white", "golden"]

let bike = ["TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"];
bike.unshift("HERO")//(7) ["HERO", "TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"]

`unshift` accepts elements to be added to the array as parameters, It adds the elements to the beginning of the array and thus it mutates the array
- It mutates the original array

14`findIndex`;


15`filter`;

Parameter: It can have a callback function and the current element being processed in the array
Return: It returns undefined


let numbers = [3, 5, 8, 10, 20, 35, 68, 78, 95]

function isEven(number){
  return number % 2 === 0;
}

numbers.filter(isEven)

let numbers = [3, 5, 8, 10, 20, 35, 68, 78, 95]

function isOdd(number){
  return number % 2 !== 0;
}

numbers.filter(isOdd)

`filter` can be used to iterate through the array such that each value is sent into the callback function and then it checks the condition, If it satisfies the condition then the value is returned back
No it does not mutate the array

16`flat`;
17`forEach`;


18`map`;

Parameter: There is a call back function and then it executes the current element being processed in the array
Return: It returns the new array that has all the elements which have been executed through the call back function
Example

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function double(number){
return number * 2
}
numbers.map(double)// (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

let numbers = [3, 5, 8, 10, 20, 35, 68, 78, 95]

function multiply(number){
  return number * 5
}

numbers.map(multiply)// 9) [15, 25, 40, 50, 100, 175, 340, 390, 475]

let numbers =[2, 4, 6, 8, 10, 12, 14, 16]

function division(number){

  return number / 5
}

numbers.map(division)//(8) [0.4, 0.8, 1.2, 1.6, 2, 2.4, 2.8, 3.2]

`map` It creates a new array with
It mutates the original array

19`pop`;
Parameter: Its empty
Return: It returns the element that has been popped out of the array, it returns undefined if the array is empty
Example

let numbers = [1, 2, 3, 4, 5];
number.pop(); // (4) [1, 2, 3, 4]

let colors = ["black", "pink", "white", "golden"];
colors.pop(); // (3) ["black", "pink", "white"]

let bike = ["TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"];
bike.pop(); // (5) ["TVS", "LML", "KTM", "DUCATI", "BAJAJ"]

`pop` just removes the last element from the array and returns it
It mutates the original array

20`reduce`;

let numbers = [1, 2, 3, 4, 5];
numbers.reduce()

21`slice`;

Parameter: There are two optional parameters one is the start and the other one is the end index which states upto which index the elements of the array must be extracted.
Return: It returns the elements that have been extracted from the original array in a new array
Example

let numbers = [1, 2, 3, 4, 5];
numbers.slice(0, 3)//(3) [1, 2, 3]

let bike = ["TVS", "LML", "KTM", "DUCATI", "BAJAJ", "FREEDOM"];
bike.slice(4); // (4) ["TVS", "LML", "KTM", "DUCATI"]

let colors = ["black", "pink", "white", "golden"];
colors.slice(2); // (2) ["white", "golden"]

`slice` just removees the specified number of elements to be removed from the specified index and can also be used to add elements at the specified index
It mutates the original array

22`some`;


```
