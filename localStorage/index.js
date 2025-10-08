let save = []
let parsed = ""

class Itm{
    constructor(name,score){
        this.name = name
        this.score = score
    }
}

const addScore = ()=>{
    const name= document.getElementById("nameIn").value
    const score= document.getElementById("scoreIn").value

    if(name=="" || score==""){
        alert("Please complete all forms.")
    }else{
        let i = new Itm(name,score)
        save.push(i)

        let row = document.createElement("tr")
        let pTd = document.createElement("td")
        let sTd = document.createElement("td")

        pTd.textContent = name
        sTd.textContent = score
        row.appendChild(pTd)
        row.appendChild(sTd)

        tbl.appendChild(row)
    }
}


const saveFun = ()=>{
    if(save.length!=0){
        localStorage.clear("scores")
        let stringer = JSON.stringify(save)
        localStorage.setItem("scores", stringer)
        alert("Scores saved")
    }else{
        alert("Nothing to save")
    }
}

const loadFun=()=>{

    let saved = localStorage.getItem("scores")
    if(saved!= null){
        let parsedSave = JSON.parse(saved)
        parsed= parsedSave

        clearTbl()
    }else{
        alert("Nothing saved")
    }
}

const clearTbl = ()=>{
    let len = tbl.children.length

    while(len>1){
        let it = tbl.lastChild
        it.remove()
        len-=1
    }
    updateTbl()

}

const updateTbl = ()=>{
    for(let i =0;i<parsed.length;i++){
        let j = new Itm(parsed[i].name, parsed[i].score)
        save.push(j)


let row = document.createElement("tr")
let pTd = document.createElement("td")
let sTd = document.createElement("td")

pTd.textContent=parsed[i].name
sTd.textContent=parsed[i].score
row.appendChild(pTd)
row.appendChild(sTd)

tbl.appendChild(row) 
        
    }
}

const del = ()=>{
localStorage.clear("scores")
parsed=""
modalDiv.classList.remove("hidden")
clearTbl()

}

const tbl = document.getElementById("sbTable")

const addBtn = document.getElementById("addBtn") 
addBtn.addEventListener("click", addScore)

const saveBtn = document.getElementById("saveBtn") 
saveBtn.addEventListener("click", saveFun)

const delBtn = document.getElementById("delBtn")
delBtn.addEventListener("click", del)

const modalCloseBtn = document.getElementById("modalClose")
const modalDiv = document.getElementById("modal")
modalCloseBtn.addEventListener("click", ()=>{
modalDiv.classList.add("hidden")
})

loadFun()

