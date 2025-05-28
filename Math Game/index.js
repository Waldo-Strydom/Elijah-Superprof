let ans = 0

const makeNewQuestion = ()=>{

    const opperator = document.getElementById("typeSelect").value
const questionOutput = document.getElementById("question")

let num1 = Math.floor(Math.random()*13)
let num2 = Math.floor(Math.random()*13)

if(opperator=="+"){
    ans = num1+num2
    }else{
    ans = num1-num2
    }

questionOutput.textContent= `${num1} ${opperator} ${num2} = ???`    

}


const checkAnswer = ()=>{
    const userAns = document.getElementById("numIn").value
    const answerOut = document.getElementById("marked")

    if(userAns==ans){
        answerOut.textContent="Correct!"
        }else{
        answerOut.textContent=`Incorrect. The answer is ${ans}`
        }

}











const newQuestion = document.getElementById("newQuestion")
newQuestion.addEventListener("click", makeNewQuestion)

const entBtn= document.getElementById("enterBtn")
entBtn.addEventListener("click", checkAnswer)