console.log("DOM 2");

/**
 * Events
 *  click
 *  dblclick
 *  mouseover
 *      mouseenter
 *      mouseleave
 *  keydown
 *  focus
 *  blur
 *  change
 *  
 * 
 * 
 */


function onButtonInteract(event){
    let elem = event.target;
    console.log("you clicked the button");
    elem.style.padding = ".7rem 1.2rem";
    elem.style.backgroundColor = "salmon";
    elem.style.color = "white"
}
function onKeyDown (e){
    // console.log(e);
    console.log("key is pressed");
    if(e.key == "e"){
        if(e.ctrlKey){
            e.target.innerText = "Bhai aj se tum secret society me ho";
        }
    }
    
}


let myButton = document.querySelector("#btn");
let txtarea = document.querySelector("#txtarea");
myButton.addEventListener("click",onButtonInteract);
txtarea.addEventListener("change",onKeyDown)




