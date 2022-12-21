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


var length;
var tryRunningPassword="";
var special;
var lowerCase;
var upperCase;
var numeric;
var specialCharacters= ["~", "!", "@", "#", "$", "%", "^", "&", "'", "*", "(", ")", "-", "+", "=", "/", "?", "<", ">", "[", "]", "{", "}", "`"]
var lowerCaseCharacters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseCharacters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericCharacters=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//add var for the others individually

// Determine password length
function determinLength () {
   length = window.prompt("How many long should the password be?");
  if (length < 8 ) {
    alert("Password length must be at least 8 characters.")
    determinLength()
  } else if (length > 129) {
    alert("Password length must be less than 129 characters.")
    determinLength()
  } else if (isNaN(length)){ 
    alert("password length must be a number")
    determinLength()
  } else {alert("next, we will determine what type of characters you want in your password.")}
  return length
}
// array of password parameters
// function to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
function determineSpecialCharacters (){
  special = window.confirm("Would you like to include special characters?")
  return special
}

function determineLowercase (){
  lowerCase = window.confirm("Would you like to include lower case letters?")
  return lowerCase
}

function determineUppercase (){
  upperCase = window.confirm("Would you like to include upper case letters?")
  return upperCase
}

function determineNumeric (){
  numeric = window.confirm("Would you like to include numbers?")
  return numeric
}
// function to concatinate the parameters which the user confirmed, true. 
function generatePassword (){
  determinLength()
  determineSpecialCharacters()
  determineLowercase()
  determineUppercase()
  determineNumeric()
  
// add the functions for upper case and numbers (optional if all false alert and rerun the loop of questions.)
var passwordCharacters = ""
if (special){
  passwordCharacters=passwordCharacters.concat(specialCharacters)
}
if (lowerCase){
  passwordCharacters=passwordCharacters.concat(lowerCaseCharacters)
}
if (upperCase){
  passwordCharacters=passwordCharacters.concat(upperCase)
}
if (numeric){
  passwordCharacters=passwordCharacters.concat(numeric)
}
for(i=0; i<length; i++){
tryRunningPassword=tryRunningPassword+passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
}
return tryRunningPassword
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
