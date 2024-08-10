let gameseq=[];
let userseq=[];
let color=['red','yellow','green','purple']

let started=false;
let level=0;
let bestscore=0;

let h3=document.querySelector('h3')
let body=document.querySelector('body')
let game="";
document.addEventListener('keydown',function(){
    if (started==false) {
        if (game=='newgame') {
            console.log('New Game started');
        }else{
            console.log('started');
        }
        started=true;
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove('flash')
    },250)
}
function userFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove('flash')
    },250)
}
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    let ranIdx=Math.floor(Math.random()*4)
    let randcolor=color[ranIdx]
    gameseq.push(randcolor)
    console.log(gameseq);
    let randbtn=document.querySelector(`.${randcolor}`)
    btnFlash(randbtn);
}

function checkAns(idx){
        if(userseq[idx]==gameseq[idx]){
             if (userseq.length==gameseq.length) {
                console.log(userseq);
                setTimeout(levelup,1000);
             }
        }
        else{
            h3.innerHTML=`Game Over! <b>Your score was ${level}</b> <br> Press any Key to start.`;
            body.classList.add("bgcolor")
            setTimeout(function(){
                body.classList.remove('bgcolor')
            },250)
            if (bestscore<level) {
                let best=document.querySelector('.bestscore')
                best.innerText= `Best Score = ${level}`
            }
            gameOver();
            
        }
}

function btnpress(){
    let btn=this;
    userFlash(btn);

    let usercolor=btn.getAttribute('id');
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll('.btn');
for (btn of allbtns) {
    btn.addEventListener('click',btnpress)
}

function gameOver(){
    let game='newgame'
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}
