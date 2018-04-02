//var p1 = document.getElementById('p1');
//console.log(p1);

//var p1q = document.querySelector('#p2');
//console.log('p1q');
//var pClass = document.querySelector('.p');
//console.log(pClass);

//var pLast = document.querySelector('p:last-of-type');
//console.log(pLast);
//pLast.style.fontsize ='28px';

//var pClasses = document.querySelectorAll('p');
//console.log('pClasses');
//pClasses[2].style.fontSize = '8px';
//pClasses[1].style.color = 'red';

//var pByClassname = document.getElementsByClassName('p');
//console.log('pByclassname');

//pByClassname[0].style.fontSize ='32px';

//var pByTagname = document.getElementsByTagName('p');
//console.log(pByTagname);
//pByTagname[9].style.color ='color';
//console.log(pByTagname.length);


//loop
// !-----------| ARUGNMENTS
//!-------| NEW VARIABLE
// |--------| NUMBER OF LOOPS
 //|------| INCREMENTOR

//for(var i = 0; i < 10; i++){
  //  pByTagname[i].style.color='red';
    //console.log(i);
//}
// create a new variable of your name
//using the length of your name
// console each index to the browser

//var name = "howlong";
//var number = name.length;
//console.log(7);





//function getUsername(){
    //var username = prompt("your name");
    //console.log(username + 'from inside the function');
  //  printUsername([1, 2, 3]);
//}

//getUsername();
//function printUsername(x){
    //for(var i =0; i < x.length; i++){
   // console.log(x);
 //   }
//}


//get users two numbers
//function getUserNums(){
  //  var num1 = prompt('please enter number');
    //var num2 = prompt('please enter another number');
    //addUserNums(num1, num2);
//}

//alert added numbers
//function addUserNums(x, y){
  //  console.log(arguments);
  //  alert( parseInt(x)+ parseInt(y));

//}

//getUserNums();




// write a function that asks the user for three colors
// write another function 
//loop through arugment array
// each pargagraph to be each color

var pargagraphs = document.querySelectorAll('p');

function getUsercolors(){
    var userColors = prompt ('pick some colors seperate.'). split('');
    var userTrimmedcolors = []
    for(var i =0; i < userColors.length; i++){
        userTrimmedcolors.push(userColors[i].trim());


    }

   // var color1 = prompt ('please pick a color');
    //var color2 = prompt ('please pick a color');
    //var color3 = prompt ('please pick a color');

    assignUserColors(color1, color1, color3);

}
function assignUserColors(x, y, z){
    for (var i = 0; i < x.length.length; i++){

        pargagraphs[i].style.color = x.length [i];
    }


}

getUsercolors();