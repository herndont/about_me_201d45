'use strict'
/*
Creating a game that asks different facts about the creator.
*/

console.log('The first question is just trying to get a name.');

var username, trey, ltrey, meet, lmeet, sports, lsports, plane, lplane, sponsored, lsponsored, states, lstates, name_of_states, towns, towns;

var score = 0;

function introduction(){
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
}
introduction();

/* The first game question is the start of the game. */


function first_question(){
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
    score++;
}
}
first_question();

/* The second game quesiton starts here*/

function second_question(){
meet = prompt('Question #2: Would you like to meet Trey?');
lmeet = meet.toLowerCase();
    console.log('Question #2 answer: ' + lmeet);

if(lmeet === 'yes' || lmeet === 'y'){
    alert ('Great answer! He is a pretty cool guy.');
    score++;
}

if(lmeet === 'no' || lmeet === 'n'){
    alert ('Oh well, your loss.')
}
}
second_question();

/* The third game question starts here*/

function third_question(){
sports = prompt('Question #3: Does Trey like sports?');
lsports = sports.toLowerCase();
    console.log('Question #3 answer: ' + lsports);

if(lsports === 'yes' || lsports === 'y'){
    alert ('Great answer! Trey\'s favorite sports are sailing, soccer, skiing, and shooting.');
    score++;
}

if(lsports === 'no' || lsports === 'n'){
    alert ('You are incorrect. I think you need to learn some more about Trey.')
}
}
third_question()

/* The fourth game question starts here*/

function fourth_question(){
plane = prompt('Question #4: Would Trey jump out of an airplane?');
lplane = plane.toLowerCase();
    console.log('Question #4 answer: ' + lplane);

if(lplane === 'yes' || lplane === 'y'){
    alert ('You are right! Trey has jumped out of airplanes a lot in the Army. Don\'t tell anyone, but he is super scared of heights.');
    score++;
}

if(lplane === 'no' || lplane === 'n'){
    alert ('Wrong!!! Trey is scared of heights, but has jumped out of planes quite a few times in the Army.');
}
}
fourth_question();

/* The fifth game question starts here*/

function fifth_question(){
    sponsored = prompt('Question #5: Was Trey ever a sponsored athlete?');
    lsponsored = sponsored.toLowerCase();
        console.log('Question #5 answer: ' + lsponsored);

    if(lsponsored === 'yes' || lsponsored === 'y'){
        alert ('Trey was a sponsored athlete! He was a member of a division I rifle team in college and competed nationally and internaitonally in competition.');
        score++;
    }

    if(lsponsored === 'no' || lsponsored === 'n'){
        alert ('Wrong, Trey was a sponsored member of a competitive rifle team throughout highschool and college. Sponsorship was given by ammunition companies.');
    }
}
fifth_question();

/* The Sixth game question starts here*/

function sixth_question(){
var tries = 4;
var number_to_guess = 4;

    console.log('Question #6 answer: ' + number_to_guess);

while (tries > 0){
    towns = prompt('Question #6: How many different towns has Trey lived in while in Washington?');
    console.log(towns);
    if(towns < number_to_guess){
        alert('You are incorrect. That is not enough places.');
    } else if(towns > number_to_guess){
        alert('You are incorrect. Thats is too many different places.');
    } else {
        alert('You are correct! I have lived in Lakewood, Tacoma, Auburn, and Seattle.');
        score++;
        break;
    }
    tries--;
    console.log(tries);
}
if (tries === 0){
    alert('You have taken way too long to guess this answer. It\'s 4 silly. Lakehood, Tacoma, Auburn, and Seattle are all places I have lived.');
}
}
sixth_question();

/* The Seventh game question starts here*/

function seventh_question(){
name_of_states = ['illinois', 'south carolina', 'virginia'];
var tries = 7;

    console.log('Question #7 answer: ' + name_of_states);

var correct_state = false;

while (tries > 0){
    states = prompt('Question #7: Name a state that Trey has lived in other than Washington?');
    lstates=states.toLowerCase();
    for (var index = 0; index < name_of_states.length; index++) { 
        if(lstates === name_of_states[index]){
            alert ('Correct, Trey has lived in ' + states);
            correct_state = true;
            tries=0;
            score++;
            break;
        }
    }
    if (correct_state === false){
        alert( 'Sorry, Trey never lived in ' + states + ' state.');
    }
    tries--;
  }
    if (correct_state === false){
        alert('Nice try, but no Cigar. I have lived in Illinois, Virginia, and South Carolina before moving to Washington.');
    }
}
seventh_question();

    alert('You have gotten ' + score +' answers right. Thanks for learning a little bit about me.')

