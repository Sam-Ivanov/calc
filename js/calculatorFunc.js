let num1 = '';
let num2 = '';
let operator = '';
// let res = '';
const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '.'];
const operArr = ['+', '-', 'X', '÷'];
const out = document.querySelector('.calc__out');

let btn = document.querySelector('.calc__buttons');
btn.addEventListener('click', (e) => {
   if (e.target.classList.contains('row__btn')) {
      let key = e.target.textContent;

      if (key === 'C') {
         out.textContent = '';
         num1 = '';
         num2 = '';
         operator = '';
      }

      if (numArr.includes(key)) {
         if (num2 === '' && operator === '') {
            num1 += key;
            console.log(num1);
            out.textContent = num1;
         } else if (num1 !== '' && operator !== '') {
            num2 += key;
            out.textContent = num2;
         }
      }
      else if (operArr.includes(key)) {
         if (num1 === '') return;
         if (num1 !== '' && operator !== '' && num2 !== '') {
            out.textContent = calculate(num1, num2, operator);
            num1 = String(out.textContent);
            operator = key;
            num2 = '';
         } else {
            operator = key;
            out.textContent = key;
         }
      }
      else if (key === '=') {
         if (num2 === '0' && operator === '÷') {
            out.textContent = 'На 0 делить нельзя';
            num2 = '';
            operator = '';
            return;
         }
         out.textContent = calculate(num1, num2, operator);
         num1 = String(out.textContent);
         num2 = '';
         operator = '';
      }
   }
})



function calculate(num1, num2, operator) {
   return operator === '+' ? (+num1) + (+num2) :
      operator === '-' ? num1 - num2 :
         operator === 'X' ? num1 * num2 :
            operator === '÷' ? num1 / num2 : num1;
}

