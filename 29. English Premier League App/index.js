let i = 0
let data = ""
let obj = ""
let str = `https://www.thesportsdb.com/api/v1/json/123/`
const getMatchBtn = document.getElementById("getMatch")

const output = document.getElementById("output")
const teamDiv = document.getElementById("teamDiv")


const hName= document.getElementById("hName")
const hTeamLogo= document.getElementById("hTeamLogo")
const hScore= document.getElementById("hScore")


const aName= document.getElementById("aName")
const aTeamLogo= document.getElementById("aTeamLogo")
const aScore= document.getElementById("aScore")

const dateText= document.getElementById("dateText")
const venueText= document.getElementById("venueText")
const vidLink= document.getElementById("vidLink")
const vidText= document.getElementById("vidText")

const prevAndNxtDiv = document.getElementById("ntxAndPrevDiv")
const prevBtn= document.getElementById("prev")
const nxtBtn= document.getElementById("nxt")


async function getMatch(){
    
   const res = await fetch(str)
if (!res.ok) {

    let newMsg = document.createElement("p")
    newMsg.textContent="Error! Please try a different option."
    document.body.insertBefore(newMsg, document.body.children[0]);
    
    clearMatch()

throw Error("Something went wrong.")
}
return res.json()

}
// storage
let localMatches = {

}

let localTeams = {

}

class Team{
    constructor(players){
        this.players = players;
    }
}

class Match{
    constructor(event){
        this.event = event
        
    }
}
// storage
const clearMatch = ()=>{
             hName.textContent = ""
    hTeamLogo.setAttribute("src","")
    hScore.textContent = ""

    aName.textContent = ""
    aTeamLogo.setAttribute("src","")
    aScore.textContent = ""

    dateText.textContent = ""
    venueText.textContent = ""
    vidLink.setAttribute("href", "")
    vidText.textContent = "No video available."
    vidLink.style.cursor = "not-allowed";
}

const displayMatch = (data)=>{

    if(document.getElementById("err")){
        document.getElementById("err").remove()
    }

// Look at local data
     const eventArr = data["event"]

    if(eventArr==null&&output.children[0].id!="err"){
    
     
    let newMsg = document.createElement("p")
    newMsg.setAttribute("id","err")
    newMsg.textContent="Error! Please try a different option."
    output.insertBefore(newMsg, output.children[0]);
     clearMatch()   

    }else{

    

   
    hName.textContent = eventArr[i].strHomeTeam
    hTeamLogo.setAttribute("src",eventArr[i].strHomeTeamBadge)
    hScore.textContent = eventArr[i].intHomeScore

    aName.textContent = eventArr[i].strAwayTeam
    aTeamLogo.setAttribute("src",eventArr[i].strAwayTeamBadge)
    aScore.textContent = eventArr[i].intAwayScore

    dateText.textContent = eventArr[i].dateEvent
    venueText.textContent = eventArr[i].strVenue
    vidLink.setAttribute("href", eventArr[i].strVideo)
    if(eventArr[i].strVideo==null){
        vidText.textContent = "No video available."
        vidLink.style.cursor = "not-allowed";
    }else{
        vidText.textContent = "Highlights Video"
        vidLink.style.cursor = "pointer";
    }
 

    vidLink.addEventListener("click",(e)=>{
            e.preventDefault();
            window.open(vidLink.href)
    })

    if(i==0){
        prevBtn.disabled=true
    }else{
        prevBtn.disabled=false
    }
    if(i==eventArr.length-1){
        nxtBtn.disabled=true
    }else{
        nxtBtn.disabled=false
    }

    if(eventArr.length==1){
        nxtBtn.disabled=true
    }

    }
}





getMatchBtn.addEventListener("click",()=>{

        if(document.querySelector(".playerInfoDiv")){

      
        document.querySelectorAll(".playerInfoDiv").forEach((e)=>{
            e.remove()
        })
    }

        if(teamDiv.classList.contains("hidden")){
        teamDiv.classList.remove("hidden")
        dateText.classList.remove("hidden")
        venueText.classList.remove("hidden")
        vidLink.classList.remove("hidden")
        prevAndNxtDiv.classList.remove("hidden")

    }


    if(output.classList.contains("hidden")){
        output.classList.remove("hidden")
    }
    data = ""
    str = `https://www.thesportsdb.com/api/v1/json/123/`
    const team1 = document.getElementById("team1")
const team2 = document.getElementById("team2")
    str+= `searchevents.php?e=${team1.value}_vs_${team2.value}`;
    // use local
    let key = `${team1.value}_vs_${team2.value}`
    if(localMatches[key]==null){
     data = getMatch()
.then((data)=>{
    obj = data
    i=0
    // add to local
    let nMatch =new Match(obj)
    localMatches[key] = nMatch
    


   displayMatch(obj)

})
.catch((error)=>{
   
   let newMsg = document.createElement("p")
    newMsg.setAttribute("id","err")
    if(error=="TypeError: Failed to fetch"){
        newMsg.textContent=`Error! Check internet connection.`
    }else{
         newMsg.textContent=`Error! Please try a different option.`
    }

    output.insertBefore(newMsg, output.children[0]);  
})
    }else{
    // use local
        obj = localMatches[key].event
     
        displayMatch(obj)
    }
 
})

       prevBtn.addEventListener("click",()=>{

        i-=1;
        displayMatch(obj)
    })

    nxtBtn.addEventListener("click", ()=>{
        i+=1;

        displayMatch(obj)
    })

