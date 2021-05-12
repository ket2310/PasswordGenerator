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
   while (pwLength < 8) {
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
   for (var i = 0; i < makePassword.length; i++) {
      if (!makePassword[i]) {
         alert("You must choose at least one character type to generate your password.");
         break;
      }
      else {
         alert("Generating password.  Click Ok to see the result.")
         break;
      }
   }

   
   //var newPassword =  
   securePassword(pwLength, makePassword);


   const randomFunc = {
      lower: getRandomLower,
      upper: getRandomUpper,
      number: getRandomNumber,
      symbol: getRandomSymbol
   }
   
   function securePassword(lgth, contents) {
      let finalPassword = "";

      const typesCount = makePassword[0] + makePassword[1] + makePassword[2] + makePassword[3];

      const arrayOfTypes = [makePassword[0], makePassword[1], makePassword[2], makePassword[3]];
      console.log("Count: = " + typesCount);
      console.log("Array of types = " + arrayOfTypes);

      // if (typesCnt === 0)
      //    return "";
      // else {
      //    // create a loop
      //    for (let i = 0; i < length; i += typesCount) {
      //       typesArr.forEach(type => {
      //          const funcName = Object.keys(type)[0];
      //          generatedPassword += randomFunc[funcName]();
      //       });
      //    }
      // }
   }

   // Generator functions
   function getRandomLower() {
      return String.fromCodePoint(Math.floor(Math.random() * 26) + 97); //97 - 122; a - z        
   }

   function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //65 - 90; A - Z
   }

   function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
   }

   function getRandomSymbol() {
      const symbols = '!@#$%^&*(){}[]=<>+';
      return symbols[Math.floor(Math.random() * symbols.length)];
   }

}