let counter = 0;

const negative = document.querySelector('.negative');
const positive = document.querySelector('.positive');
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
    } else{
        if(counter ===0){
            event.preventDefault();
        } else {
            counter--;
            count.textContent=counter;
        }
    }
}

document.addEventListener('click', buttonClick);