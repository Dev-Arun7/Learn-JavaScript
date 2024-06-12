// Length of the string
let str = "Hello, World!";
console.log(str.length); // 13

// Convert to uppercase
let upperStr = str.toUpperCase();
console.log(upperStr); // "HELLO, WORLD!"

// Convert to lowercase
let lowerStr = str.toLowerCase();
console.log(lowerStr); // "hello, world!"

// Find the index of a substring
let index = str.indexOf("World");
console.log(index); // 7

// Check if string contains a substring
let contains = str.includes("World");
console.log(contains); // true

// Extract a part of the string (substring)
let part = str.substring(7, 12);
console.log(part); // "World"

// Replace a substring with another substring
let newStr = str.replace("World", "Everyone");
console.log(newStr); // "Hello, Everyone!"

// Trim whitespace from both sides
let spacedStr = "   Hello, World!   ";
let trimmedStr = spacedStr.trim();
console.log(trimmedStr); // "Hello, World!"

// Split the string into an array
let strArray = str.split(", ");
console.log(strArray); // ["Hello", "World!"]

// Repeat the string
let repeatedStr = str.repeat(2);
console.log(repeatedStr); // "Hello, World!Hello, World!"

// charAt() - Returns the character at a specified index
let charAtIndex = str.charAt(6);
console.log(charAtIndex); // ","

// charCodeAt() - Returns the Unicode of the character at a specified index
let charCodeAtIndex = str.charCodeAt(6);
console.log(charCodeAtIndex); // 44 (Unicode for ',')

// concat() - Joins two or more strings
let greeting = "Hello";
let place = "World";
let concatenatedStr = greeting.concat(", ", place, "!");
console.log(concatenatedStr); // "Hello, World!"

// endsWith() - Checks if a string ends with a specified value
let endsWith = str.endsWith("!");
console.log(endsWith); // true

// startsWith() - Checks if a string starts with a specified value
let startsWith = str.startsWith("Hello");
console.log(startsWith); // true

// fromCharCode() - Converts Unicode values to characters
let charFromCode = String.fromCharCode(72, 101, 108, 108, 111);
console.log(charFromCode); // "Hello"

// padStart() - Pads the current string with another string (from the start) until the resulting string reaches the given length
let paddedStartStr = str.padStart(20, "*");
console.log(paddedStartStr); // "******Hello, World!"

// padEnd() - Pads the current string with another string (from the end) until the resulting string reaches the given length
let paddedEndStr = str.padEnd(20, "*");
console.log(paddedEndStr); // "Hello, World!******"

// repeat() - Returns a new string with a specified number of copies of the original string
let repeatedStr2 = str.repeat(3);
console.log(repeatedStr2); // "Hello, World!Hello, World!Hello, World!"

// slice() - Extracts a part of a string and returns a new string
let slicedStr = str.slice(7, 12);
console.log(slicedStr); // "World"

// split() - Splits a string into an array of substrings
let splitStr = str.split(" ");
console.log(splitStr); // ["Hello,", "World!"]

// substr() - Extracts a substring from a string, starting at a specified index and extending for a given number of characters
let substrStr = str.substr(7, 5);
console.log(substrStr); // "World"

// toLocaleLowerCase() - Converts the string to lowercase according to the host’s current locale
let localeLowerStr = str.toLocaleLowerCase();
console.log(localeLowerStr); // "hello, world!"

// toLocaleUpperCase() - Converts the string to uppercase according to the host’s current locale
let localeUpperStr = str.toLocaleUpperCase();
console.log(localeUpperStr); // "HELLO, WORLD!"

// valueOf() - Returns the primitive value of a String object
let strValue = str.valueOf();
console.log(strValue); // "Hello, World!"

