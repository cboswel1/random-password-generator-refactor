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

  if (upper.checked  && lower.checked  && num.checked  && spec) {
    response = upperCase.concat(lowerCase, numbers, special);
  } 
  else if (upper.checked && lower.checked && num.checked) {
      response = upperCase.concat(lowerCase, numbers);
  } 
  else if (upper.checked && lower.checked && spec.checked) {
      response = upperCase.concat(lowerCase, special);
  } 
  else if (upper.checked && spec.checked && num.checked) {
      response = upperCase.concat(special, numbers);
  } 
  else if (spec.checked && lower.checked && num.checked) {
     response = lowerCase.concat(special, numbers);
  }
  else if (upper.checked && spec.checked ) {
     response = upperCase.concat(special);
  }
  else if (upper.checked && lower.checked) {
     response = upperCase.concat(lowerCon);
  }
  else if (upper.checked && num.checked) {
     response = upperCase.concat(numbers);
  }
  else if (lower.checked && spec.checked) {
     response = lowerCase.concat(special);
  }
  else if (lower.checked && num.checked) {
     response = lowerCase.concat(numbers); 
  }
  else if (num.checked && spec.checked) {
     response = numbers.concat(special);
  } 
  else if (upper.checked) {
     response = upperCase;
  }
  else if (lower.checked) {
     response = lowerCase;
  } 
  else if (num.checked) {
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

