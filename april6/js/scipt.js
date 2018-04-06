/**
 * Math objects
 */
// Intergers - whole numbers
// Floats Decimals 
 
//var wa = (.1 * .2);
// 0.0200000000
//var rounded = Math.round (0.0000000001);
//.49 and below rounds down
// .5 rounds up
// math ceil
//var roundUp = Math.ceil(0.0000000001);

//var roundedDown = Math.floor(0.9999999999);

//var pi = Math.PI;

//console.log(Math.pow(8, 2));
//console.log(Math.sqrt(64));
// math random
//console.log(Math.random());

//console.log('.round():'+rounded, '.ceil():'+ roundUp, '.floor():'+roundedDown, 'Pi:' +pi );
/**
 * RANDOM NUMBER GEN
 */

 //var rand = Math.random();
 //rand = Math.floor ( rand * 11);
 //console.log (rand);



//** 

// function pickANum(){
  //  var userNum =prompt ('guess my number between 0 and 10');
    //checkNum(userNum);


 //}


// pickANum();

//function pickAnotherNum(){
  //  var userNum =prompt ('guess again');
    //checkNum(userNum);


//}
 //function checkNum(Num){
     //if(Num < rand){
      //  alert( Num + 'Is too low. Pick again');
    // }else if (Num >rand){

  //      alert( Num + 'Is too high. Pick again');
//        pickAnotherNum();

    // }else{
   //     alert( Num + 'Is the right number. you win');
     //}




// }

var rand;
function getRandNum(){
    UserPick.vaule ='';

rand= Math.random();
rand = Math.floor(rand+11);
console.log

}



var userPick = document.getElementById('userPick');
var submitBtn = document.querySelector('button');
var userPickRes = document.querySelector('h1');

submitBtn.addEventListener('click', getUserPick);
resetBtn.addEventListener('click', getRandNum);

var rand = Math.random();
rand = Math.floor ( rand + 11);



function getUserPick(){
   var userNum = parseInt (userPick.value);
    checkUserPick(userNum);
    userPick.vaule ='';

}

function checkUserPick(x){
   if(attemps > 0){
    if(x < rand){
    printUserRes(x + 'is too low. Pick again');
    }else if(x > rand){
printUserRes(x + 'is too high. Pick again');
   }else{
    printUserRes(x+ "is the right number");
}

}
}
function printUserRes(userRes){
userPickRes.innerHtml = userRes;

}

$(document).ready(function() {
    var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00,#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
    var rand = Math.floor(Math.random() * colors.length);
    $('.change').css("background-color", colors[rand]);
});
