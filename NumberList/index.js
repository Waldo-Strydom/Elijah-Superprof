


function demo(){
    const studentName = document.getElementById("studentName").value
    let studentScore = document.getElementById("studentScore").value

    if(studentScore==50){
        console.log("it's fifty")
    }else{
        console.log("Not fifty")
        
    }
    // implicit vs explicit

    studentScore=parseFloat(studentScore)
    console.log(typeof(studentScore))
    console.log(studentScore.toFixed(3))

    // parse Typeof, toFixed

    if(studentScore===50 && studentName==="John"){
        console.log("hi John")
    }else if(studentScore<50 && studentName==="John"){
        console.log("greater than 50")
    }else{
        console.log("else")
    }

    // if,else if, else/ && and greater/lesserthan 

    if(studentScore !=50){
        console.log("not 50")
    }
    // does not equal

    if(studentScore==50 || studentScore==60){
        console.log("50 or 60")
    }
    // or

    switch(studentScore){
        case 50:
            console.log("50")
        break;
        case 60:
            console.log("60")
        break;
        default:
            console.log("default")
        break;            
    }

    switch(true){
        case studentScore==50 && studentName=="John":
            console.log("case1")
        break;
        case studentScore==60 && studentName=="John":
            console.log("case2")
        break;       
    }

    // Switch
}


function getScore(){
    const studentName = document.getElementById("studentName").value
    let studentScore = document.getElementById("studentScore").value

    const outPut = document.getElementById("resultList")

    studentScore=parseFloat(studentScore)

    if(studentScore>=50){
        let newLi = document.createElement("li")
        newLi.textContent= `${studentName} ${studentScore}%`;
        outPut.appendChild(newLi)
        // outPut.insertBefore(newLi, outPut.children[0])
    }
}









const enterBtn = document.getElementById("enterBtn")
enterBtn.addEventListener("click", getScore)