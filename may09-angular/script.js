
const value =5;
  document.getElementById('test').innerHTML='hello'+value;

  const warn =document.querySelector('warning');
if (value <10) {
  warn.innerHTML ="noooo"
}

const colors = ['red','orange','yellow' ];
let result = '';
colors.forEach(eachColor => {
result = result + ' ' +eachColor;
});

document.getElementById('colors').innerHTML=result;
