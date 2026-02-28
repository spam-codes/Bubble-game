function playGame(){

let timer = 60;
let score = 0;
let randHitNum;

function createBubble() {
    let clutter = ''
    for( let i=0; i<207; i++){
        let randomNum = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNum}</div>`;
        document.querySelector('.pbtm').innerHTML = clutter;
    }
};

function startTimer(){
    let timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML = `<div id = "gameOver"> <h4> Game Over </h4> <button id="restart">Restart</button> </div>`
            const restartBtn = document.querySelector('#restart');
            restartBtn.addEventListener('click', ()=>{
            createBubble();
            resetScore();
            timer = 60;
            startTimer();
            getNewHit();
})
        }
    }, 1000);

};

function getNewHit(){
    randHitNum = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = randHitNum;
};

function increaseScore(){
     score += 10;
     document.querySelector('#scoreVal').textContent = score;
};

function resetScore(){
    score = 0;
    document.querySelector('#scoreVal').textContent = score;
}


const panel = document.querySelector(".pbtm");
panel.addEventListener('click', (details)=>{
    let clickedNum = Number(details.target.textContent);
    if(clickedNum === randHitNum){
        increaseScore();
        getNewHit();
        createBubble();
    }
})


createBubble();
startTimer();
getNewHit();


}




document.querySelector('.pbtm').innerHTML = '<div id="start"> <h1> Welcome, Press Start </h1> <button id="restart"> Start Game</button> </div> <div class="bg"></div>';
let balls ='';
for(let i=0; i< 205; i++){
    balls += '<div class="ball"></div>';
       document.querySelector('.bg').innerHTML = balls;
}
const startButton = document.querySelector('#restart');
startButton.addEventListener('click', ()=>{
    playGame();
})