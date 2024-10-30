let maximum = parseInt(prompt("Enter the maximum number!"));



while(!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random()*maximum) +1;
console.log(targetNum)

let guess = prompt ("Enter your first guess! (type q to quit)");
let attempts = 1;
while (parseInt(guess) !==targetNum){
    if (guess=='q') break;
    guess= parseInt(guess);

    if(guess>targetNum){
        guess = prompt("too high! Enter a new guess: ");
        attempts++
    } else if (guess<targetNum){
        guess = prompt("too low! Enter a new guess: ");
        attempts++
    } else {
        guess = prompt("Invalid guess. type q to quit")
    }
}

if (guess =='q'){
    console.log("you quit");
    
} else {
    console.log(`you got it it took you ${attempts} guesses`)
}