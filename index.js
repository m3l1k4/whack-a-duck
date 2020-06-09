var score = 0;

setInterval(startWhack, 1000)


document.getElementById('mole').addEventListener("click", function (event) {
    event.preventDefault();


    score = score + 1;
    document.getElementById('score').innerHTML = score;


});


function startWhack() {

    let xCordf = getRandomX(20, 600);
    let xCord = float2int(xCordf);
    let yCordf = getRandomY(10, 600);
    let yCord = float2int(yCordf);
    let diditWork = whackedMole(xCord, yCord);


    return

}


function whackedMole(x, y) {
    let xString = '';
    let yString = '';

    let randX = xString.concat(x, 'px');
    let randY = yString.concat(y, 'px');
    document.getElementById("mole").style.top = randY;
    document.getElementById("mole").style.left = randX;

    return "potato";
}

function getRandomX(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomY(min, max) {
    return Math.random() * (max - min) + min;
}

function float2int(value) {

    return (value | 0);
}

