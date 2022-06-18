let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '.'];
const action = ['-', '+', 'X', '÷'];

const out = document.querySelector('.calc__out');

function clearALL() {
   a = '';
   b = '';
   sign = '';
   finish = false;
   out.textContent = 0;
}

document.querySelector('.clear').onclick = clearALL;

document.querySelector('.calc__buttons').addEventListener('click', e => {

   if (!e.target.classList.contains('row__btn')) return;
   if (e.target.classList.contains('clear')) return;

   out.textContent = '';

   const key = e.target.textContent;

   if (digit.includes(key)) {
      if (b === '' && sign === '') {
         a += key;
         out.textContent = a;
      }
      else if (a !== '' && b !== '' && finish) {
         b = key;
         finish = false;
         out.textContent = b;
      }
      else {
         b += key;
         out.textContent = b;
      }
      return;
   }

   if (action.includes(key)) {
      sign = key;
      out.textContent = sign;
      return;
   }

   if (key === '=') {
      if (a === '' && b === '') {
         clearALL();
         return;
      }
      switch (sign) {
         case '+': a = (+a) + (+b);
            break;
         case '-': a = a - b;
            break;
         case 'X': a = a * b;
            break;
         case '÷':
            if (b === '0') {
               out.textContent = 'На 0 делить нельзя';
               a = '';
               b = '';
               sigh = '';
               return;
            }
            a = a / b;
            break;
      }
      finish = true;
      out.textContent = a;
   }



})

