let counter = 0;

const negative = document.querySelector('.negative');
const positive = document.querySelector('.positive');
const reset = document.querySelector('.reset');
const count = document.querySelector('.count');



const buttonClick = (event) => {
    let operator = event.target.className;
    
    if(operator === 'positive'){
        if(counter === 10){
            event.preventDefault();
        } else {
            counter++;
            count.textContent = counter;
        }
    } else if (operator === 'negative'){
        if(counter ===0){
            event.preventDefault();
        } else {
            counter--;
            count.textContent=counter;
        }
    } else if (operator === 'reset'){
        counter = 0;
        count.textContent = 0;
    }

    // console.log(operator);
    // console.log(event);
}

document.addEventListener('click', buttonClick);