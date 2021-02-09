Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: does not accept any parameter
   - Return: returns the string in uppercase
   - Example:
     ```js
     let name = "Arya Stark";
     name.toUpperCase(); //"ARYA STARK"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.toUpperCase(); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = "Starks";
     houseName.toUpperCase(); //"STARKS"
     ```
   - `toUpperCase` accepts a string and returns the string as uppercase

3. `toLowerCase`

   - Parameter: does not accept any parameter
   - Return: returns the string in uppercase
   - Example:
     ```js
     let name = "Arya Stark";
     name.toLowerCase(); //"arya stark"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.toLowerCase(); // "a quick brown fox jumped over a lazy dog"
     let houseName = "Starks";
     houseName.toLowerCase(); //"starks"
     ```
   - `tolowerCase` accepts a string and returns the string as lowercase

4. `trim`

   - Parameter: does not accept any parameter
   - Return: returns the string after removing the white space before and after the string
   - Example:
     ```js
     let name = "  Arya Stark  ";
     name.trim(); //"Arya Stark"
     let sentance = "    A quick brown fox jumped over a lazy dog   ";
     sentance.trim(); // "A quick brown fox jumped over a lazy dog"
     let houseName = "   Starks    ";
     houseName.trim(); //"Starks"
     ```
   - `trim` The trim() method removes whitespace from both ends of a string.

5. `trimEnd`

   - Parameter: does not accept any parameter
   - Return: returns the string after removing the white space after the string
   - Example:
     ```js
     let name = "  Arya Stark  ";
     name.trimEnd(); //"  Arya Stark"
     let sentance = "    A quick brown fox jumped over a lazy dog   ";
     sentance.trimEnd(); // "    A quick brown fox jumped over a lazy dog"
     let houseName = "   Starks    ";
     houseName.trimEnd(); //"   Starks"
     ```
   - `trimEnd` The trimEnd() method removes whitespace from the end of a string.

6. `trimStart`

   - Parameter: does not accept any parameter
   - Return: returns the string after removing the white space before the string
   - Example:
     ```js
     let name = "  Arya Stark  ";
     name.trimStart(); //"Arya Stark  "
     let sentance = "    A quick brown fox jumped over a lazy dog   ";
     sentance.trimStart(); // "A quick brown fox jumped over a lazy dog   "
     let houseName = "   Starks    ";
     houseName.trimStart(); //"Starks   "
     ```
   - `trimEnd` The trimEnd() method removes whitespace from the start of a string.

7. `concat`

   - Parameter: accepts two parameters it can be a string a variable
   - Return: returns the string after attaching the parameters to the string that we are using to concatenate
   - Example:

   ```js
   let name =  "Arya Stark" ;
   name.concat("", "you are cool"); // "Arya Starkyou are cool"
   let sentance = "A quick brown fox jumped over a lazy dog";
   sentance.concat("", "yo are so cool"); // "A quick brown fox jumped over a lazy dogyo are so cool"
   let houseName = "Starks";
   houseName.concat("", "Arya"); // "StarksArya"

   `concat` can have two parameters and then returns the string after adding these parameters to the original string

   ```

8. `endsWith`

   - Parameter: accepts two parameters one is a searchString and the other one is a length which is optional
   - Return: returns either true or false
   - Example:

   ```js
   let name =  "Arya Stark" ;
   name.endsWith("Arya stark"); // "true"
   let sentance = "A quick brown fox jumped over a lazy dog";
   sentance.endsWith("so"); // "A quick brown fox jumped over a lazy dogyo are so cool" // false
   let houseName = "Starks";
   houseName.endsWith("s"); // "true"

   `endsWith` can have two parameters and then returns either true or false, if the string given as a parameter is actually present at the end of the string which we are checking


   ```

9. `includes`

   - Parameter: accepts two parameters one is a searchString and the other one is a length which is optional
   - Return: returns either true or false
   - Example:

   ```js
   let name =  "Arya Stark" ;
   name.includes("r"); //true
   let sentance = "A quick brown fox jumped over a lazy dog";
   sentance.includes("J"); // "A quick brown fox jumped over a lazy dogyo are so cool" // false
   let houseName = "Starks";
   houseName.includes("A"); // "true"

   `includes` can have two parameters and then returns either true or false, if the string given as a parameter is actually present in the string which we are checking



   ```

