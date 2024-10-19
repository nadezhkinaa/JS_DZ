//DZ-4 Функции
console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.',
);
const squareNumber = (number) => number ** 2;
console.log(squareNumber(5));

console.log(
    '------------------------------------------------------------------------------',
);
console.log('2. Сделайте функцию, которая возвращает сумму двух чисел');
const sumNumbers = (number1, number2) => number1 + number2;
console.log(sumNumbers(5, 3));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.',
);
const operationsNumbers = (number1, number2, number3) =>
    (number1 - number2) / number3;
console.log(operationsNumbers(10, 2, 4));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.',
);

function initDaysofWeek(numberWeek) {
    arrDays = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ];
    if (numberWeek >= 1 && numberWeek <= 7) {
        return arrDays[numberWeek - 1];
    } else {
        return 'Неправильный ввод';
    }
}

console.log(initDaysofWeek(2));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '5. Сделайте функцию, которая параметрами принимает 2 числа.Если эти числа равны - пусть функция вернет true, а если неравны - false.',
);

function comparisonNumbers(number1, number2) {
    return number1 === number2;
}

console.log(comparisonNumbers(1, 4));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '6. Сделайте функцию, которая параметрами принимает 2 числа.Если их сумма больше 10 - пусть вернет true, а если нет то -false',
);

function isBiger10(number1, number2) {
    return number1 + number2 > 10;
}
console.log(isBiger10(7, 4));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '7. Сделайте функцию, которая параметром принимает число ипроверяет - отрицательное оно или нет. Если отрицательное -пусть функция вернет true, а если нет - false',
);

const isPositive = (number) => {
    return number >= 0;
};

console.log(isPositive(4));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '8. Сделайте функцию isNumberInRange, которая параметромпринимает число и проверяет, что оно больше нуля и меньше10. Если это так - пусть функция возвращает true, если не так -false.',
);

const isNumberInRange = function(number) {
    return number > 0 && number < 10;
};

console.log(isNumberInRange(0));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '9. Дан массив с числами. Запишите в новый массив только течисла, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи',
);

const arr = [5, 10, 4, 7, 0, -3, 13];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i])) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр',
);

const getDigitsSum = (number) => {
    let sum = 0;
    let tempNumber = Math.abs(number);

    while (tempNumber > 0) {
        sum += tempNumber % 10;
        tempNumber = Math.floor(tempNumber / 10);
    }

    return sum;
};

console.log(getDigitsSum(123));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.',
);

let arrDigits = [];
for (let i = 1; i <= 2020; i++) {
    if (getDigitsSum(i) === 13) {
        arrDigits.push(i);
    }
}
console.log(arrDigits);

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '12. Сделайте функцию isEven() (even - это четный), котораяпараметром принимает целое число и проверяет: четное оноили нет. Если четное - пусть функция возвращает true, еслинечетное - false.',
);
const isEven = function(number) {
    return number % 2 == 0;
};

console.log(isEven(15));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '13. Дан массив с целыми числами. Создайте из него новыймассив, где останутся лежать только четные из этих чисел.Для этого используйте вспомогательную функцию isEven изпредыдущей задачи.',
);

const array = [1, 5, 3, 8, 10, 2, 7, 15, 20];
let arrayNew = [];

for (let i = 0; i < array.length; i++) {
    if (isEven(array[i])) {
        arrayNew.push(array[i]);
    }
}

console.log(arrayNew);

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '14. Сделайте функцию getDivisors, которая параметромпринимает число и возвращает массив его делителей (чисел,на которое делится данное число).',
);

function getDivisors(number) {
    let massiv = [];
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            massiv.push(i);
        }
    }
    return massiv;
}

console.log(getDivisors(10));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '15. Дано число. Сложите его цифры. Если сумма получиласьболее 9-ти, опять сложите его цифры. И так, пока сумма нестанет однозначным числом (9 и менее).',
);

function sumNumbersNine(number) {
    while (number > 9) {
        let sum = 0;
        let tempNumber = number;

        while (tempNumber > 0) {
            sum += tempNumber % 10;
            tempNumber = Math.floor(tempNumber / 10);
        }

        number = sum;
    }

    return number;
}
console.log(sumNumbersNine(29));

console.log(
    '------------------------------------------------------------------------------',
);
console.log(
    '16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.',
);

const IsPalindrome = (string) => {
    return (
        string.toLowerCase().replaceAll(' ', '') ===
        string.toLowerCase().replaceAll(' ', '').split('').reverse().join('')
    );
};

console.log(IsPalindrome('Level'));