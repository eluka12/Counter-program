const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countlable = document.getElementById('countlable')

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlable.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countlable.textContent = count; }

 resetBtn.onclick = function(){
     count = 0
     countlable.textContent = count;
    }