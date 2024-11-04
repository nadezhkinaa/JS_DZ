//DZ_6
console.log('--------------------------------------------------------------');
console.log(
    '1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.',
);

let arrayStr = ['one', 'two', 'three'];
let arrayLength = arrayStr.map((e) => e.length);
console.log(arrayLength);

console.log('--------------------------------------------------------------');
console.log(
    ' 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17,19]. Использую метод reduce() напишите функцию currentSums(numbers)',
    'которая возвращает новый массив из  такого же числа элементов, в котором на каждой позиции',
    'будет находиться сумма элементов массива numbers до этой',
    'позиции включительно',
);
const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(numbers) {
    return numbers.reduce((accumulator, currentValue, currentIndex) => {
        accumulator[currentIndex] = accumulator[currentIndex - 1] ?
            accumulator[currentIndex - 1] + currentValue :
            currentValue;
        return accumulator;
    }, []);
}
console.log(currentSums(numbers));

console.log('--------------------------------------------------------------');
console.log(
    ' 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д',
);

const arrNumbers = [0, 1, 2, 5, 6, 7];

function findTwoNumbers(list, sum) {
    let newArr = [];
    let addedNum = [];
    let arrItem = [];
    for (let i = 0; i < list.length; i++) {
        console.log(i);
        if (!addedNum.includes(list[i])) {
            if (list.includes(sum - list[i])) {
                arrItem.push(list[i], sum - list[i]);
                newArr.push(arrItem);

                addedNum.push(list[i], sum - list[i]);

                arrItem = [];
            }
        }
    }
    return newArr;
}

console.log(findTwoNumbers(arrNumbers, 7));
console.log('--------------------------------------------------------------');
console.log(
    '  4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str',
);

fourStr = 'hello dear friend';

function selectFirstLet(str) {
    return str.split(' ').map((word) => word[0]);
}

console.log(selectFirstLet(fourStr));

console.log('--------------------------------------------------------------');
console.log(
    '  5. Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.',
);

fiveStr = 'friend';

function createTriplets(str) {
    const triplets = [];

    for (let i = 1; i < str.length - 1; i++) {
        const triplet = str[i - 1] + str[i] + str[i + 1];

        triplets.push(triplet);
    }

    return triplets;
}

console.log(createTriplets(fiveStr));

console.log('--------------------------------------------------------------');
console.log(
    '  6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.',
);

sixArr = [1, 7, 5, 8, 10, 2, 4];

function sortArr(array) {
    array.sort((a, b) => b - a);
    return array;
}
console.log(sortArr(sixArr));

console.log('--------------------------------------------------------------');
console.log(
    '   7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел',
);

const firstArr = [1, 2, 3];
const secondArr = [6, 8, 9];
const thirdArr = [5, 4, 7];

function joinSortArrays(array1, array2, array3) {
    let totalArr = array1.concat(array2).concat(array3);
    return totalArr.sort((a, b) => b - a);
}

console.log(joinSortArrays(firstArr, secondArr, thirdArr));

console.log('--------------------------------------------------------------');
console.log(
    '    8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.',
);

eightArr = [
    [1, 2, 3],
    [4, 5],
    [6]
];

function findSumm(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }
    return sum;
}
console.log(findSumm(eightArr));

console.log('--------------------------------------------------------------');
console.log(
    '   9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.',
);

nineArr = [1, 7, 5, 8, 10, 2, 4, 15, 21, 2, 3];

function sortArr(array) {
    array.sort((a, b) => b - a);
    return array;
}
console.log(sortArr(nineArr));

console.log('--------------------------------------------------------------');
console.log(
    '   10. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.',
);

tenArr = [5, 1, 2, 3, 6];

function howManyItems(array) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (sum <= 10) {
            sum += array[i];
            count++;
        } else {
            return count;
        }
    }
}
console.log(howManyItems(tenArr));

console.log('--------------------------------------------------------------');
console.log(
    '   11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив',
    'а вторым сколько элементов должно быть в массиве. Пример arrayFill(x, 5) сделает массив [x, x, x, x, x].',
);

function arrayFill(item, number) {
    let newArr = [];
    for (let i = 0; i < number; i++) {
        newArr.push(item);
    }
    return newArr;
}

console.log(arrayFill('mew', 6));