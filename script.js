let main = document.querySelector(".main");
let child = document.querySelector(".child");
let subchild = document.querySelector(".subChild");
let button = document.querySelector(".yesButton");
let input = document.querySelector(".ageInput")
let result = document.querySelector('.result')

   button.addEventListener('click', ()=>{
   
    if (input.value) {
        let myAge = Number(input.value)
    
        let subTractFrom67 = 67 - myAge
    
    
        let addWith1956 = 1956 + subTractFrom67;
    
        console.log(addWith1956, typeof addWith1956);
    
        
        result.innerHTML = addWith1956;
        
    }

    input.value = ""


   })
