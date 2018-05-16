var characterUI = document.querySelector('ul');
var homeUrl = 'https://rickandmortyapi.com/api/character/';

function getReq(url){

var req = new XMLHttpRequest();
req.open('GET',url);    
req.onload = function(){
    if(req.readyState ===4 && req.status ===200){
        console.log('success!',  req.statusText);
        getCharacters(req.responseText);
    }else{
        console.log('error.', req.statusText);
    }
    req.send(null);
}
}
getReq(homeUrl);
characterUI.addEventListener('click', function(evt){
console.log(evt);
});


function getCharacters(characters){
    // var characterLinks = document.querySelectorAll('a');
    // console.log(Links);
    var characterArr = JSON.parse(characters);
    for(var i = 0; i < characterArr.results.length; i++){
        var character = `
             <li>
                <a></a>
                <img src="${characterArr.results[i].image}" alt="${characterArr.results[i].name}" >
                <div>
                    <h3>${characterArr.results[i].name}</h3>
                    <ul>
                        <li><b>Gender:</b>${characterArr.results[i].gender}
                            </li>
                            <li> <b> Species :</b>${characterArr.results[i].species} </li>`;
if( !characterArr.results[i].type == "")
{
    character +=`<li><b>Type:</b>  ${characterArr.results[i].type}
    }
    
    
    
    </li>`
}





character +=`
                        <li><b>Statuts</b>${ characterArr. }
                    </ul>
                </div>
            </li>







             
`;      
characterUI.innerHTML += character;
    }


}