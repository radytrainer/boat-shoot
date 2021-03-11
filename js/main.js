let score = 0;
let count = 0;
let onBoat = (id) => {
    score += 1;
    count += 1;
    if (score == countBoat || count == countBoat) {
        confirm("You Win")
        location.reload();
    }
    document.querySelector('#scores').innerHTML = score;
    document.querySelector('#box-'+ id).innerHTML += '<img src="boom.png" class="boom">';
}
let tries = 0;
let noBoat = (id) => {
    tries += 1;
    score -= 1;
    if (tries > 2) {
        confirm("Game Over");
        location.reload();
    }
    document.querySelector('#scores').innerHTML = score;
    document.querySelector('#box-'+ id).innerHTML = '<img src="no.png" class="noboat">';
}
let hiddenBoat = (id) => {
    document.querySelector('#boat-'+ id).style.opacity = "0";
}


let container = document.querySelector('#container');
let boat1 = Math.floor(Math.random() * 12) + 1;
let boat2 = Math.floor(Math.random() * 12) + 1;
let boat3 = Math.floor(Math.random() * 12) + 1;
let boat4 = Math.floor(Math.random() * 12) + 1;
let hideBoat = Math.floor(Math.random() * 12) + 1;
let countBoat = 0;

for (let i = 1; i <= 12; i++) {
    if (boat1 == i || boat2 == i || boat3 == i || boat4 == i) {
        container.innerHTML += `
        <div class='box' id='box-${i}' onclick="onBoat(${i})">
            <img src="boat.png" class="boat" id="boat-${hideBoat}">
        </div>`;
       
        countBoat += 1;
    }else {
        container.innerHTML += `<div class='box' id='box-${i}' onclick="noBoat(${i})"></div>`;
    }
}

hiddenBoat(hideBoat);

document.querySelector('#boats').innerHTML = countBoat;