10. `indexOf`

- Parameter: accepts two parameters one is a searchString and the other one is the index from which we want to start the search
- Return: returns index of the string
- Example:

```js
let name =  "Arya Stark" ;
name.indexOf("Stark"): // 5
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.indexOf("jumped"); // 18
let houseName = "Starks";
houseName.indexOf("a"); // 2

`indexOf` can have two parameters and then returns the index of the starting letter of the first string if the string is present, If the string is not present it returns -1


11. `lastIndexOf`
-  Parameter: accepts two parameters one is a searchString and the other one is the index from which we want to start the search the default value is +infinity
-  Return: index of the string
Example

let name = 'Arya Stark';
name.lastIndexOf("r"); // 8
let sentance = 'A quick brown fox jumped over a lazy dog'
sentance.lastIndexOf("g"); // 39
let houseName = 'Starks';
houseName.lastIndexOf("k") // 4

`lastIndexOf` can have two parameters and then returns the index of the starting letter of the first string if the string is present, If the string is not present it returns -1

12. `padEnd`

-  Parameter: accepts two parameters one is a target length and the other is an optional value which can be a string which is used for truncation
-  Return: truncated string
-  Example:


let name = 'Arya Stark';
name.padEnd("15",".");  // "Arya Stark....."
let sentance = 'A quick brown fox jumped over a lazy dog'
sentance.padEnd("45", "."); // "A quick brown fox jumped over a lazy dog....."
let houseName = 'Starks';
houseName.padEnd("10", ".")// "Starks...."

`padEnd` can have two parameters and then adds padding required to the end of the given string



13. `padStart`

-  Parameter: accepts two parameters one is a target length and the other is an optional value which can be a string which is used for truncation
-  Return: truncated string
Example
let name = 'Arya Stark';
name.padStart("21", "0");  // "00000000000Arya Stark"
let sentance = 'A quick brown fox jumped over a lazy dog'
sentance.padStart("60", "0"); // "00000000000000000000A quick brown fox jumped over a lazy dog"
let houseName = 'Starks';
houseName.padStart("10","2")// "2222Starks"

`padStart` can have two parameters and then adds padding required to the start of the given string

14. `repeat`

-  Parameter: accepts a parameter which indicates the number of times to repeat the string which is a number
-  Return: the repeated string
Example
let name = 'Arya Stark';
name.repeat("2");  // "Arya StarkArya Stark"
let sentance = 'A quick brown fox jumped over a lazy dog'
sentance.repeat("4"); // "A quick brown fox jumped over a lazy dogA quick brown fox jumped over a lazy dogA quick brown fox jumped over a lazy dogA quick brown fox jumped over a lazy dog"
let houseName = 'Starks';
houseName.repeat(3)// "StarksStarksStarks"

`repeat` It repeats the string for the given number of times as the number that we have passed as the parameter

15. `replace`

let name = 'Arya Stark';
name.replace("Stark","Thapa");  // "Arya Thapa"
let sentance = 'A quick brown fox jumped over a lazy dog'
sentance.replace("dog","fox"); // "A quick brown fox jumped over a lazy fox"
let houseName = 'Starks';
houseName.replace("Starks", "Sumit")// "Sumit"

16. `slice`

let name = 'Arya Stark';
name.slice(0 , 3);  // "Ary"
let sentance = 'A quick brown fox jumped over a lazy dog'
sentance.slice(4 , 9): // "ick b"
let houseName = 'Starks';
houseName.slice(0 , 2): // "St"
 
17. `split`

let name = 'Arya Stark';
name.split('');  // ["A", "r", "y", "a", " ", "S", "t", "a", "r", "k"] 
let sentance = 'A quick brown fox jumped over a lazy dog'
sentance.split(): // ["A", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", " ", "j", "u", "m", "p", "e", "d", " ", "o", "v", "e", "r", " ", "a", " ", "l", "a", "z", "y", " ", "d", "o", "g"]
let houseName = 'Starks';
houseName.split(): // ["S", "t", "a", "r", "k", "s"]

18. `substring`

let name = 'Arya Stark';
name.substring(6);  // "tark"
let sentance = 'A quick brown fox jumped over a lazy dog'
sentance.substring(26): // "over a lazy dog"
let houseName = 'Starks';
houseName.substring(2): // "arks"

