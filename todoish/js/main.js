
let clickFunc = (e)=>{
    // console.log(e.target.children[0]);
    let firstDiv = e.target.children[0];
    let elem = e.target;
    let checkbox = elem.querySelector(".checkbox");
    checkbox.checked = "true";
    let paraText = elem.querySelector(".text");
    console.log(paraText)
    paraText.style.textDecoration  = "line-through"
    // elem.style.backgroundColor = "white";
    
    console.log("you clicked the elements");
}
let todoBox = document.querySelectorAll(".todo-item");
// console.log(todoBox)
let index = 0;
while(index < todoBox.length){
    let element = todoBox[index];
    element.addEventListener("click",clickFunc)
    index++;
}