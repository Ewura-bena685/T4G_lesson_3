// let names = "Ewurabena";
//console.log(name);

 //let ages = 18;
 //console.log(age);

//let addition = 11 + 4;
//console.log(addition);

//let subtraction = 30 - 10;
//console.log(subtraction);

//let division = 50 / 5;
//console.log(division);

//let product = 6 * 7;
//console.log(product);

//let remainder = 15 % 4;
//console.log(remainder);

//let bool1 = true;
//console.log(bool1);

//let num = 1000;
//console.log(typeof num);


//let text = "Learning JavaScript, kinda nervous.";
//console.log(typeof text);

// Prompt the user to enter a number
//check if it is even or odd
//display that the number the user entered is even or odd
//let number = prompt("Enter a number")
//if( number % 2 == 0){
   // alert(`${number} is even`)
//}else{
   // alert(`${number} is odd`)
//}

//Take user's name
// Ask for age
//if they are 18 and above
// if they are less than 18,

//let name =prompt('What is your name?')
//let age = prompt('How old are you?')
//age = Number(age);
//let email = prompt(" Please enter your email")
//if (age < 12) {
    //alert(`Hi ${name}. You are ${age} years old and you are too young to register.`)
//}else if (age >= 12 && age <= 17){
    //alert(`Hi ${name}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email}`)
//}
//else if (age >= 18) {
    //alert(`Hi ${name}. You are ${age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${email}`)
//}

function checkGender(){ //creating a function to check gender.
    let gender = prompt('What is your gender? Type "M" for Male, "F" for Female '); //asking the user to input their gender. and store in the variable "gender".
    if (gender == 'M' || gender == 'm' || gender == 'Male' || gender == 'male'){
        alert("You are a boy👦🏾");}
    else if (gender == 'F' || gender == 'f' || gender == 'Female' || gender == 'female'){
            alert("You are a girl👧🏾");}
    else{
        alert("Please ask your parents or an adult for help.")
    }

    }
    checkGender();

