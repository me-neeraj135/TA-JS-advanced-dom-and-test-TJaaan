const methods = require(`./index.js`);

test(` firstName and Last name should be , "AryaStark"`, () => {
  expect(methods.getFullName(`Arya`, `Stark`)).toBe(`AryaStark`);
});

test(`check true or false wether value is , "palindrome"`, () => {
  expect(methods.isPalindrome(`malayalam`)).toBe(true);
});

test(`circumference of circle (2 * Math.PI * radius) equal to 628`, () => {
  expect(methods.getCircumference(100)).toBe(628);
});
test(`area of circle (Math.floor(Math.PI * radius ** 2) equal to 314`, () => {
  expect(methods.getArea(10)).toBe(314);
});

// negative testing
test(` firstName and Last name should not to be , "Johntark"`, () => {
  expect(methods.getFullName(`Arya`, `Stark`)).not.toBe(`JohnStark`);
});

test(`check true or false wether value is , "palindrome"`, () => {
  expect(methods.isPalindrome(`malayalam`)).not.toBe(false);
});

test(`circumference of circle (2 * Math.PI * radius)not equal to 0`, () => {
  expect(methods.getCircumference(100)).not.toBe(0);
});

test(`area of circle (Math.floor(Math.PI * radius ** 2) not equal to 0`, () => {
  expect(methods.getArea(10)).not.toBe(0);
});
