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

function generatePassword() {
/* 
  GIVEN I need a new, secure password
     WHEN I click the button to generate a password
     THEN I am presented with a series of prompts for password criteria
     
     WHEN prompted for password criteria
     THEN I select which criteria to include in the password
*/
   var oneUppercase = confirm("Include one uppercase letter in password?");
   var oneLowercase = confirm("Include one lowercase letter in password?");
   var hasNumbers = confirm("Include numbers in password?");
   var hasSymbols = confirm("Include at least one symbol in password (ex: @,$,&,^,*,");

/*
   WHEN prompted for the length of the password
   THEN I choose a length of at least 8 characters and no more than 128 characters
*/

    var pwLength = prompt("Enter the desired length of the password (must be at least 8 characters).");
    if (pwLength < 8)
        alert("password length is too short.  Must be at least 8 characters");
        


}