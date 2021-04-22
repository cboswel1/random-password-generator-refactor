



// Variables with potential user criteria
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const special = "!@#$%^&*()"



var generateBtn = document.querySelector("#generate");

// empty array for loop of user criteria. 
var pass= [];

// Function to generate password
function generatePassword() {

  // stores users choice from possible selection criteria.  
  var response = ""; 

    //User Prompts Section

    // tell user that they must choose between a range of characters. 8 min, 128 max; 

  const passLength = prompt ("All valid passwords have a minimum of 8 character, and a maximum of 128, please choose now." )

    // if user fails to make choice
  if (!passLength) {
      alert("You need to enter a value");

  } 
  
   //if user chooses number outside of parameters
  else if (passLength < 8 || passLength > 128) {
      alert("You must choose a password between 8 and 128!")

  } 
  
  else {

    // Ask user if they wish to have uppercase letters in their password 

      var upperCon = confirm("Would you like to use uppercase characters in your password?"); 
  
    // Ask user if they wish to have lowercase letters in their password 
    
      var lowerCon = confirm("Would you like to use lowercase characters in your password?"); 

    //Ask user if they wish to have numbers in their password 
    
      var numbersCon = confirm("Would you like to use numbers in your password?"); 

    // Ask user if they wish to have special characters in their password 

      var specialCon = confirm("Would you like to use special characters in your password?");
  }; 
  
    // Let user know they must select at least one criteria 

  if (!upperCon && !lowerCon && !numbersCon && !specialCon) {
      alert("You must choose at least one criteria. Try again");
  } 
  // List of all possible user choices 

  // all choices
  else if (upperCon && lowerCon && numbersCon && specialCon) {
      response = upperCase.concat(lowerCase, numbers, special);
  }
  // 3 choice
  else if (upperCon && lowerCon && numbersCon) {
      response = upperCase.concat(lowerCase, numbers);
  } 
  // 3 choice
  else if (upperCon && lowerCon && specialCon) {
      response = upperCase.concat(lowerCase, special);
  } 
  // 3 choice
  else if (upperCon && specialCon && numbersCon) {
      response = upperCase.concat(special, numbers);
  } 
  // 3 choice 
  else if (lowerCon && specialCon && numbersCon) {
     response = lowerCase.concat(special, numbers);
  }
  // 2 choice 
  else if (upperCon && specialCon) {
     response = upperCase.concat(special);
  }
  // 2 choice
  else if (upperCon && lowerCon) {
     response = upperCase.concat(lowerCon);
  }
  // 2 choice 
  else if (upperCon && numbersCon) {
     response = upperCase.concat(numbers);
  }
  // 2 choice 
  else if (lowerCon && specialCon) {
     response = lowerCase.concat(special);
  }
  // 2 choice 
  else if (lowerCon && numbersCon) {
     response = lowerCase.concat(numbers); 

  }
  // 2 choice 
  else if (numbersCon && specialCon) {
     response = numbers.concat(special);
  }
  // 1 choice 
  else if (upperCon) {
     response = upperCase;
  }
  // 1 choice 
  else if (lowerCon) {
     response = lowerCase;
  }
  // 1 choice 
  else if (numbersCon) {
     response = numbers;
  };

  // loop that can take in user's choice (response), and randomize selection based on length
  for (var i = 0; i < passLength; i++) {
    var userChoice = response[Math.floor(Math.random() * response.length)];
    //.push to take userChoice variable outcome and plug into empty pass array
    pass.push(userChoice);
  };
}

    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      // .join('') to remove commas from final output 
      passwordText.value = pass.join('');

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
