// Assignment code here
var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numberChars = '1234567890';
var specialChars = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var upperCaseCheck;
var specialCheck;
var numberCheck;
var passwordLength;

// get password length
function getLength(){
  passwordLength = prompt('How long would you like your password to be? (between 8 and 128 characters): ');
  if(passwordLength < 8){
    alert('Password must be 8 characters at least.');
    getLength();
  }else if(passwordLength > 128){
    alert('Password cannot be longer than 128 characters.');
    getLength();
  }else if(isNaN(passwordLength)){
    alert('Password length must be a number between 8 and 128.');
    getLength();
  }else{
    alert('Thank you! Only a few more questions.');
  }
  return passwordLength;
}
// ask to include numbers
function askNumbers(){
  numberCheck = prompt('Do you want numbers in your password?');
  numberCheck = numberCheck.toLowerCase();

  if(numberCheck === 'yes' || numberCheck === 'y'){
    numberCheck = true;
    return numberCheck;
  }else if(numberCheck === 'no' || numberCheck === 'n'){
    numberCheck = false;
    return numberCheck;
  }else if(numberCheck === "" || numberCheck === null){
    alert("Please respond yes or no.");
    askNumbers();
  }else{
    alert('Please answer yes or no.');
    askNumbers();
  }
  return numberCheck;
}

// ask to include upper case

function askUpper(){
  upperCaseCheck = prompt('Would you like to include upper case characters?');
  upperCaseCheck = upperCaseCheck.toLowerCase();

  if(upperCaseCheck === 'yes' || upperCaseCheck === 'y'){
    upperCaseCheck = true;
    return upperCaseCheck;
  }else if(upperCaseCheck === 'no' || upperCaseCheck === 'n'){
    upperCaseCheck = false;
    return upperCaseCheck;
  }else if(upperCaseCheck === "" || upperCaseCheck === null){
    alert('Please respond yes or no.');
    askUpper();
  }else{
    alert('Please respond yes or no.');
    askUpper();
  }
  return upperCaseCheck;
}

// ask to include special chars

function askSpecial(){
  specialCheck = prompt('Do you want to include special characters?');
  specialCheck = specialCheck.toLowerCase();

  if(specialCheck === 'yes' || specialCheck === 'y'){
    specialCheck = true;
    return specialCheck;
  }else if(specialCheck === 'no' || specialCheck === 'n'){
    specialCheck = false;
    return specialCheck;
  }else if(specialCheck === "" || specialCheck === null){
    alert("Please respond yes or no.");
    askSpecial();
  }else{
    alert("Please respond yes or no.");
    askSpecial();
  }
  return specialCheck;
}


//generate password
function generatePassword(){
  getLength();
  askNumbers();
  askSpecial();
  askUpper();

  var characters = lowerCaseChars;
  var password = '';

  if(upperCaseCheck && specialCheck && numberCheck){
    characters += upperCaseChars + specialChars + numberChars;
  }else if(upperCaseCheck && specialCheck){
    characters += upperCaseChars + specialChars;
  }else if(upperCaseCheck && numberCheck){
    characters += upperCaseChars + numberChars;
  }else if(numberCheck && specialCheck){
    characters += numberChars + specialChars;
  }else if(upperCaseCheck){
    characters += upperCaseChars;
  }else if(specialCheck){
    characters += specialChars;
  }else if(numberCheck){
    characters += numberChars;
  }else{
    characters === lowerCaseChars;
  }

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password1 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password1;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


