 
const number1 = +prompt('Введіть перше число');
const number2 = +prompt('Введіть друге число');
const number3 = +prompt('Введіть третє число');

const myFunc = (a, b, c) => (a + b + c) / 3;

alert(`Середнє арифметичне чисел ${number1}, ${number2}, ${number3}:
 ${myFunc(number1, number2, number3)}`);