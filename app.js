const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')



let calculation = []
let accumulativeCalculation

function calculate(button){

    
    //A click gives us <button>1<button/> , value of button

    //remove other stuff and live only the value
    const value = button.textContent


    if(value == "CLEAR"){
        calculation = []
        screenDisplay.textContent = "."
    }
    else if(value === "="){
       screenDisplay.textContent = eval(accumulativeCalculation); 
    }
    else{
        calculation.push(value)
        //Dislay after a click
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation

    }

    


}


//We use call backs
buttons.forEach(button => button.addEventListener("click", ()=> calculate(button)))