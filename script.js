let btn1 = document.querySelector(".number1") 
let btn2 = document.querySelector(".number2") 
let btn3 = document.querySelector(".number3") 
let btn4 = document.querySelector(".number4") 
let btn5 = document.querySelector(".number5") 
let btn6 = document.querySelector(".number6") 
let btn7 = document.querySelector(".number7") 
let btn8 = document.querySelector(".number8") 
let btn9 = document.querySelector(".number9") 
let btn0 = document.querySelector(".number0") 
let btnplus = document.querySelector(".numberplus") 
let btnminus = document.querySelector(".numberminus") 
let btnmult = document.querySelector(".numbermult") 
let btndiv = document.querySelector(".numberdiv") 
let btndot = document.querySelector(".numberdot") 
let btnclr = document.querySelector(".numberclr") 
let btnequal = document.querySelector(".numberequal") 
 let dy = document.querySelector("#display") 

 btnequal.addEventListener('click',()=>{
    dy.value = eval(dy.value);
})
btn0.addEventListener('click',()=>{
    dy.value +="0"
})
btn1.addEventListener('click',()=>{
    dy.value +="1"
})

btn2.addEventListener('click',()=>{
    dy.value +="2"
})

btn3.addEventListener('click',()=>{
    dy.value +="3"
})

btn4.addEventListener('click',()=>{
    dy.value +="4"
})

btn5.addEventListener('click',()=>{
    dy.value +="5"
})

btn6.addEventListener('click',()=>{
    dy.value +="6"
})

btn7.addEventListener('click',()=>{
    dy.value +="7"
})

btn8.addEventListener('click',()=>{
    dy.value +="8"
})

btn9.addEventListener('click',()=>{
    dy.value +="9"
})

btnplus.addEventListener('click',()=>{
    dy.value +="+"
})

btnminus.addEventListener('click',()=>{
    dy.value +="-"
})

btnmult.addEventListener('click',()=>{
    dy.value +="*"
})

btndiv.addEventListener('click',()=>{
    dy.value +="/"
})

btndot.addEventListener('click',()=>{
    dy.value +="."
})

btnclr.addEventListener('click',()=>{
    dy.value=""
})



