var counterPlaceHolder = document.getElementById("counter-placeholder");
var btnIncrement = document.getElementById("btn-increment");
var btnDecrement= document.getElementById("btn-decrement");
var btnReset= document.getElementById("btn-reset");

var number = 0;

function changeColor(number){
    var color = "";
    if(number < 0){
        color ="red";
    }else if (number > 0){
        color = "green";
    }else{
        color= "white";
    }
    return color;
}
btnIncrement.addEventListener("click",function(){
    number++;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color =changeColor(number);
});
btnDecrement.addEventListener("click",function(){
    number--;
    counterPlaceHolder.innerHTML=number;
    counterPlaceHolder.style.color=changeColor(number);
});
btnReset.addEventListener("click",function(){
    number = 0;
    counterPlaceHolder.innerHTML=number;
    counterPlaceHolder.style.color=changeColor(number);
});
