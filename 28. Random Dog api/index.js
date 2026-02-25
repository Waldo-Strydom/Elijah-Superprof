
    

// fetch("https://dog.ceo/api/breeds/image/random")
// .then(res=>res.json())
// .then((data)=>{
//     console.log(data)
//     if (data.status=="error") {
//     outImg.setAttribute("src", "./Assets/404.jpeg")
// }else{
//        outImg.setAttribute("src", data.message)
// }
// })
// const outImg = document.getElementById("outImg")



async function getDog(){
   const res = await fetch("https://dog.ceo/api/breeds/image/random")
if (!res.ok) {
    outImg.setAttribute("src", "./Assets/404.jpeg")
throw Error("Something went wrong.")
}
return res.json()

}





const dogBtn = document.getElementById("getDog")
const outImg = document.getElementById("outImg")
dogBtn.addEventListener("click",()=>{
let data = getDog()
.then((data)=>{
    outImg.setAttribute("src", data.message)
    
})
})


// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
// method: "POST",
// headers: { "Content-Type": "application/json", },
// body: JSON.stringify({
// title: "Buy Milk",
// completed: false
// })
// })
// .then(response => response.json())
// .then(data => console.log(data))