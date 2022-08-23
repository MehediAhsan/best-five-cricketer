const playersName = [];
function display(playersName){
    const ol = document.getElementById('ol');
    const li = document.createElement('li');
    for(let i=0 ; i<playersName.length; i++){
        li.innerText = playersName[i];
        ol.appendChild(li);
    }
}
const buttons = document.getElementsByClassName('btn-select');
for (const button of buttons){
    button.addEventListener('click', function(event){
        const playerName = event.target.parentNode.firstElementChild.innerText;
        if(playersName.length>4){
            alert('You can not select more than five player');
            return;
        }
        playersName.push(playerName);
        display(playersName);
        button.disabled=true;
        button.style.backgroundColor = 'gray';       
    });
}

function getInputFieldAmount(input){
    const inputField = document.getElementById(input);
    const inputAmount = parseFloat(inputField.value);
    return inputAmount;     
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerPrice = getInputFieldAmount('player-price');
    if(isNaN(playerPrice)){
        alert('Enter a number');
        return;
    } 
    else if(playerPrice<0){
        alert('Enter a positive number');
        return;
    }
    document.getElementById('player-expenses').innerText = playerPrice * (playersName.length);
})

