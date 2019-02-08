'use strict'
/*
Creating a game that asks different facts about the creator.
*/

console.log('The first question is just trying to get a name.');

var username, trey, ltrey, meet, lmeet, sports, lsports, plane, lplane, sponsored, lsponsored, origin, lorigin, states, lstates, name_of_states;

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

/* The first game question is the start of the game. */

trey = prompt('Question #1: Do you know Trey?');
ltrey = trey.toLowerCase();
    console.log('Question #1 answer: ' + ltrey);

if(trey === ''){
    trey = prompt('Not sure why you just won\'t say Yes or No to the question!?');
}  

if(ltrey === 'yes' || ltrey === 'y'){
    alert ('Lies!!! You have never met him before in your life.');
}  

if(ltrey === 'no' || ltrey === 'n'){
    alert ('You two should be introduced. He is really cool.');
}

/* The second game quesiton starts here*/

meet = prompt('Question #2: Would you like to meet Trey?');
lmeet = meet.toLowerCase();
    console.log('Question #2 answer: ' + lmeet);

if(lmeet === 'yes' || lmeet === 'y'){
    alert ('Great answer! He is a pretty cool guy.');
}

if(lmeet === 'no' || lmeet === 'n'){
    alert ('Oh well, your loss.')
}

/* The third game question starts here*/

sports = prompt('Question #3: Does Trey like sports?');
lsports = sports.toLowerCase();
    console.log('Question #3 answer: ' + lsports);

if(lsports === 'yes' || lsports === 'y'){
    alert ('Great answer! Trey\'s favorite sports are sailing, soccer, skiing, and shooting.');
}

if(lsports === 'no' || lsports === 'n'){
    alert ('You are incorrect. I think you need to learn some more about Trey.')
}

/* The fourth game question starts here*/

plane = prompt('Question #4: Would Trey jump out of an airplane?');
lplane = plane.toLowerCase();
    console.log('Question #4 answer: ' + lplane);

if(lplane === 'yes' || lplane === 'y'){
    alert ('You are right! Trey has jumped out of airplanes a lot in the Army. Don\'t tell anyone, but he is super scared of heights.');
}

if(lplane === 'no' || lplane === 'n'){
    alert ('Wrong!!! Trey is scared of heights, but has jumped out of planes quite a few times in the Army.');
}

/* The fifth game question starts here*/

sponsored = prompt('Question #5: Was Trey ever a sponsored athlete?');
lsponsored = sponsored.toLowerCase();
    console.log('Question #5 answer: ' + lsponsored);

if(lsponsored === 'yes' || lsponsored === 'y'){
    alert ('Trey was a sponsored athlete! He was a member of a division I rifle team in college and competed nationally and internaitonally in competition.');
}

if(lsponsored === 'no' || lsponsored === 'n'){
    alert ('Wrong, Trey was a sponsored member of a competitive rifle team throughout highschool and college. Sponsorship was given by ammunition companies.');
}

/* The sixth game question starts here*/

origin = prompt('Question #6: Is Trey from the West Coast?');
lorigin = origin.toLowerCase();
    console.log('Question #6 answer: ' + lorigin);

if(lorigin === 'yes' || lorigin === 'y'){
    alert ('Nope, Trey is from a rural farming town in central Illinois');
}

if(lorigin === 'no' || lorigin === 'n'){
    alert ('Correct! Trey is from central Illinois.');
}

/* The Seventh game question starts here*/

states = prompt('Question #7: Name a state that Trey has lived in other than Washington?');
name_of_states = ['Illinois', 'South Carolina', 'Virginia'];

var tries = 7;
    console.log('Question #7 answer: ' + name_of_states);

for (var index = 0; index < name_of_states.length; index++) { 
    if(states === name_of_states[index]){
        alert ('Correct, Trey has lived in ' + states);
    break;
    }
} 

    if(states !== name_of_states){
        alert ('Sorry, Trey never lived in ' + states + ' state.');
}


