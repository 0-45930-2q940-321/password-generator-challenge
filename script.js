// Assignment code here

//Making arrays for every Number/Character(Captail and lower) and Special characters
//Seperating each variable with their own arrays
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '/', '|', '{', '}', '_', '.', '`', '~']

//When 'Generate Password' button is clicked it'll start several prompts to register the length of the password, minimum of 8 max of 128 characters, as well as to include; special characters, numbers, upper or lower case letters
function passwordCreationInfo() {
  //parseInt will return the entered string as an integer
  var getPasswordLength = parseInt(prompt('Enter a number to generate a length! Must be between 8 ~ 128'));

  if (isNaN(getPasswordLength)) {
    alert('You must enter a number! Don\'t you know how to count?😡');
    passwordCreationInfo();
  }
  else if (getPasswordLength < 8 || getPasswordLength > 128) {
    alert('I said it has to be between 8 and 128! 🙄')
    passwordCreationInfo();
  }
    //Asking if to add Upper Case to the password generation
    var addLowerCase = confirm('Lets start with some choices for your password, want some LOWERCASES? 😎');

    //Asking if to add Lower Case to the password generation
    var addUpperCase = confirm('UPPERCASES is better than lowercases and who doesn\'t like having the best 🥰');


    //Asking if to add Numbers to the password generation
    var addNumbers = confirm('NUMBERS are pretty neat lets grab some 😜');


    //Asking to add special Characters to the password generation
    var addSpecialChar = confirm('Want some super secret SPECIAL CHARACTERS? 😈');


    //If all variables return false it will not count
    if (!addUpperCase && !addLowerCase && !addNumbers && !addSpecialChar) {

      alert('MINIMUM OF 1 CHOICE NEEDED! And it\'s not gonna be good if you don\'t have atleast 3 🤔');
      return;
    }
}

//Passing a parameter called 'fourArrays' to get a random number/character from an array with a set length.
function getRandomCharacter(fourArrays) {
  let randomCharacterOrNumber = Math.floor(Math.random() * fourArrays.length);
  let selectedCharacter = fourArrays[randomCharacterOrNumber];

  return selectedCharacter;
}

//Generating the password of all the given characters/numbers
function generatePassword() {
  //Store the password being created
  let createPassword = [];
  //Any true values, will have the concat values of an array being passed through. Then it will be add into the password
  let selectedChoices = [];

  //Concat will merge the 2 variables into 1 array, will not change the array however.
  // If the boolean value of addLowerCase is true it will confirm the lowercase and add it into the 'selectedChoices'
  if (addLowerCase) {
    selectedChoices = selectedChoices.concat(lowerCase);
  }
  // If the boolean value of addUpperCase is true it will confirm the lowercase and add it into the 'selectedChoices'
  if (addUpperCase) {
    selectedChoices = selectedChoices.concat(upperCase);
  }
  // If the boolean value of addNumbers is true it will confirm the lowercase and add it into the 'selectedChoices'
  if (addNumbers) {
    selectedChoices = selectedChoices.concat(num);
  }
  // If the boolean value of addSpecialChar is true it will confirm the lowercase and add it into the 'selectedChoices'
  if (addSpecialChar) {
    selectedChoices = selectedChoices.concat(specialChar);
  }

  //Making a quick variable to push the random characters/numbers we get. What we get is dependent on which window.confirm is true.
  for (let i = 0; i < getPasswordLength.length; i++) {
    let p = getRandomCharacter(selectedChoices);

    createPassword.push(p);
  }

  return createPassword.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
