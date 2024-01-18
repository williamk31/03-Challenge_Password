// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   //create password object with empty strings to populate with user choices
   var password = {
    choices: "",
    length: Number(window.prompt("Enter a length between 8 and 128 characters:")),
    finalPassword: "",
    };
//if length input is valid, confirm characters to include
if(password.length >=8 && password.length <=128){
    var lowerCaseConfirm = window.confirm("Do you want to include lowercase characters?");
    var upperCaseConfirm = window.confirm("Do you want to include uppercase characters?");
    var specialCharacterConfirm = window.confirm("Do you want to include special characters?");
    var numericConfirm = window.confirm("Do you want to include numeric characters?");
    //add characters to empty string 'choices' based on user input
    if(lowerCaseConfirm === true){
        password.choices+="abcdefghijklmnopqrstuvwxyz";
    } 
    if(upperCaseConfirm === true){
        password.choices+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(specialCharacterConfirm === true){
        password.choices+="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    if(numericConfirm === true){
        password.choices+="0123456789";
    }else{
        window.confirm("Please choose at least one character type")
    }
    //call genPass function to generate the password
genPass ();
//if password length is invalid, user must try again
}else if(password.length <8 || password.length >128){
    window.alert("Invalid Length. Please try again.")
}
//generate a random password with characters from 'choices'
function genPass() {
    for (var i=0; i<=password.length-1; i++){
        password.finalPassword+=password.choices[Math.floor(Math.random()* password.choices.length)];
    };
    var passwordText = document.querySelector("#password");
    passwordText.value = password.finalPassword;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
