// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Declaring all password options variables
var password_length = 0;
var specialCharacters = {
  name: 'special',
  array: specialCharacters,
  bool: false
}
var numericCharacters = {
  name: 'numeric',
  array: numericCharacters,
  bool: false
}
var lowercase = {
  name: 'lowercase',
  array: lowerCasedCharacters,
  bool: false
}
var uppercaseLetters = {
  name: 'uppercase',
  array: upperCasedCharacters,
  bool: false
}
// Character option variable
var characterOptions = [lowercase, uppercaseLetters, numericCharacters, specialCharacters];

// Function to prompt user for password options
function getPasswordOptions() {
  password_length=prompt("What is the password lenght (10-64)")
  if(password_length<10) {
    alert ("Password lenght cannot be less than 10 characters");
    generatePassword();
  }
  if(password_length>64) {
    alert("Password lenght cannor be more than 64");
    generatePassword();
  }
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);