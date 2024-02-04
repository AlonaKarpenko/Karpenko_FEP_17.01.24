//  ------ 1
let i = 20;
let m = " ";

 do {
    i = i + 0.5;
    m += ' ' + i;
} while (i < 30);

console.log(m);


//  ------ 2
let j = 0;
let dollar = 27;
let result = " ";

do {
    j = j + 10;
    result += ' ' + dollar * j;
} while (j < 100);

console.log(result);
 
// -------3
let number = +prompt('Введіть ціле число number');
let k = 0;
let d = ' ';

if ( (/^\d+$/.test(number)) && number !== 0 )  {
    do {
        k++;
        let result2 = (k ** 2);
        if (result2 > number) break;
         d += ' ' + k;  
    } while (k <= 100);
} else {
    console.log("Число повинно бути цілим і не дорівнювати нулю");
}
console.log(d);


//   -------4
const prNumber = +prompt('Введіть ціле число prNumber');

 function primeNumb(num) {
    if (num > 1 &&  (/^\d+$/.test(num))) {
        for (let p = 2; p < num; p++) {
            if (num % p == 0) {
                return 'Число не просте';
            }
        }
        return 'Число просте';
    }
    else { return 'Число повинно бути більше 1 і ціле'; }
}
console.log(primeNumb(prNumber));


// ------ 5 
const N = +prompt('Введіть будь яке число');
let y = 1;
function pow(num, degree) {
    if (degree == 1) { return num; } else {
        return num * pow(num, degree - 1);
    }
}
function degree(a) {
    if (a == 0) return 'Число повинно бути більше нуля';
    else {
        do {
            let result3 = pow(3, y);
            y++;
            if (result3 == a) return `Число ${a} є результатом піднесення до степіня числа 3`;
            else continue;
        } while (y <= a);
        return `Число ${a} не є результатом піднесення до степіня числа 3`;
    }
}   

console.log(degree(N));


