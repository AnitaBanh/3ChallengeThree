// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered


// assign var to hold user responses to prompt and confirm windows.
var pwLength;
var special;
var lowerCase;
var upperCase;
var numeric;
// var to hold generated password as a string
var tryRunningPassword = "";
// Assign array for four password parameter options
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "/", "?", "<", ">", "[", "]", "{", "}", "`"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Prompt user to choose number beteween 8 and 128. validate entry is a number in that range. return to var to save length
function determinLength() {
  pwLength = window.prompt("How many long should the password be?");
  if (pwLength < 8) {
    alert("Password length must be at least 8 characters.")
    determinLength()
  } else if (pwLength > 128) {
    alert("Password length may be at most 128 characters.")
    determinLength()
  } else if (isNaN(pwLength)) {
    alert("password length must be a number")
    determinLength()
  } else { alert("next, we will determine what type of characters you want in your password.") }
  return pwLength
}

// Determine password parameters. Ask user whether or not to include lowercase, uppercase, numeric, and/or special characters.
// four confirm prompts
function determineSpecialCharacters() {
  special = window.confirm("Would you like to include special characters?")
  return special
}

function determineLowercase() {
  lowerCase = window.confirm("Would you like to include lower case letters?")
  return lowerCase
}

function determineUppercase() {
  upperCase = window.confirm("Would you like to include upper case letters?");
  return upperCase;
}

function determineNumeric() {
  numeric = window.confirm("Would you like to include numbers?");
  return numeric;
}

// (optional if user says no to all, alert and rerun the loop of questions. Validate that at least one category was chosen.)

// If user selected yes to include, then concatinate the parameters which the user confirmed.  

function generatePassword() {
  determinLength()
  determineSpecialCharacters()
  determineLowercase()
  determineUppercase()
  determineNumeric()

  var passwordCharacters = []
  if (special) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }
  if (lowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCaseCharacters)
  }
  if (upperCase) {
    passwordCharacters = passwordCharacters.concat(upperCaseCharacters)
  }
  if (numeric) {
    passwordCharacters = passwordCharacters.concat(numericCharacters)
  }
  // Decide how many elements to choose from each array. join chosen elements into a string. 
  console.log(passwordCharacters)
  for (i = 0; i < pwLength; i++) {
    var randomChar = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    tryRunningPassword += randomChar;
    console.log(randomChar);
    console.log(tryRunningPassword);
  }
  return tryRunningPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
