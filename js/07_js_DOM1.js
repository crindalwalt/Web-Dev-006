console.log("Hy there");

let paragraph = document.getElementById("para");
// console.log(paragraph)
paragraph.style.border = "3px solid black";
paragraph.style.padding = "2rem";
paragraph.style.borderRadius = "1rem";
paragraph.style.backgroundColor = "green";
paragraph.style.color = "white";

let myButton = document.getElementById("btn");
myButton.innerHTML = "<s>Dont Click me</s>";
myButton.innerText = "Dont Click me";
// console.log(myButton.classList[4])

let classElement = document.getElementsByClassName("first");
let firstElement = classElement[0];
firstElement.innerHTML = "Flow";
firstElement.addEventListener("click", function () {
  let body = document.getElementsByTagName("body")[0];
  (body.style.backgroundColor = "black"), (body.style.color = "white");
});
// console.log()

let allPara = document.getElementsByTagName("p");
console.log(allPara);
let index = 0;
while (index < allPara.length) {
  let elem = allPara[index];
  elem.style.border = "3px solid red";
  elem.style.padding = "2rem";
  index++;
}
// let body = document.getElementsByTagName("body")[0]
// body.style.backgroundColor = "black",
// body.style.color = "white"

// allPara[1].style.border = "3px solid red"
// allPara[2].style.border = "3px solid red"
// let myButton = document.getElementById("btn");
// console.log(myButton)

// myButton.style.backgroundColor = "seagreen";
// myButton.style.color = "white"
// myButton.style.padding = "1rem"
// myButton.style.margin = "1rem"
// myButton.innerHTML = "Dont Click me"




// let myPara = document.getElementsByClassName("para");
// console.log(myPara)
// myPara[1].style.backgroundColor = "red"



// let myPara = document.getElementsByTagName("h1");
// console.log(myPara)
// myPara[0].style.color = "yellow";


// let myElement = document.querySelector("#btn");
// console.log(myElement)
// myElement.style.color = "yellow"

// let qsAll = document.querySelectorAll(".para");
// console.log(qsAll)
