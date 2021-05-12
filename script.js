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
   1  WHEN I click the button to generate a password
     THEN I am presented with a series of prompts for password criteria
     
   2  WHEN prompted for password criteria
     THEN I select which criteria to include in the password
*/
   var criteria = ["Include uppercase letters in password?",
                   "Include lowercase letters in password?",
                   "Include numbers in password?",
                   "Include at least one symbol in password (ex: @,$,&,^,*)"];


/*
  3 WHEN prompted for the length of the password
   THEN I choose a length of at least 8 characters and no more than 128 characters
*/

var pwLength = prompt("Enter the desired length of the password (must be at least 8 characters).");
while (pwLength < 8){
   alert("password length is too short.  Must be at least 8 characters");
   pwLength = prompt("Enter the desired length of the password (must be at least 8 characters).");
}


/*
  4 WHEN prompted for character types to include in the password
   THEN I choose lowercase, uppercase, numeric, and/or special characters
*/
   var makePassword = new Array();
   for (var i = 0; i < criteria.length; i++) {
      makePassword[i] = confirm(criteria[i]);
   }

 /*
  5 WHEN I answer each prompt
   THEN my input should be validated and at least one character type should be 
   selected
*/       
   for (var i = 0; i < makePassword.length; i++)
   {
      if (!makePassword[i])
      {
         alert("You must choose at least one character type to generate your password.");
         break;
      }
      else
      {
         alert("Generating password.  Click Ok to see the result.")
         break;
      }
   }

}