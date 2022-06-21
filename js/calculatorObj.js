function Calculator() {
   this.num1 = '';
   this.num2 = '';
   this.operator = '';
   this.res = '';
   this.numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '.'];
   this.operArr = ['+', '-', 'X', '÷'];

   this.view = new View();

   this.calculate = function (num1, num2, operator) {
      return operator === '+' ? (+num1) + (+num2) :
         operator === '-' ? num1 - num2 :
            operator === 'X' ? num1 * num2 :
               operator === '÷' ? num1 / num2 : 'wrong operator';
   }

   this.parse = function () {
      let btn = document.querySelector('.calc__buttons');
      btn.addEventListener('click', (e) => {
         if (e.target.classList.contains('row__btn')) {
            console.log(`клик на ${e.target.textContent}`);
         }
      })
   }

   this.start = function () { }
}




function View() {
   this.out = document.querySelector('.calc__out');
   this.setOut = function (res) {
      this.out.textContent = res;
   }
}

let c = new Calculator();
c.parse();








