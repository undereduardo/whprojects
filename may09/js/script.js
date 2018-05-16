// // // var firstname ='matt';

// // // function whatsName(){
// // //     var lastname = 'higley';
// // //     console.log(firstname);
// // //     whatsLastName(lastname);
// // // }
// // whatsName();

// // const name ='eduardo';
// // let color ='grey'; 
// // for(let i =0; i <5 ; i++){
// //     console.log('running' +i +'times');
// // }

// // function whatsLastName(str){
// // console.log(str);
// // console.log(i);
// // }
// // console.log(name, color);
// // color='red';
// // // console.log(i);
// // // for(i; i <10; i++){
// // //     console.log('running again'+i+'times');
// // // }
// // let firstname ='matt';
// // let lastname ='higley';
// // let nameCombined = `${firstname} matt ${lastname}`;
// // console.log(nameCombined);
//  let btn=document.querySelector('button');
//  btn.addEventListener('click', function(evt){
//      console.log(this);
//      var colorizer =  ()=>
//          this.style.color='red';
//          colorizer();

//  });
//  var logCase = function (str){
//      console.log(str);
//  }
//  logCase('matt');

// let btns = document.querySelectorAll('buttons');
// console.log(btns);
// btns.forEach





var colors =['red', 'orange', 'green', 'blue'];
for(let i=0; i< colors.length; i++){
    console.log(colors);
}
// js each loop
colors.forEach(function(x,y){
    console.log(x,y);
});
// for of loop
var nums =[10,20,30,40];
for(let num of nums){
    num += 1;
    console.log(num);

}
let myName ='matt higley';
for(let letter of myName){
    console.log(letter);
}