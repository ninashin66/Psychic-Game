window.onload = function(){

//Variables
var letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var user = { 
    wins: 0,
    loss: 0,
    guessRemain:10,
    guessedLetters: [],
};
var myLetter = letters[Math.floor(Math.random()*letters.length)];


var userWins = document.getElementById('wins');
var userLosses = document.getElementById('losses');
var guesses = document.getElementById('guess-count');
var letterGuess = document.getElementById('guesses');

//start game
document.onkeyup = function(event){

    //console.log(myLetter);
    var userLetter = event.key.toLowerCase();
    
    for (i=0; i<letters.length; i++){
        if(event.keyCode > 64 && event.keyCode < 91){
            //console.log('lets play!');
        } else {
            alert('I am thinking of a letter. Try again!');
            return false;
        }
    }

    if (user.guessedLetters.includes(userLetter) == true){
        alert('You already picked this letter. Pick again!');
        return false;
    }

        if(userLetter === myLetter && user.guessRemain > 0){
            user.wins++;
            user.guessRemain = 10;
            user.guessedLetters = [];
            myLetter = letters[Math.floor(Math.random()*letters.length)];
            alert('Thats Right! You must be Psychic!')
            //console.log('winning');
        } else if(user.guessRemain > 1){
                user.guessRemain--;
                user.guessedLetters.push(userLetter);
                //console.log('loser');
        }else {
            alert('Nope! I was thinking of letter ' + myLetter);
            user.loss++;
            user.guessRemain = 10;
            user.guessedLetters = [];
            myLetter = letters[Math.floor(Math.random()*letters.length)];
            //console.log('nope');
        }; 


       
//console.log(user);

userWins.textContent = 'Wins: ' + user.wins;
userLosses.textContent = 'Losses: ' + user.loss;
guesses.textContent = 'Guesses Left: ' + user.guessRemain;
letterGuess.textContent = 'Your guesses so far: ' + user.guessedLetters;
    };

};

