let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");
let display = document.getElementById("display");

buttons.forEach(function run(button){
    button.addEventListener("click", function(e){
        let val = e.target.dataset.num;
        display.value += val;
    })
});

equals.addEventListener('click', function(){
    if(display.value === ''){
        display.value = 'Please Enter';
    }
    else{
        let ans = eval(display.value);
        display.value = ans;
    }
});

clear.addEventListener('click', function(){
    display.value = '';
});




