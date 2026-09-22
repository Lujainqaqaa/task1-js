
let menu = [
    {
        name : "burger" ,
        Price : 5 ,
        cotegory : "main" ,
        available :true
    } ,


    {

         name : "pizza",
        Price : 4 ,
        cotegory : "main" ,
        available : true 
    },

    {

         name : "zinger",
        Price : 3,
        cotegory : "main" ,
        available : false 
    },

    {
         name : "fries" ,
        Price :2 ,
        cotegory : "snake" ,
        available : true 
    } ,

    {
         name :"cole" ,
        Price :1 ,
        cotegory : "drink" ,
        available : true
    }
] ;

function showMenu() {
    for ( let i=0 ; i < menu.length ; i++  ) {

        console.log(menu[i].name);
        console.log(menu[i].Price);
        console.log(menu[i].cotegory);
        console.log(menu[i]. available);


    }
}
showMenu();



let foodName= prompt ("Enter food name:");
let selectFood ;



while(selectFood === null){
    for (let i=0 ; i< menu.length ; i++) {

        if (menu[i].available === false){
            continue; 
}
if (menu[i].name == food) {
    selectFood = menu[i];
    break;
 }
}


if ( selectFood==null) {
    food =prompt("food is not available .Enter another food");

}
}


//display food 

for (let x in selectFood) {
    console.log(x + ":" + selectFood[x]);

}


let quantity = prompt("enter quantity");
let total = selectFood.Price * quantity ;


document.write("<h2>order summary </h2>" );
document.write("Food :"+selectFood.name+"<br>" );
document.write("price :"+selectFood.price+"<br>"  );
document.write( "quantity :"+quantity+"<br>" );
document.write("Total :"+total );



//task3

//Q1

function reverseNumber(number) {

    let result = "";

    let text = number.toString();

    for (let i = text.length - 1; i >= 0; i--) {

        result = result + text[i];

    }

    return result;
}

let number= 532443;

console.log(reverseNumber(number));





//Q2
for (let i = 0; i <= 15; i++) {

    if (i % 2 == 0) {

        console.log(i + " is even");

    } else {

        console.log(i + " is odd");

    }
}



let number2 = "025468";

let result = "";

for (let i = 0; i < number.length; i++) {

    result = result + number[i];

    if (number[i] % 2 == 0 && number[i + 1] % 2 == 0) {

        result = result + "-";

    }
}

console.log(result);



//Q4
function Agechecker(age) {

    if (age >= 18) {

        console.log("The user is Adult");

    } else {

        console.log("The user is Minor");

    }
}

let age = prompt("Enter your age");

Agechecker(age);