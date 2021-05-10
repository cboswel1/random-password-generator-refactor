document.body.className = 'fade';

anime({
  targets: '#title path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 40 },
  direction: 'alternate',
  loop: false
});

const generateBtn = document.getElementById("generate");

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

  const isUpper = upper.checked; 
  const isLower = lower.checked; 
  const isNumber = num.checked; 
  const isSpecial = spec.checked

  let response = ""; 

  if (isUpper && isLower && isNumber && isSpecial) {
    response = upperCase.concat(lowerCase, numbers, special);
  } 
  else if (isUpper && isLower && isNumber) {
      response = upperCase.concat(lowerCase, numbers);
  } 
  else if (isUpper && isLower && isSpecial) {
      response = upperCase.concat(lowerCase, special);
  } 
  else if (isUpper && isSpecial && isNumber) {
      response = upperCase.concat(special, numbers);
  } 
  else if (isSpecial && isLower && isNumber) {
     response = lowerCase.concat(special, numbers);
  }
  else if (isUpper && isSpecial) {
     response = upperCase.concat(special);
  }
  else if (isUpper && isLower) {
     response = upperCase.concat(lowerCase);
  }
  else if (isUpper && isNumber) {
     response = upperCase.concat(numbers);
  }
  else if (isLower && isSpecial) {
     response = lowerCase.concat(special);
  }
  else if (isLower && isNumber) {
     response = lowerCase.concat(numbers); 
  }
  else if (isNumber && isSpecial) {
     response = numbers.concat(special);
  } 
  else if (isUpper) {
     response = upperCase;
  }
  else if (isLower) {
     response = lowerCase;
  } 
  else if (isNumber) {
     response = numbers;
  }
  else if (isSpecial) {
   response = special;
  } ;
  
  for (let i = 0; i < passLength; i++) {
    let userChoice = response[Math.floor(Math.random() * response.length)];
    pass.push(userChoice);
  };
}

function writePassword(e) {
  e.preventDefault();

  const password = generatePassword();
  const passwordText = document.getElementById("password");
  passwordText.value = pass.join('');
}

generateBtn.addEventListener("click", writePassword);



