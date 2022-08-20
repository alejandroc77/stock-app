const inputName = document.querySelector("#productName");
const inputNumber = document.querySelector("#productNumber");

console.log({ inputName, inputNumber });

const boton = document.querySelector("button");

boton.addEventListener("click", (e) => {
  const name = inputName.value;
  const number = inputNumber.value;

  fetch('/api/v1/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      number,
    }),
  });
});
