
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");



let xPos = 0
let yPos = 0
let size = 5
let red = 0
let green = 0
let blue = 0

ctx.fillStyle = `rgb(${red},${green},${blue})`;

canvas.addEventListener("mousedown",(e)=>{
  drawFun(e)
  let drawing = true
  canvas.addEventListener("mousemove",(e)=>{
    if(drawing){
        drawFun(e)
    }
    
  })

  canvas.addEventListener("mouseup",(e)=>{
    drawing = false;
  })

})

canvas.addEventListener("touchstart",(e)=>{
 
  drawTouchFun(e)
  let drawing = true
  canvas.addEventListener("touchmove",(e)=>{
    if(drawing){
   

        drawTouchFun(e)
    }
    
  })

  canvas.addEventListener("touchend",(e)=>{
   
    drawing = false;
  })

})

const drawFun = (e)=>{
   var rect = canvas.getBoundingClientRect();

    let ret = getMousePos(canvas,e)

    ctx.fillRect(xPos, yPos, size, size/2);
    console.log(size)
}

const drawTouchFun = (e)=>{
   var rect = canvas.getBoundingClientRect();
    
    let ret = getTouchPos(canvas,e)

    ctx.fillRect(xPos, yPos, size, size/2);
}

function  getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y

  
    xPos = (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    yPos = (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  
    xPos-=size/2
    yPos-=size/2


    
}

function  getTouchPos(canvas, evt) {
  const touch = evt.touches[0];   
  var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y

  
    xPos = (touch.pageX - rect.left) * scaleX,   // scale mouse coordinates after they have
    yPos = (touch.pageY- rect.top) * scaleY     // been adjusted to be relative to element
  
    xPos-=size/2
    yPos-=size/2

    
}






// Open/close
const controlDiv = document.getElementById("controlDiv")
const openBtn = document.getElementById("openControlBtn")
openBtn.addEventListener("click",()=>{
    if(controlDiv.classList.contains("close")){
        controlDiv.classList.replace("close","open")
    }else{
        controlDiv.classList.add("open")
    }
    
})



const closeBtn = document.getElementById("backArrow")
closeBtn.addEventListener("click",()=>{
closeFun()
    
})

const closeFun = ()=>{
    if(controlDiv.classList.contains("open")){
        controlDiv.classList.replace("open","close")
    }else{
        controlDiv.classList.add("close")
    }
}

// Size control
const sizeBtns = document.querySelectorAll(".sBtn")
const sizeTxt = document.getElementById("sizeTxt")
const sizeDisplay = document.getElementById("sizeDisplay")

sizeBtns.forEach((e)=>{
    e.addEventListener("mousedown",()=>{
        let sizePressed = true
     
                 updateSize(e)

       
    
    e.addEventListener("mouseup",()=>{
        
            sizePressed=false
            clearInterval(changeSize)
        })
        
        if(sizePressed){
            var changeSize = setInterval(()=>{
                updateSize(e)


            },100)
            
        }
        })

        })

sizeBtns.forEach((e)=>{
    e.addEventListener("touchstart",()=>{
        let sizePressed = true
  
      
    e.addEventListener("touchend",()=>{
            sizePressed=false
 
            clearInterval(changeSize)
        })
        
        if(sizePressed){
            var changeSize = setInterval(()=>{
                updateSize(e)
            },100)
            
        }
        })

        })


const updateSize = (e)=>{
    if(e.textContent=="+"){
        size+=1

    }else{
        size-=1
    }
    sizeTxt.textContent=`Size: ${size}`;
    sizeDisplay.style.width = `${size}px`;
    sizeDisplay.style.height = `${size}px`;
}

// colour change

const colSquares = document.querySelectorAll(".colSquare")
colSquares.forEach((e)=>{
    e.style.backgroundColor = `rgb${e.textContent}`
    e.style.fontSize = "0px"
    e.addEventListener("click",()=>{
        colSquareFun(e.textContent)})
})


const colSquareFun = (colourText)=>{

    let parsedText = colourText.split(",")
    // (0,0,0)
    let r = parsedText[0].split("(")
    r=parseInt(r[1])

    let g = parsedText[1]
    g = parseInt(g)
    
    let b = parsedText[2].split(")")
    b = parseInt(b)

red= r
green = g
blue = b

ctx.fillStyle = `rgb(${red},${green},${blue})`;
 colourDisplay.style.backgroundColor = `rgb(${red},${green},${blue})`;

         rTxt.textContent=`Red: ${red}`;
        gTxt.textContent=`green: ${green}`;
        bTxt.textContent=`Blue: ${blue}`;


}

const colBtns = document.querySelectorAll(".colBtn")
const colourDisplay = document.getElementById("colourDisplay")

const rTxt = document.getElementById("rTxt")
const gTxt = document.getElementById("gTxt")
const bTxt = document.getElementById("bTxt")

colBtns.forEach((e)=>{
    e.addEventListener("mousedown",()=>{
        let colPressed = true

                 updateColNum(e)

       
    
    e.addEventListener("mouseup",()=>{

            colPressed=false
            clearInterval(addCol)
        })
        
        if(colPressed){
            var addCol = setInterval(()=>{
                updateColNum(e)

            },100)
            
        }
        })

        })

colBtns.forEach((e)=>{
    e.addEventListener("touchstart",()=>{
        let colPressed = true

       
    
    e.addEventListener("touchend",()=>{
      
            colPressed=false
            clearInterval(addCol)
        })
        
        if(colPressed){
            var addCol = setInterval(()=>{
                updateColNum(e)

            },100)
            
        }
        })

        })

const updateColNum = (e)=>{
        switch(true){
            case e.classList.contains("rBtn"):
                if(e.textContent=="+" && red<255){
                    red+=1
                }
                if(e.textContent=="-" && red>0){
                    red-=1
                }
                rTxt.textContent=`Red: ${red}`;
            break;

            case e.classList.contains("gBtn"):
                if(e.textContent=="+" && green<255){
                    green+=1
                }
                if(e.textContent=="-" && green>0){
                    green-=1
                }
                 gTxt.textContent=`green: ${green}`;
            break;

            case e.classList.contains("bBtn"):
                if(e.textContent=="+" && blue<255){
                    blue+=1
                }
                if(e.textContent=="-" && blue>0){
                    blue-=1
                }
                bTxt.textContent=`Blue: ${blue}`;
            break;

        }

        ctx.fillStyle = `rgb(${red},${green},${blue})`;
        colourDisplay.style.backgroundColor = `rgb(${red},${green},${blue})`;

}


// Clear canvas

const clearBtn = document.getElementById("clearCanvasBtn")
clearBtn.addEventListener("click", ()=>{
    ctx.fillStyle = `rgb(250,250,250)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgb(${red},${green},${blue})`;
    closeFun()

})

// Eraser
const eraserBtn = document.getElementById("eraserBtn")
eraserBtn.addEventListener("click", ()=>{

    red = 250
    green = 250
    blue = 250

        ctx.fillStyle = `rgb(${red},${green},${blue})`;
        colourDisplay.style.backgroundColor = `rgb(${red},${green},${blue})`;
    
        rTxt.textContent=`Red: ${red}`;
        gTxt.textContent=`green: ${green}`;
        bTxt.textContent=`Blue: ${blue}`;

})