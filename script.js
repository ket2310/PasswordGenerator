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

   // const hasupper = confirm(criteria[0]);
   // const haslower = confirm(criteria[1]);
   // const hasnumber = confirm(criteria[2]);
   // const hassymbol = confirm(criteria[3]);

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

   const randomFunc = {
      lower: getRandomLower,
      upper: getRandomUpper,
      number: getRandomNumber,
      symbol: getRandomSymbol
   }

   var newPassword =    securePassword(pwLength, makePassword) 


   function securePassword(lgth, contents) {
      let generatedPassword = "";

      const typesCount = contents[0] + makePassword[1] + contents[2] + contents[3];

      const arrayOfTypes = [{"upper": contents[0]}, {"lower": contents[1]}, {"number": contents[2]},{"symbol": contents[3]}].filter
      (
         item => Object.values(item)[0]);
      console.log("Count: = ", typesCount);
      console.log("Array of types = ", arrayOfTypes);


      if (typesCount === 0)
         return "";
      else {
         // create a loop
         for (let i = 0; i < lgth; i += typesCount) {
            arrayOfTypes.forEach(type => {
               const funcName = Object.keys(type)[0];
               generatedPassword += randomFunc[funcName]();
            });
         }
      }
      const finalPassword = generatedPassword.slice(0, lgth);
      console.log(finalPassword);
      return finalPassword;
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

   return newPassword;
}