var quest=document.querySelector("#input");
var answer=document.querySelector("#ans");
var ask=document.querySelector("#btn");
var questions=["yes", "no", "maybe","stop thinking about that", "why not"]
var result;
ask.addEventListener("click",()=>{
    result=questions[Math.floor(Math.random()*questions.length)]
    answer.innerHTML=`<h3>${result}</h3>`
})
