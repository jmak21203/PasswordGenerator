// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordOptions = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    character: "!@#$%^&*_-+=",
};
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    passwordText = "";

    var length = prompt("Choose Password Length between 8-128 characters");

    if (length <= 7 || length > 128) {
        window.alert("Password must be between 8-128 characters")
        return;
    }
    var lowercase = confirm("Would you like to include lower case letter?");
    if (lowercase) {
        passwordText += passwordOptions.lowercase;
    }
    var uppercase = confirm("Would you like to include upper case letters?");
    if (uppercase) {
        passwordText += passwordOptions.uppercase;
    }
    var number = confirm("Would you like to include numbers?");
    if (number) {
        passwordText += passwordOptions.number;
    }
    var character = confirm("Would you like to include special characters?");
    if (character) {
        passwordText += passwordOptions.character;
    }

    if (!number && !character && !uppercase && !lowercase) {
        critera = alert("You must select at least one critera.");
    }


};



















