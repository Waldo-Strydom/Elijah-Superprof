
// const arrayFun=()=>{
//     let arr = ["John", "Joe", "Steve", "Ken"]
//     console.log(arr[2])

//     arr[arr.length-1]= "Bob"
//     console.log(arr)

//     arr.push("Ned")
//     console.log(arr)

//     let popped = arr.pop()
//     console.log(popped)
//     console.log(arr)

//    let sliced =  arr.slice(1,3)
//     console.log(sliced)
//     console.log(arr)
//     // returns new array
//     // Starts at 1 and goes up to, but does not include 3
//     // Does not alter original.

//     let spliced = arr.splice(1,3)
//     console.log(spliced)
//     console.log(arr)
//     // returns new array
//     // Starts at 1 and goes up to, but does not include 3
//     // Does alter original.

//     arr = ["John", "Joe", "Steve", "Ken"]

//     loops(arr)

// }

// const loops = (nameArray)=>{
//     // console.log(nameArray)
//     // console.log(arr)



//     // for(let i = 0;i<nameArray.length;i++){
//     //     console.log(nameArray[i])
//     // }

//     // nameArray.forEach(e => {
//     //     console.log(e)
//     // });

//     // let i = 0
//     // let num = 0
//     // while(i<4){
//     //     num+=1
//     //     console.log(num)
//     //     i+=2
//     // }

//     let i = 2
//     do {
//         console.log(nameArray[0])
//         i++
//     } while(i<4)

//     for(i in nameArray){
//         console.log(nameArray[i])
//     }


// }



const scramble=()=>{
    let input = document.getElementById("input").value
    let original = input
    let scram = ""
// java
    let wordArr = []

    for(let i =0;i<input.length;i++){
        let letter = input[i]
    
        wordArr.push(letter)
    }
    let len = input.length
    
    while(len>0){
        let ran = Math.floor(Math.random()*len)

        let letter = wordArr[ran]
        scram+=letter

        wordArr.splice(ran, 1)
        len--
    }

    const tbl = document.getElementById("outputTbl")
    const newRow = document.createElement("tr")
    const orTd = document.createElement("td")
    const scramTd = document.createElement("td")

    orTd.textContent = original
    scramTd.textContent = scram

    newRow.appendChild(orTd)
    newRow.appendChild(scramTd)

    tbl.appendChild(newRow)
 
}


let vat = 15


vat = 10

const enterBtn = document.getElementById("etrBtn")
enterBtn.addEventListener("click", scramble)