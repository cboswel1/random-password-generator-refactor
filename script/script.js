const generateBtn = document.querySelector("#generate");

let pass= [];

generatePassword = () => {
  let passLength = document.querySelector('.passlength').value
  let upper = document.querySelector(".uppercase");
  let lower = document.querySelector(".lowercase");
  let num = document.querySelector(".nums"); 
  let spec = document.querySelector(".special");

	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
	const lowerCase = "abcdefghijklmnopqrstuvwxyz"
	const numbers = "1234567890"
	const special = "!@#$%^&*()"

  let response = ""; 

  if (upper.checked == true && lower.checked == true && num.checked == true && spec == true) {
    response = upperCase.concat(lowerCase, numbers, special);
  } 
  else if (upper.checked == true && lower.checked == true && num.checked == true) {
      response = upperCase.concat(lowerCase, numbers);
  } 
  else if (upper.checked == true && lower.checked == true && spec.checked == true) {
      response = upperCase.concat(lowerCase, special);
  } 
  else if (upper.checked == true && spec.checked == true && num.checked == true) {
      response = upperCase.concat(special, numbers);
  } 
  else if (spec.checked == true && lower.checked == true && num.checked == true) {
     response = lowerCase.concat(special, numbers);
  }
  else if (upper.checked == true && spec.checked == true ) {
     response = upperCase.concat(special);
  }
  else if (upper.checked == true && lower.checked == true) {
     response = upperCase.concat(lowerCon);
  }
  else if (upper.checked == true && num.checked == true) {
     response = upperCase.concat(numbers);
  }
  else if (lower.checked == true && spec.checked == true) {
     response = lowerCase.concat(special);
  }
  else if (lower.checked == true && num.checked == true) {
     response = lowerCase.concat(numbers); 
  }
  else if (num.checked == true && spec.checked == true) {
     response = numbers.concat(special);
  } 
  else if (upper.checked === true) {
     response = upperCase;
  }
  else if (lower.checked === true) {
     response = lowerCase;
  } 
  else if (num.checked === true) {
     response = numbers;
  };
  
  for (var i = 0; i < passLength; i++) {
    var userChoice = response[Math.floor(Math.random() * response.length)];
    pass.push(userChoice);
  };
}

writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = pass.join('');

  }

generateBtn.addEventListener("click", writePassword);
