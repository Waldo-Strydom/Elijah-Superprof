let pos = 0
let speed = 0
let score = 0
let miss = 0

const scoreOut = document.getElementById("scoreOut")
const missOut = document.getElementById("missOut")

const placeNewBalloon = ()=>{
    let newBalloon = document.createElement("img")
    newBalloon.setAttribute("src", "./Assets/Balloon.png")
     newBalloon.setAttribute("draggable", "false")
     newBalloon.classList.add("balloonPic", "float", "noHighlight")

     let red = Math.floor(Math.random()*255)
     let green = Math.floor(Math.random()*255)
     let blue = Math.floor(Math.random()*255)

     newBalloon.style.backgroundColor = `rgb(${red},${green},${blue})`
     newBalloon.style.left=`${pos}vw`
     newBalloon.style.animation = `floatUp ${speed}s`;

     document.body.appendChild(newBalloon)

     newBalloon.addEventListener("click",()=>{
        newBalloon.remove()
        score+=1
        scoreOut.textContent=`Score: ${score}`
     })

}

const getPos = ()=>{
    pos = Math.floor(Math.random()*80)+10
}

const getSpeed = ()=>{
    speed = Math.floor(Math.random()*15)+15
    
}

const checkMissed = ()=>{
    let balloons = document.querySelectorAll(".float")
    balloons.forEach((e)=>{
        let balloonPos = e.y
        if(balloonPos <-20){
            miss+=1
            e.remove()
            missOut.textContent = `Miss: ${miss}`
        }
    })
}


const startProgram= setInterval(()=>{
    if(miss<5){
        checkMissed()
        getSpeed()
        getPos()
        placeNewBalloon()
    }else{
         endScreen();
    }
},3000)


const endScreen = ()=>{
    let balloons = document.querySelectorAll(".float")
    balloons.forEach((e)=>{
        e.remove()
    })

    let endMsg = document.createElement("h1")
    endMsg.textContent = `The End. You scored ${score}`
    document.body.appendChild(endMsg)

    clearInterval(startProgram)
}