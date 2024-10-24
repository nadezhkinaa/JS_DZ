//DZ-5
console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.',
);

function stringToarray(str) {
    return str.split(' ');
}

console.log(stringToarray('sdf sdf sdfs aa d'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.',
);

const deleteСharacters = (str, length) => {
    if (str.length >= length) {
        return str.substring(0, length);
    } else {
        return str;
    }
};

console.log(deleteСharacters('hello', 3));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    ' 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.При этом все символы строки необходимо перевести вверхний регистр.',
);

const insertDash = function(str) {
    str = str.toUpperCase();
    return str.replace(' ', '-');
};

console.log(insertDash('hello hello'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    ' 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.',
);

function lowerUpper(str) {
    newSymbol = str[0].toUpperCase();
    newStr = newSymbol + str.slice(1);
    return newStr;
}

console.log(lowerUpper('hello'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '  5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.',
);

const capitalize = function(str) {
    strArray = stringToarray(str);

    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = lowerUpper(strArray[i]);
    }
    return strArray;
};

console.log(capitalize('dff df'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '   6. Напишите функцию changeRegister(str), которая принимает вкачестве аргумента строку и и заменяет регистр каждогосимвола на противоположный. Например, если вводится«КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙоХоТнИк».',
);

const changeRegister = function(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
};

console.log(changeRegister('МмЯяяяУ'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '   7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.',
);

function removeChar(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        ) {
            result += char;
        }
    }
    return result;
}

console.log(removeChar('Fg34/f'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '   8. Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента',
);

const zeros = function(num, len) {
    let sign = num >= 0 ? '+' : '-';
    num = Math.abs(num);
    let str = num.toString();
    while (str.length < len) {
        str = str + '0';
    }
    return sign + str;
};

console.log(zeros(-123, 5));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '   9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов',
);

const comparison = (str1, str2) => {
    if (str1.toLowerCase === str2.toLowerCase) {
        return true;
    } else {
        return false;
    }
};

console.log(comparison('hello', 'HelLo'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '   10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.',
);

const insensitiveSearch = function(str1, str2) {
    let flag = false;
    for (let i = 0; i < str1.length; i++) {
        if (str1.indexOf(str2, i) !== -1) {
            flag = true;
        }
    }
    return flag;
};

console.log(insensitiveSearch('hello', 'hel'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '   11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.',
);

function initCap(str) {
    const words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        firstSymbol = words[i].charAt(0).toUpperCase();
        otherSymbols = words[i].slice(1).toLowerCase();
        words[i] = firstSymbol + otherSymbols;
    }

    return words.join('');
}

console.log(initCap('hello world'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '   12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы',
);

function initSnake(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            if (i !== 0) {
                result += '_';
            }
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
}

console.log(initSnake('HelloWorld'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    ' 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.',
);

const repeatStr = function(str, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
};

console.log(repeatStr('mur', 2));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    ' 14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "" ) из полного пути к файлу.',
);

const path = function(pathname) {
    const parts = pathname.split('\\');

    return parts[parts.length - 1];
};

console.log(path('mur\\mya'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    ' 15. Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки',
);

function endsWith(str, str1) {
    if (str1.length > str.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        if (str[str.length - str1.length + i] !== str1[i]) {
            return false;
        }
    }

    return true;
}

console.log(endsWith('murmew', 'mew'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '  16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.',
);

function getSubstr(str, char, pos) {
    if (pos === 'after') {
        const index = str.indexOf(char);
        if (index !== -1) {
            return str.substring(index + char.length);
        } else {
            return str;
        }
    } else if (pos === 'before') {
        const index = str.indexOf(char);

        if (index !== -1) {
            return str.substring(0, index);
        } else {
            return str;
        }
    } else {
        return str;
    }
}

console.log(getSubstr('murmewe', 'mew', 'before'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    ' 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.',
);

const insert = function(str, substr, pos) {
    if (pos < 0 || pos > str.length) {
        return str;
    }
    const part1 = str.slice(0, pos);
    const part2 = str.slice(pos);

    return part1 + substr + part2;
};

console.log(insert('murmewe', 'mya', '3'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    ' 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n.Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb',
);

function limitStr(str, n, symb) {
    if (str.length > n) {
        return str.substring(0, n) + symb;
    } else {
        return str;
    }
}
console.log(limitStr('murmewe', 2, '...'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '  19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.',
);

function count(str, stringsearch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringsearch) {
            count++;
        }
    }
    return count;
}
console.log(count('funny', 'n'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '  20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.',
);

const strip = (str) => {
    return str.replace(' ', '');
};

console.log(strip('mu mew'));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '   21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.',
);

function cutString(str, n) {
    const words = str.split(' ');
    if (words.length <= n) {
        return str;
    } else {
        return words.slice(0, n).join(' ');
    }
}

console.log(cutString('mu mew mya cat', 2));

console.log(
    '---------------------------------------------------------------------------',
);
console.log(
    '   22. Напишите функцию findWord(word, str), которая проверяет,существует ли в строке str слова word',
);

function findWord(word, str) {
    return str.includes(word);
}

console.log(findWord('cat', 'mu mew mya cat'));