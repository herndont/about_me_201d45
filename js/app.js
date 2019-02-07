'use strict'
/*
Creating a game that asks different facts about the creator.
*/

console.log('The first question is just trying to get a name.')

var username, trey, ltrey, lltrey, meet, lmeet, llmeet

username = prompt('what is your name?');

if(username === ''){
  username = prompt('I really want to know your name');
} 

if(username === '') {
    alert ('hello nobody! Really not sure why you don\'t want to tell anyone your name.');
} 

else {
  alert ('hello ' + username + ' , it is nice to meet you.');
}


/* The second question is the start of the game. */

trey = prompt('Question #1: Do you know Trey?');
ltrey = trey.toLowerCase();
lltrey = trey.toLowerCase();
    console.log(ltrey)
    console.log(lltrey)

if(trey === ''){
    trey = prompt('Not sure why you just won\'t say Yes or No to the question!?');
}  

if(ltrey === 'yes'){
    alert ('Lies!!! You have never met him before in your life.');
}  

if(ltrey === 'no'){
    alert ('You two should be introduced. He is really cool.');
}

if(lltrey === 'y'){
    alert ('Lies!!! You have never met him before in your life.')
}

if (lltrey === 'n'){
    alert ('You two should be introduced. He is really cool.')
}

/* The third quesiton starts here*/

meet = prompt('Question #2: Would you like to meet Trey?');
lmeet = meet.toLowerCase();
llmeet = meet.toLowerCase();
    console.log(lmeet)
    console.log(llmeet)

if(lmeet === 'yes'){
    alert ('Great answer! He is a pretty cool guy.');
}

if(lmeet === 'no'){
    alert ()
}

/*

quirkyfact = prompt('tell me a quirky fact about yourself');

if(quirkyfact === 'dnd'){
  alert('that is my favorite thing too');
} else {
  alert('oh, ' + quirkyfact + ' sounds really cool, tell me more');
}

*/
