'use strict'
/*
Creating a game that asks different facts about the creator.
*/

console.log('The first question is just trying to get a name.')

var username, trey, ltrey, lltrey, meet, lmeet, llmeet, sports, lsports, llsports, plane, lplane, llplane, sponsored, lsponsored, llsponsored, origin, lorigin, llorigin

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

/* The second game quesiton starts here*/

meet = prompt('Question #2: Would you like to meet Trey?');
lmeet = meet.toLowerCase();
llmeet = meet.toLowerCase();
    console.log(lmeet)
    console.log(llmeet)

if(lmeet === 'yes'){
    alert ('Great answer! He is a pretty cool guy.');
}

if(lmeet === 'no'){
    alert ('Oh well, your loss.')
}

if(llmeet === 'y'){
    alert ('Great answer! He is a pretty cool guy.');
}

if(llmeet ==='n'){
    alert ('Oh well, your loss.')
}

/* The third game question starts here*/

sports = prompt('Question #3: Does Trey like sports?');
lsports = sports.toLowerCase();
llsports = sports.toLowerCase();
    console.log(lsports)
    console.log(llsports)

if(lsports === 'yes'){
    alert ('Great answer! Trey\'s favorite sports are sailing, soccer, skiing, and shooting.');
}

if(lsports === 'no'){
    alert ('You are incorrect. I think you need to learn some more about Trey.')
}

if(llsports === 'y'){
    alert ('Great answer! Trey\'s favorite sports are sailing, soccer, skiing, and shooting.')
}

if(llsports === 'n'){
    alert ('You are incorrect. I think you need to learn some more about Trey.')
}

/* The fourth game question starts here*/

plane = prompt('Question #4: Would Trey jump out of an airplane?');
lplane = plane.toLowerCase();
llplane = plane.toLowerCase();
    console.log(lplane)
    console.log(llplane)

if(lplane === 'yes'){
    alert ('You are right! Trey has jumped out of airplanes a lot in the Army. Don\'t tell anyone, but he is super scared of heights.');
}

if(lplane === 'no'){
    alert ('Wrong!!! Trey is scared of heights, but has jumped out of planes quite a few times in the Army.');
}

if(llplane === 'y'){
    alert ('You are right! Trey has jumped out of airplanes a lot in the Army. Don\'t tell anyone, but he is super scared of heights.');
}

if(llplane === 'n'){
    alert ('Wrong!!! Trey is scared of heights, but has jumped out of planes quite a few times in the Army.');
}

/* The fifth game question starts here*/

sponsored = prompt('Question #5: Was Trey ever a sponsored athlete?');
lsponsored = sponsored.toLowerCase();
llsponsored = sponsored.toLocaleLowerCase();
    console.log(lsponsored)
    console.log(llsponsored)

if(lsponsored === 'yes'){
    alert ('Trey was a sponsored athlete! He was a member of a division I rifle team in college and competed nationally and internaitonally in competition.')
}

if(lsponsored === 'no'){
    alert ('Wrong, Trey was a sponsored member of a competitive rifle team throughout highschool and college. Sponsorship was given by ammunition companies.')
}

if(llsponsored === 'y'){
    alert ('Trey was a sponsored athlete! He was a member of a division I rifle team in college and competed nationally and internaitonally in competition.')
}

if(llsponsored === 'n'){
    alert ('Wrong, Trey was a sponsored member of a competitive rifle team throughout highschool and college. Sponsorship was given by ammunition companies.')
}



/*

quirkyfact = prompt('tell me a quirky fact about yourself');

if(quirkyfact === 'dnd'){
  alert('that is my favorite thing too');
} else {
  alert('oh, ' + quirkyfact + ' sounds really cool, tell me more');
}

*/
