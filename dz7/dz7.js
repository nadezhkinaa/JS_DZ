//DZ-7
console.log(
    '-----------------------------------------------------------------------------------------------',
);
console.log('1. Что выведет функция?');
/*function f() {
    console.log(this);
}
let user = {
    g: f.bind(null),
};
user.g();*/
console.log(
    'По идее, должно вывести null, но т.к. null не является объектом,такого не произойдет.',
);
console.log(
    'Если этот код запустить в консоле разработчика, то будет привязка к объекту window',
);

console.log(
    '-----------------------------------------------------------------------------------------------',
);
console.log('2. Можем ли мы изменить this дополнительным связыванием?');

function f() {
    console.log(this.name);
}
f = f.bind({ name: 'Вася' }).bind({ name: 'Петя' });
f();
console.log(
    'Мы можем добавить дополнительное связывание, но результат будет таким же, то есть все равно выведется Вася, так как нельзя изменить существующую привязку',
);

console.log(
    '-----------------------------------------------------------------------------------------------',
);
console.log(
    '3. В свойство функции записано значение. Изменится ли оно после применения bind?',
);

/*function sayHi() {
    console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: 'Вася',
});

for (let property in sayHi) {
    if (sayHi.hasOwnProperty(property)) {
        console.log(property + ': ' + sayHi[property]);
    }
}

console.log(bound.test);*/
console.log(
    'Как я поняла, метод test добавляет новое свойство, равное пяти. Далее мы пробуем изменить значение свойства с помощью bind',
);
console.log(
    'Далее я попробовала вывести свойства этой функции, и там test: 5, то есть свойство не изменилось, так как, как я поняла, метод bind создаёт новую привязанную функцию',
);

console.log(
    '-----------------------------------------------------------------------------------------------',
);
console.log(
    '4. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа. Однако, его вызов приводит к ошибке. Почему?',
);

/*function askPassword(ok, fail) {
    let password = prompt('Password?', '');
    if (password == 'rockstar') ok();
    else fail();
}
let user = {
    name: 'Вася',
    loginOk() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};
askPassword(user.loginOk, user.loginFail);*/

console.log(
    'Имя Вася не выводится, потому что нет привязки к контексу, и this ссылается к глобальному объекту window.',
);
console.log(
    'Правильно ли я понимаю, чтобы исправить это, можно вызвать функцию так: askPassword(user.loginOk.bind(user), user.loginFail.bind(user));',
);

console.log(
    '-----------------------------------------------------------------------------------------------',
);
console.log(
    '5. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна– user.login(true/false).Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?',
);

/*function askPassword(ok, fail) {
    let password = prompt('Password?', '');
    if (password == 'rockstar') ok();
    else fail();
}
let user = {
    name: 'John',
    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    },
};
askPassword(user.login.bind(user, true), user.login.bind(user, false));*/

console.log(
    '-----------------------------------------------------------------------------------------------',
);
console.log(
    '6. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value. из переменной elem.',
);

const elem = { value: 'Привет' };

function func(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}
//Тут напишите конструкцию с bind()

const newFunc = func.bind(elem);

newFunc('Иванов', 'Иван');

console.log(
    '-----------------------------------------------------------------------------------------------',
);
console.log(
    ' 7. Есть функция которая складывает три числа.Выполните каррирование. const sum = (a, b, c) => a + b + c',
);
const sum = (a, b, c) => a + b + c;

function sumCurry(a) {
    return function(b) {
        return function(c) {
            return sum(a, b, c);
        };
    };
}

console.log(sumCurry(5)(5)(10));

console.log(
    '-----------------------------------------------------------------------------------------------',
);

console.log(
    ' 8. Реализовать таймер-функцию используя замыкания. Функция принимает два аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера',
);

/*function count(start, end, arr) {
    while (end >= start) {
        
        console.log(end);
        end--;
    }
    return 'ВСЕ!';
}

function timer(start, end) {
   
    return count(start, end, arr);
}

console.log(timer(0, 10));*/

function count(start, end) {
    function innerCount() {
        if (end >= start) {
            console.log(end);
            end--;
            innerCount();
        }
    }

    innerCount();
    return 'ВСЕ';
}

function timer(start, end) {
    return count(start, end);
}

console.log(timer(0, 5));