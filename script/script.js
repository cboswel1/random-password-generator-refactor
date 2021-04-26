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

  if (upper && lower && num && spec) {
    response = upperCase.concat(lowerCase, numbers, special);
  } 
  else if (upper && lower && num) {
      response = upperCase.concat(lowerCase, numbers);
  } 
  else if (upper && lower && spec) {
      response = upperCase.concat(lowerCase, special);
  } 
  else if (upper && spec && num) {
      response = upperCase.concat(special, numbers);
  } 
  else if (spec && lower && num) {
     response = lowerCase.concat(special, numbers);
  }
  else if (upper && spec) {
     response = upperCase.concat(special);
  }
  else if (upper && lower) {
     response = upperCase.concat(lowerCon);
  }
  else if (upper && num) {
     response = upperCase.concat(numbers);
  }
  else if (lower && spec) {
     response = lowerCase.concat(special);
  }
  else if (lower && num) {
     response = lowerCase.concat(numbers); 
  }
  else if (num && spec) {
     response = numbers.concat(special);
  } 
  else if (upper) {
     response = upperCase;
  }
  else if (lower) {
     response = lowerCase;
  } 
  else if (num) {
     response = numbers;
  };
  
  for (var i = 0; i < passLength; i++) {
    var userChoice = response[Math.floor(Math.random() * response.length)];
    pass.push(userChoice);
  };
}

writePassword = (e) => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = pass.join('');
  e.preventDefault();
  document.querySelector('#generate').disabled = true;
  }

generateBtn.addEventListener("click", writePassword);

function resetForm () {
  document.querySelectorAll('input').reset();
}

