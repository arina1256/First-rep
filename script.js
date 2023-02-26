
  


function handle() {
  let inputs = document.querySelectorAll("input");
  let input_values = [];
  for (let i = 0; i < inputs.length; i++) {
      input_values.push(inputs[i].value);
      alert('Форма отправлена!');
  }
  

}

let button = document.querySelector('.btn');
if (button) 
console.log('.btn exist')
else console.log('.btn not found')
//button.addEventListener('click', handle);

