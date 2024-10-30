function printName(){
    console.log("Kholoud");
}
 printName();

 function printAge(birthYear){
    console.log(`you are ${2024-birthYear}`);
 }

 printAge(2000)

 function printAgeAndName(birthYear, name){
    console.log( `Hello ${name} you are ${2024-birthYear}years old.  `);
 }

 printAgeAndName(2003, "laila");

function printHello(name, language){
    if(language ==="en"){
        console.log(`Hello ${name}`);
    }else if(language ==="es"){
        console.log(`Hola ${name}`);
    }else if(language ==="fr"){
        console.log(`Bonjour ${name}`);
    }else if(language ==="tr"){
        console.log(`Merhaba ${name}`);
    }
}

function printMax(firstNumber, secondNumber){
    if(firstNumber>secondNumber) {
        console.log(firstNumber);
    }else{
        console.log(secondNumber);
    }
}

printMax(5,2);


