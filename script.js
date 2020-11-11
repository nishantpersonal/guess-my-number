'use strict';

let number = Math.ceil(Math.random() * 20);
let highscore = 0;
let score = 20;

const reset = () => {
    number = Math.ceil(Math.random() * 20);
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';  
    updateScore();
};

const updateScore=()=>{
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
        

}
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '🔴 No Number!!';
    } 
    else if (guess < 1 || guess > 20) {
        document.querySelector('.message').textContent = '🔴 Number outside limit';
    } 
    else if (guess === number) {
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.message').textContent = '🥳 Correct Answer!!';
        if (score > highscore) {
            highscore = score;
        }
        updateScore();
    }   
    else {
        score--;
        let diff=0;
        if(number>guess) {diff=number-guess;}
        else {diff=guess-number;}

        if (diff >= 10) {
          document.querySelector('.message').textContent = 'Its Very Far!!';
        } else if (diff > 5&&diff<10) {
          document.querySelector('.message').textContent = 'Its Far!!';
        } else if (diff>2&&diff <= 5) {
          document.querySelector('.message').textContent = 'Close!!';
        } else {
          document.querySelector('.message').textContent = 'Very Close!!';
        }
        updateScore();
    }
  
});

document.querySelector('.again').addEventListener('click',reset);


