//1 Вывести в терминал строку “Hello World!
console.log('Hello world!');
console.log();

//2  Создать переменную для каждого типа данныx
let variableNumber = 2;
let variableString = 'hello';
let variableBoolean = true;
let variableNull = null;
let variableUnderfined;
let variableObject = {
    name: "John",
    age: 30,
};
let variableSymbol = Symbol();
let variableBigint = BigInt(9007199254740991);

//3 Вывести в консоль редактора кода созданные переменные
console.log('variableNumber =', variableNumber);
console.log('variableString =', variableString);
console.log('variableBoolean =', variableBoolean);
console.log('variableNull =', variableNull);
console.log('variableUnderfined =', variableUnderfined);
console.log('variableObject =', variableObject);
console.log('variableSymbol =', variableSymbol);
console.log('variableBigint =', variableBigint);
console.log();

//4 Вывести ее тип через оператор typeof и функцию typeof
console.log('variableNumber :', typeof variableNumber);
console.log('variableNumber :', typeof(variableNumber));

console.log('variableString :', typeof variableString);
console.log('variableString :', typeof(variableString));

console.log('variableBoolean :', typeof variableBoolean);
console.log('variableBoolean :', typeof(variableBoolean));

console.log('variableNull :', typeof variableNull);
console.log('variableNull :', typeof(variableNull));

console.log('variableUnderfined :', typeof variableUnderfined);
console.log('variableUnderfined :', typeof(variableUnderfined));

console.log('variableObject :', typeof variableObject);
console.log('variableObject :', typeof(variableObject));

console.log('variableSymbol :', typeof variableSymbol);
console.log('variableSymbol :', typeof(variableSymbol));

console.log('variableBigint :', typeof variableBigint);
console.log('variableBigint :', typeof(variableBigint));

console.log();

//5 Попробовать изменить переменную объявленную через const
const name = 'Alex';
//name = 'TOM';
//переменная не изменяется

//6 Попробовать изменить переменную с типом object объявленную через const
const user = {
    name: "Alex",
    age: 25
};

/*user = {
    name: "TOM",
    age: 26
};*/
//переменная не изменяется

//7 Попробовать изменить переменную с типом objectобъявленную через let
let address = {
    city: "Москва",
    street: "Ленина",
    house: 10
}

address = {
    city: "Москва",
    street: "Ленина",
    house: 15
}

//переменная изменяется


//8 Попробовать изменить переменную с типом object объявленную через var

var product = {
    name: "iPhone 14 Pro",
    price: 1000,
};

product = {
    name: "iPhone 14 Pro",
    price: 100,
};
//переменная изменяется