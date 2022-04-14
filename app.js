'use Strict';

const timer = document.querySelector('.stopwatch');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let [hr,mn,sc,ms] =[0,0,0,0];
let interval = 0;


const stopWatch = function(){
            ms++;
            if(ms === 1000){
                ms =0;
                sc++;
                if (sc === 60){
                    sc =0;
                    mn++;
                    if(mn === 60){
                        mn= 0;
                        hr++;
                    }
                }
            }

            hr = `${hr}`.padStart(2,0);
            mn = `${mn}`.padStart(2,0);
            sc = `${sc}`.padStart(2,0);
            ms = `${ms}`.padStart(3,0);
        timer.innerHTML = `${hr}:${mn}:${sc}:${ms}`;
};

const startBtn = function(){
    if(interval !== 0){
        clearInterval(interval);
    }
    interval = setInterval(stopWatch,1);
};

const pauseBtn = function(){
    clearInterval(interval);

};

const resetBtn = function(){
    clearInterval(interval);
    hr=0, mn=0 , sc=0, ms=0;
    timer.innerHTML = '00:00:00:000';
} 

start.addEventListener('click',startBtn);
pause.addEventListener('click',pauseBtn);
reset.addEventListener('click',resetBtn);