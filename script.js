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
//function to confirm input and generate passowrd
function generatePassword() {
    passwordText = "";
    //prompts user how long they would like their password to be.
    var length = prompt("Choose Password Length between 8-128 characters");
    //checks to make sure user input an answer between 8-128. If not alerts and returns to beginning.
    if (length <= 7 || length > 128) {
        window.alert("Password must be between 8-128 characters")
        return;
    }
    //confirms if user would like to use lower case letters. includes resonse into formula to generate random password.
    var lowercase = confirm("Would you like to include lower case letter?");
    if (lowercase) {
        passwordText += passwordOptions.lowercase;
    }
    //confirms if user would like to use upper case letters. includes resonse into formula to generate random password.
    var uppercase = confirm("Would you like to include upper case letters?");
    if (uppercase) {
        passwordText += passwordOptions.uppercase;
    }
    //confirms if user would like to use numbers. includes resonse into formula to generate random password.
    var number = confirm("Would you like to include numbers?");
    if (number) {
        passwordText += passwordOptions.number;
    }
    //confirms if user would like to use special characters. includes resonse into formula to generate random password.
    var character = confirm("Would you like to include special characters?");
    if (character) {
        passwordText += passwordOptions.character;
    }
    //validates to ensure user selected at least one of the catergories for their passowrd. Alerts if they failed to choose at least one.
    if (!number && !character && !uppercase && !lowercase) {
        critera = alert("You must select at least one critera.");
    }
    //math to generate password. Takes user input to randomize password.
    var password = "";
    for (let i = 0; i < length; i++) {
        password += passwordText[Math.floor(Math.random() * passwordText.length)]
    }
    return password;

};



















