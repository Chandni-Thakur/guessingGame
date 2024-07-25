const max= prompt("enter the max number");
let random = Math.floor(Math.random()*100)+1;
let guess = prompt("enter your number");
while(true){
    if(random==guess){
        console.log("congrats!, you entered a right number ,your number is :" ,random);
        break;
    }
    else if(guess<random){
        guess = prompt("hint : your no. is too small please enter another number ");
    }
    else if(guess>random){
        guess = prompt("hint : your no is too large please enter another number" );
    }
}