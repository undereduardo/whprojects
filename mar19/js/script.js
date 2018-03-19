document.getElementById('btn2').style.color = "red";

console.log("Here is my first consle message");
console.info("This is info");
console.warn("Danger ahead!");
console.error("Uh Uh Uh. You didnt say the magic word");


//browser alert
//alert('here is my popup');
//var userResult = confirm("Did you remeber to lock your car?");
//console.log(userResult);


// Browser prompt box
// var userName = prompt("What is your name");
//console.log(userName);

// variables
// must start with a lowercase
// must start with a letter.
// can notain underscore.
// may use camelCasing


var username;
var room1;
var user_name;
var userName;
var theUsersFirstNameOnly;

var age = 27;
var decade = 10;
var double =2; // * (asterish)
var divide=4; // / (forward slash)
//divide result by 4
var newAge =(age +decade) *double /divide;
// pemas matters;
console.log (newAge);
//var stringAge = "27";
// concatination

//var firstname = prompt("What is your first name?");
//var lastname = prompt("What is your last name?");
//alert(`firstname +" "+ lastname`);
//interpolation
// $ {variable}

//lert(`${firstname} ${lastname}`);

//prompt user for
// make of vechile 
//the year
// the color
// alert the result

// 3 new variables
// formatting : color,year make.
function getUserVehicle(){
    var make = prompt("What is the make of the vehicle?");
    var year = prompt ("What is the year ?");
    var color = prompt ("What is the color?");
    var result = color +" ," + year +" " + make + ".";
    alert(result);
}
function primaryUser(){
var first = prompt ("what is your first name");
var last = prompt ("what is your last name?");
var place = prompt ("where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last +", born in " + place;

}




function secondUser(){
    var first = prompt ("name");
    var last = prompt ("mother names");
    var place = prompt ("place born");
    
        document.getElementById('secondUser').innerHTML = first + " ," + last +",  " + place;
    
    
    
    
    }



    function thirdUser(){
        var first = prompt ("what are you drinking");
        var last = prompt ("soda or water");
        var place = prompt ("I see you");
        
            document.getElementById('thirdUser').innerHTML = first + " ," + last +",  " + place;
        
        
        
        
        }

        function fourthUser(){
            var first = prompt ("what color shirt to you have?");
            var last = prompt ("does it have a logo?");
            var place = prompt ("How did i get it right?");
            
                document.getElementById('fourthUser').innerHTML = first + " ," + last +",  " + place;
            
            
            
            
            }