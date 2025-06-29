let myObject ={
firstName: "Joe",
age: 40,
pets: ["dog", "cat", "parrot"],
    car:{
make: "BMW",
model: "X5",
serviceYears:[2020,2022,["10 Jan", "7 Dec"]]
}
}
myObject.firstName="Steve"
console.log(myObject)
let carArr = []

class Car{
constructor(make,model){
this.make = make,
this.m = model
}
}

let joesCar = new Car("BMW","X5")
carArr.push(joesCar)
console.log(carArr)
console.log(joesCar.m)


const addCar = ()=>{
const make = document.getElementById("carMake").value;
const model = document.getElementById("carModel").value;

let newCarObj = new Car(make, model)
carArr.push(newCarObj)
console.log(carArr)
console.log(carArr[carArr.length-1].m)
}

const entBtn = document.getElementById("entBtn")
entBtn.addEventListener("click", addCar)