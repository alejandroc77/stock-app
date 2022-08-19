
const inputName = document.querySelector('#productName')
const inputNumber = document.querySelector('#productNumber')

console.log({inputName,inputNumber});

const boton = document.querySelector('button');

boton.addEventListener('click',(e) =>{
        console.log({nombre:inputName.value, precio:inputNumber.value });
})