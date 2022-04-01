function showMultTable(userInput) {
    for (let i = 1; i <= 10; i++) {
        console.log( userInput + " x " + i + " = " + (userInput * i) );
    }
}

showMultTable(7);

//  return Math.random() * (max - min) + min;

for (let i = 0; i <= 10; i++ ){
    var randomNum = Math.floor(Math.random() * (200 - 20)) + 20;

    if(randomNum % 2 === 0){
        console.log(randomNum + "is even")

    }else {
        console.log(randomNum + "is odd")
    }

}

for(let i = 1; i< 5; i++){
    var output = "";
    for(let j = 0; j< i; j++){
        output += i;
        console.log("J:" + j);

    }
    console.log(output);
    console.log("i:" + i);
}



for(let i = 100; i>= 5; i-=5){
    console.log(i);
}

var userInput = prompt("Enter a number between 1 and 50");
for(var i= 1; i < 50; i ++ ){
    if(userInput % 2 == 0){
        continue;
    }
    if (userInput == i){
        console.log("Skipping this one: " + userInput);

    }else{
        console.log("here is an odd number:" + i);
    }

}