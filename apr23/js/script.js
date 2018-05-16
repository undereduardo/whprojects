// var storageBtn1 = document.querySelector('#btn1');
// var storageBtn2 = document.querySelector('#btn2');

// storageBtn1.addEventListener('click', setLocalStorage);

// storageBtn2.addEventListener('click',setSessionStorage);

// function setLocalStorage(){
// localStorage.setItem('last Name', 'morales');
// }
// function setSessionStorage(){
//     sessionStorage.setItem('vehicle', 'jeep');
// }

var saveBtn = document.querySelector('input[type="submit"]');
    if (localStorage.getItem("details") !== null ){
        saveBtn.addEventListener('click', checkPassword);
    }else{
        saveBtn.addEventListener('click', getUserInfo);
    }



function getUserInfo(evt){
    evt.preventDefault();
    var radios = document.querySelectorAll('input[type="radio"]:checked').value;
    
    var username = document.querySelector('input[type="text"]').value;
    var password = MD5(document.querySelector('input[type="password"]').value);
    console.log(radio);

    
    localStorage.setItem("details",JSON.stringify(new Userinfo(username, password,theme)));
    document.querySelector('label[for="theme"]').style.display = 'none';
}
function Userinfo (un,pw){
    this.user =un;
    this.pass =pw;
    this.theme = theme;
}
function checkUserInfo(){
    if(localStorage.getItem("details") !== null){
        document.querySelector('label[for="theme"]').style.display = 'none';
    var userInfo = (localStorage.getItem("details"));
    document.querySelector('input[type="text"]').value = userInfo.user;
    }

checkUserInfo ();

function checkPassword(evt){
    evt.preventDefault();
    var userPass = MD5(document.querySelector('input[type="password"]').value);
    var userInfo = JSON.parse(localStorage.getItem("details"));
    if(userPass === userInfo.user && userPass === userInfo.pass){
        alert('welcome home!');
        document.body.classList.add(userInfo);
    }else{
            // alert('Please enter a correct password');
    }
}
}