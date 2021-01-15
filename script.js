const switcher = document.querySelector("#switch")

const boxContainer = document.querySelector("#boxes")

const boxes = document.querySelectorAll(".box")

const boxLeft = document.querySelector(".left")
const boxMiddle = document.querySelector(".middle")
const boxRight = document.querySelector(".right")
const btnLeft = document.querySelector(".btn-left")
const btnRight = document.querySelector(".btn-right")
const btnMid = document.querySelector(".btn-middle")


//switch prices

switcher.addEventListener("change", _=>{    
    document.querySelectorAll(".price__month").forEach(e=>e.classList.toggle("show"))
    document.querySelectorAll(".price__year").forEach(e=>e.classList.toggle("show"))    
})



//handle toggling

function toggleElements(elemPosition){

    //click basic (or .left)
    if(elemPosition===0){ 
        toggleBox(boxLeft, "active", "blue")      
        toggleBox(boxMiddle, "active", "blue") 
        toggleBtns(btnLeft, btnMid, "btn")        

        if(boxLeft.classList.contains("blue")){
            removeBoxes(boxRight, boxMiddle, "active2", "blue")
            removeBtns(btnRight, btnMid, "btn")           
        }                                                     
    }   

    //click master (or .right)
    if(elemPosition >= 800 || 
        elemPosition >= 700 || 
        elemPosition >= 600 || 
        elemPosition >= 500 || 
        elemPosition >= 400){
        toggleBox(boxRight, "active2", "blue")
        toggleBox(boxMiddle, "active2", "blue")             
        toggleBtns(btnRight, btnMid, "btn")        
       
        if(boxRight.classList.contains("blue")){
            removeBoxes(boxLeft, boxMiddle, "active", "blue")            
            removeBtns(btnLeft, btnMid, "btn") 
        }
    }   
}

boxContainer.addEventListener("click", e=>{ 
    if(window.innerWidth > 650){
        let containerX = boxContainer.getBoundingClientRect().x           

        let target = e.target.closest(".box")        
        
        let targetX = target.getBoundingClientRect().x       
        
        let position = targetX - containerX        
        
        toggleElements((Math.ceil(position)))
    }    
})




//reusable functions 

function toggleBox(elem, class1, class2){
    elem.classList.toggle(class1)
    elem.classList.toggle(class2)
}

function toggleBtns(elem1, elem2, class3){
    elem1.classList.toggle(class3)
    elem2.classList.toggle(class3)
}

function removeBoxes(elem1, elem2, class1, class2){
    elem1.classList.remove(class1, class2)
    elem2.classList.remove(class1, class2)
}

function removeBtns(elem1, elem2, class3){
    elem1.classList.remove(class3)
    elem2.classList.remove(class3)
}
