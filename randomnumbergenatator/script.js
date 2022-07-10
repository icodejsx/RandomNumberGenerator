// const rand = math.floor(Math.random()* 100 + 1); 

// console.log(rand)

const number = document.querySelector(".number");
const btn = document.querySelector(".generate");


const generateNumber = () => {
    //Generate Number btn 1 and 100
    const randomNumber = Math.floor(Math.random() * 100 + 1); 
    number.innerHTML = randomNumber;

};

btn.addEventListener("click", generateNumber);

generateNumber();