//https://www.thesportsdb.com/api/v1/json/123/searchevents.php?e=Arsenal_vs_Chelsea
//https://www.thesportsdb.com/api/v1/json/123/1searchevents.php?e=Arsenal_vs_Aston%20Villasearchevents.php?e=Arsenal_vs_Chelsea   


// Team list

async function getId(str){
     const res = await fetch(str)
if (!res.ok) {

      showError()



throw Error("Something went wrong.")
}
return res.json()

}

async function getPlayers(str){
     const res = await fetch(str)
if (!res.ok) {

    
    showError()


    

throw Error("Something went wrong.")
}
return res.json()

}

const showError = ()=>{

    if(output.children[0].id!="err"){
    let newMsg = document.createElement("p")
    newMsg.setAttribute("id","err")
    newMsg.textContent="Error! Please try a different option."
    output.insertBefore(newMsg, output.children[0])
    }
}


const getListBtn = document.getElementById("listBtn")

getListBtn.addEventListener("click",()=>{

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

const playerList = document.getElementById("playerList").value

        if(output.classList.contains("hidden")){
        output.classList.remove("hidden")
    }

    if(!teamDiv.classList.contains("hidden")){
        teamDiv.classList.add("hidden")
        dateText.classList.add("hidden")
        venueText.classList.add("hidden")
        vidLink.classList.add("hidden")
        prevAndNxtDiv.classList.add("hidden")

    }

    let key = `${playerList}`

    if(localTeams[key]==null){
    
    let str = `https://www.thesportsdb.com/api/v1/json/123/`
    
    str+=`searchteams.php?t=${playerList}`;

     data = getId(str)
.then((data)=>{
 
    let id = data.teams[0].idTeam
    str = `https://www.thesportsdb.com/api/v1/json/123/`
    let newStr = str+=`lookup_all_players.php?id=${id}`

    let newData=getPlayers(newStr)
    .then((newData)=>{

            let nTeam =new Team(newData)
    localTeams[key] = nTeam
 
        displayTeam(newData)
    })
    .catch((error)=>{
   let newMsg = document.createElement("p")
    newMsg.setAttribute("id","err")
    if(error=="TypeError: Failed to fetch"){
        newMsg.textContent=`Error! Check internet connection.`
    }else{
         newMsg.textContent=`Error! Please try a different option.`
    }

    output.insertBefore(newMsg, output.children[0]);  
})
})
.catch((error)=>{
   let newMsg = document.createElement("p")
    newMsg.setAttribute("id","err")
    if(error=="TypeError: Failed to fetch"){
        newMsg.textContent=`Error! Check internet connection.`
    }else{
         newMsg.textContent=`Error! Please try a different option.`
    }

    output.insertBefore(newMsg, output.children[0]);  
})
    
    }else{
        newData = localTeams[`${playerList}`].players

        displayTeam(newData)
    }

    
        

    
})

const  displayTeam = (list)=>{

    if(document.getElementById("err")){
        document.getElementById("err").remove()
    }


     const eventArr = list["player"]

         if(eventArr==null&&output.children[0].id!="err"){
  
    let newMsg = document.createElement("p")
    newMsg.setAttribute("id","err")
    newMsg.textContent="Error! Please try a different option."

    output.insertBefore(newMsg, output.children[0]);


    teamDiv.classList.add("hidden")
         }
    if(document.querySelector(".playerInfoDiv")){
    
      
        document.querySelectorAll(".playerInfoDiv").forEach((e)=>{
            e.remove()
        })
    }

    let players = list.player


    for(player of players){
      let newPlayerInfoDiv = document.createElement("div")
      newPlayerInfoDiv.classList.add("playerInfoDiv")
      output.appendChild(newPlayerInfoDiv)

      let newinfoDiv = document.createElement("div")
      newinfoDiv.classList.add("infoDiv")
      newPlayerInfoDiv.appendChild(newinfoDiv)

      let newPName = document.createElement("p")
        newPName.textContent= `${player.strPlayer}`
        newPName.classList.add("pName")
        newinfoDiv.appendChild(newPName)

      let newPNum = document.createElement("p")
        newPNum.textContent= `${player.strNumber}`
        newPNum.classList.add("pNum")
        newinfoDiv.appendChild(newPNum)  
        
      let newImg = document.createElement("img")
        newImg.classList.add("pPic")
        newImg.setAttribute("src",`${player.strCutout}`)
        newImg.setAttribute("alt", `Picture of ${player.strPlayer}`)
        newinfoDiv.appendChild(newImg)   
        
      let newPBio = document.createElement("p")
        newPBio.textContent= `${player.strDescriptionEN}`
        newPBio.classList.add("pBio")
        newPlayerInfoDiv.appendChild(newPBio)   

    }
}
