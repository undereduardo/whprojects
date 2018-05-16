var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate());
console.log(theDate.getDay());
console.log (theDate.getFullYear());
console.log(theDate.getMonth());

console.log(theDate.toLocaleString('us-en',{ month: 'long'}));


var myBday = new Date(2000, 09 ,02);

var dateStr = `
today's date is ${theDate.getDate()}`;

document.body.textContent =myBday;
// month 










var myTimer = setInterval(updateTimer,100);
function updateTimer(){
    var theTime = new Date();
    var timestr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12:false, minute: '2-digit', second: '2-digit'})}
`;
document.querySelector('h3').textContent = timestr;



}