//importScripts ;
let result="",user="";
let score={
  wins:0,
  loses:0,
  tie:0
};
function computer(user,comp){
  let x=Math.random();
  console.log('user selected is: '+ user);

   if(x<=1/3){
    if(user==='scissor') {
      result='Computer';score.loses++;
    }
    else if(user==='paper'){
      result='You';score.wins++;
    }
    else{
      result='Tie';score.tie++;
    }
    comp='rock';//result='Tie';
  }
   else if(x<=2/3){
    if(user==='rock'){
      result='Computer';score.loses++;
    }
    else if(user==='paper'){
      result='Tie';score.tie++;
    }
    else{
      result='You';score.wins++;
    }
    comp='paper';//result='Computer';
   }
   else {
    if(user==='rock'){
      result='You';score.wins++;
    }
    else if(user==='paper'){
      result='Computer';score.loses++;
    }
    else {
      result='Tie';score.tie++;
    }
    comp='scissor';//result='You';
   }
   //console.log('user selected is: '+ user);
   console.log('computer selected is: '+comp);
   alert('You selected the '+ (user) + ' \ncomputer selected '+(comp) + '\nThe winner is :'+(result)+`\nWins: ${score.wins} Loses: ${score.loses} Ties: ${score.tie}`);
   console.log('The winner is :'+(result));
   console.log(`\nWins: ${score.wins} Loses: ${score.loses} Ties: ${score.tie}`);
  }
function reset(){
  score.wins=0,score.loses=0,score.tie=0;
  alert(`\nWins: ${score.wins} Loses: ${score.loses} Ties: ${score.tie}`);
  console.log(`\nWins: ${score.wins} Loses: ${score.loses} Ties: ${score.tie}`);
  }