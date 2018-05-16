//
// function welcomeMsg(str){
// console.log(str);
// return "Welcome" + str;



//}
//consoleInfo("Math");

// console.log(welcomeMsg('Math'));
// function calcNums(x, y){
   // console.log(x+ y);
//    return x + y;
//}
// console.log(calcNums(3, 2));

// var h3 = document.querySelector('h3');
// var User = document.querySelector('#user');

// function concatStrings(str1, str2){
    // return str1 + " " +str2;


//}

// function getFirstname(){
  //  return prompt('What is your first name?');

//}

//function getLastName(){
   // return prompt('What is your last name?');

//}
// function welcomeUser(){
    // h3.innerHTML = concatStrings(getFirstname(), getLastName());
    // getLastName

// }
// welcomeUser();
//user.textContent = concatStrings( getFirstname(), getLastName());

// switch statements

var spans = document.querySelectorAll('span');
var occupations = ['janitor','teacher', 'developer', 'plumber', 'cashier' ];
var plurals = ['fish', 'monkey', 'shoes', 'cactii'];
var adj =['attractive','bald','beautiful','chubby','clean'];
var verb = ['become','bite','break','bring','build'];
var number =['1','2', '3','4','5'];
var liquid =['water', 'coke', 'pepsi','powerade', 'mtn dew'];
for (var i = 0; i < spans.length; i++){
   var s = spans[i];

    switch(spans[i].className){
        case 'occupations':
            setText(s,occupations);
            break;
        case 'plurals':
        // spans [i].style.color = 'red';
     
        setText(s,plurals);
        break;
        case 'adj':
        setText(s,adj);
        break;
       case 'number':
       setText(s, number);
       break;
       case 'verb':
       setText(s, verb);
       break;
       case 'liquid':
       setText(s,liquid);
       break;
        default:
        
    }

}

    function getRandNum(num){
        return Math.floor(Math.random() * num);
    }
    function setText(currSpan, testArray){
        currSpan.textContent = testArray[getRandNum(testArray.length)];

    }