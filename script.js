let btn1 = document.querySelector('#item-1').addEventListener("click", function () { applyInput(this) })
let btn2 = document.querySelector('#item-2').addEventListener("click", function () { applyInput(this) })
let btn3 = document.querySelector('#item-3').addEventListener("click", function () { applyInput(this) })
let btn4 = document.querySelector('#item-4').addEventListener("click", function () { applyInput(this) })
let btn5 = document.querySelector('#item-5').addEventListener("click", function () { applyInput(this) })
let btn6 = document.querySelector('#item-6').addEventListener("click", function () { applyInput(this) })
let btn7 = document.querySelector('#item-7').addEventListener("click", function () { applyInput(this) })
let btn8 = document.querySelector('#item-8').addEventListener("click", function () { applyInput(this) })
let btn9 = document.querySelector('#item-9').addEventListener("click", function () { applyInput(this) })
let resetBtn = document.querySelector("#reset").addEventListener("click", reset);
let player1turn = true;
function reset() {
    let btn1 = document.querySelector('#item-1')
    let btn2 = document.querySelector('#item-2')
    let btn3 = document.querySelector('#item-3')
    let btn4 = document.querySelector('#item-4')
    let btn5 = document.querySelector('#item-5')
    let btn6 = document.querySelector('#item-6')
    let btn7 = document.querySelector('#item-7')
    let btn8 = document.querySelector('#item-8')
    let btn9 = document.querySelector('#item-9')
    btn1.innerHTML = "";
    btn2.innerHTML = "";
    btn3.innerHTML = "";
    btn4.innerHTML = "";
    btn5.innerHTML = "";
    btn6.innerHTML = "";
    btn7.innerHTML = "";
    btn8.innerHTML = "";
    btn9.innerHTML = "";
    player1turn = true;
}
function applyInput(name) {
    if (player1turn && name.innerHTML == "") {
        name.innerHTML = "#";
        checkWin()
        console.log("player1 " + name)
        player1turn = false;
    } else if (player1turn == false && name.innerHTML == "") {
        name.innerHTML = "O";
        checkWin();
        player1turn = true;
    }
}
function checkWin() {
    let btn1 = document.querySelector('#item-1')
    let btn2 = document.querySelector('#item-2')
    let btn3 = document.querySelector('#item-3')
    let btn4 = document.querySelector('#item-4')
    let btn5 = document.querySelector('#item-5')
    let btn6 = document.querySelector('#item-6')
    let btn7 = document.querySelector('#item-7')
    let btn8 = document.querySelector('#item-8')
    let btn9 = document.querySelector('#item-9')
    if (btn1.innerHTML == btn2.innerHTML && btn2.innerHTML == btn3.innerHTML) {
        checkwhoWon(btn1.innerHTML)
    } else if (btn1.innerHTML == btn4.innerHTML && btn7.innerHTML == btn4.innerHTML) {
        checkwhoWon(btn1.innerHTML);
    } else if (btn1.innerHTML == btn5.innerHTML && btn9.innerHTML == btn5.innerHTML) {
        checkwhoWon(btn5.innerHTML);
    } else if (btn2.innerHTML == btn5.innerHTML && btn8.innerHTML == btn5.innerHTML) {
        checkwhoWon(btn2.innerHTML);
    } else if (btn3.innerHTML == btn6.innerHTML && btn9.innerHTML == btn6.innerHTML) {
        checkwhoWon(btn3.innerHTML);
    } else if (btn4.innerHTML == btn5.innerHTML && btn6.innerHTML == btn5.innerHTML) {
        checkwhoWon(btn4.innerHTML);
    } else if (btn7.innerHTML == btn8.innerHTML && btn9.innerHTML == btn8.innerHTML) {
        checkwhoWon(btn8.innerHTML);
    } else if (btn3.innerHTML == btn5.innerHTML && btn7.innerHTML == btn5.innerHTML) {
        checkwhoWon(btn3.innerHTML);
    }

}
function checkwhoWon(symbol) {
    if (symbol == "#") {
        console.log(symbol)
        alert("Player 1 Won")
        reset()
    } else if (symbol == "O") {
        console.log(symbol)
        alert("player 2 won")
        reset()
    }
}




