
//  this - context based. Look to the left of the dot

// var btns = document.querySelectorAll('button');

// for(var i = 0; i< btns.length; i++){
    // btns[i].addEventListener('click',function(evt){
        // console.log(evt.target);
        // console.log(this);

    // })


// }

// window.addEventListener('click', function(evt){
    // console.log(evt.target.nodeName);
    // if (evt.target.nodeName == 'BUTTON'){
        // console.log(evt.target);
        // console.log(this);

    // }

// })


// var cars = ['jeep','honda', 'jeep','subru'];
// var types =['string', true, 5, [1, 2, 3]];
// console.log(cars);
// console.log(tbypes[3][1]);
// objects

// var car ={
    // type:'jeep',
    // model:'wrangler',
    // color:b'black',
    // offroad: true,
    // trim: ['sunroof','hardtop', '4 wheel drive']

// };
// console.log(car.trim);

// var eduardo ={
    // firstname:'eduardo',
    // lastname:'morales',
    // age:'19',
    // heigth:"5,9",
    // hair:'black',
    // haircolor:'black',
    // facialhair:true,
    // facialhaircolor:'brown',
    // greeeting:function(msg){
        // console.log(msg+ this.firstname);
    // }

// }
// var types =['string',true, 5,[1, 2, 3],eduardo];
//console.log(types);

// eduardo.middlename ="walker";
// console.log (eduardo);
 
// eduardo.greeeting("hey there");

// eduardo.greeeting('this is my new name');


// function Person(firt,last,age,eye){
    // this.firstname =first;
    // this.lastname =last;
    // this.age= age;
    // this.eyecolor = eye;
// }
// var myDad = new Person('davd','higley','59','brown');
// var myMom = new Person('late','higley','53','brown');
// var mySis = new Person('davd','higley','52','brown');

// mysSis.greeeting('hello');


var form = document.querySelector('form');
console.log(form);





var users =[];
var user = 0;

function userAcc(email,username,password){
    this.email= email;
    this.username = username;
    this.password =password;


}
var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click',function(evt){
    evt.preventDefault();
    users.push(
    new userAcc(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value


    )
);
});



