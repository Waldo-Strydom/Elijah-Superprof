let count = 0

function countFun(){
    count=count+1
    const output = document.getElementById("out")
    output.textContent=count
}



const btn = document.getElementById("btn")
btn.addEventListener("click", countFun )