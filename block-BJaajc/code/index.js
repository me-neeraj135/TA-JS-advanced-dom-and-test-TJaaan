// Write the function in `index.js` file and also write the test in `index.test.js` file for the following functions. While writing test make sure you write at-least 3 positive and 3 negative test.

// - Positive Test verifies expected behavior with valid data.
// - Negative Test verifies expected behavior with invalid data.
// - Edge Case is a subset of positive tests, which checks the extreme edges of valid values.

// 1. Write a function named `getFullName` that accepts two input `firstName` and `lastName` and return the `fullName`

function getFullName(firstName, lastName) {
  return firstName + lastName;
}

// 2. Write a function named `isPalindrome` that accepts one input returns `true` or `false` based on wether the value passed is palindrome or not.

function isPalindrome(str) {
  let splitted = str.split(``);
  let joinString = splitted.join();

  let reversed = splitted.reverse();
  return joinString === reversed.join();
}

// 3. Create 2 functions that calculate properties of a circle, using the definitions here.

// - Create a function called `getCircumference`:

// Pass the radius of a circle to the function and it returns the circumference based on the radius, and output `The circumference is NN`.

function getCircumference(radius) {
  return Math.floor(2 * Math.PI * radius);
}

// - Create a function called `getArea`:

// Pass the radius to the function and it returns the area based on the radius, and output `The area is NN`.

function getArea(radius) {
  return Math.floor(Math.PI * radius ** 2);
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
};