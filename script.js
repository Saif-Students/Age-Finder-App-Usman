let main = document.querySelector(".main");
let child = document.querySelector(".child");
let subchild = document.querySelector(".subChild");
let button = document.querySelector(".yesButton");
let input = document.querySelector(".ageInput")
let result = document.querySelector('.result')

   button.addEventListener('click', ()=>{
   
    if (input.value) {
        let myAge = Number(input.value)
    
        let subTractFrom57 = 57 - myAge
    
    
        let addWith1967 = 1967 + subTractFrom57;
    
        console.log(addWith1967, typeof addWith1967);
    
        
        result.innerHTML = addWith1967;
        
    }

    input.value = ""


   })