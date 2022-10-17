// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game

const n1=document.getElementById('number1')
const n2=document.getElementById('number2')
const greaterThan=document.getElementById('greater-than')
const lesserThan=document.getElementById('lesser-than')
const equalTo=document.getElementById('equal-to')
const timer=document.getElementById('timer')

let num1,num2,score=0,time=5;

window.onload=displayNumbers();

function displayNumbers() {
    num1=Math.floor(Math.random()*10);
    num2=Math.floor(Math.random()*10);
    n1.innerText=num1;
    n2.innerText=num2;
}

greaterThan.onclick=()=>{
    if(num1>num2) {
        score++;
    }
    else{
        window.open('gameover.html',"_self")
    }
    console.log(score)
    displayNumbers();
    resetTimer()
}

lesserThan.onclick=()=>{
    if(num1<num2) {
        score++;
    }
    else{
        window.open('gameover.html',"_self")
    }
    console.log(score)
    displayNumbers();
    resetTimer()
}

equalTo.onclick=()=>{
    if(num1==num2) {
        score++;
    }
    else{
        window.open('gameover.html',"_self")
    }
    console.log(score)
    displayNumbers();
    resetTimer();
}

function ticktick() {
    localStorage.setItem('score',score);
    timer.innerText=time;
    if (time==0) {
        clearInterval(timecount);
        window.open('gameover.html',"_self")
    }
    time--;
}

let timecount=setInterval(ticktick, 1000);

function resetTimer() {
    time=5;
}
