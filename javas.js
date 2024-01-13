const add = function (a, b) {
    return a + b;
  };
  
const subtract = function (a, b) {
    return a - b;
  };
  
const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
const multiply = function (array) {
    return array.reduce((product, current) => product * current)
  };

const divison = function (array) {
    return array.reduce((divison, current) => divison / current)
  };


document.addEventListener("DOMContentLoaded", function(){
    //Store all components on HTML in JS
    let clear = document.querySelector('#clear-btn');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');
    
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent)
    }))
})

function handleNumber(num){
    console.log(num)
}