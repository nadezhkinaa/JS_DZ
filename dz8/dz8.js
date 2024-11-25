console.log(
    '--------------------------------------------------------------------------------------------',
);
console.log(
    '1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate(ставка за день работы), days (количество отработанных дней).',
    'Также класс должен иметь метод getSalary(), который будетвыводить зарплату работника. Зарплата- это произведение (умножение) ставки rate на количество отработанных дней days.',
    'И метод getFullName()- имя и фамиля работника',
);

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
    getFullName() {
        return 'Имя: ' + this.name + '\n' + 'Фамилия: ' + this.surname;
    }
}

const newWorker = new Worker('Ivan', 'Ivanov', 3000, 30);
console.log('Зарплата: ', newWorker.getSalary());
console.log(newWorker.getFullName());

console.log(
    '--------------------------------------------------------------------------------------------',
);
console.log(
    ' 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers- количество работников.',
    ' И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников',
);

class Boss extends Worker {
    constructor(name, surname, rate, days, workers) {
        super(name, surname, rate, days);
        this.workers = workers;
    }
    getSalary() {
        return this.rate * this.days * this.workers;
    }
}

const newBoss = new Boss('Petr', 'Petrov', 5000, 20, 12);
console.log('Зарплата: ', newBoss.getSalary());
console.log(newBoss.getFullName());

console.log(
    '--------------------------------------------------------------------------------------------',
);
console.log(
    ' 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте и методы-сеттеры и методы-геттеры для их чтения.',
);

class ModifyWorker extends Worker {
    constructor(name, surname, rate, days) {
        super(name, surname, rate, days);
        this._name = name;
        this._surname = name;
        this._rate = rate;
        this._days = days;
    }

    get name() {
        return 'Имя пользователя: ' + this._name;
    }
    set name(value) {
        this._name = value;
    }

    get rate() {
        return 'Ставка за день работы: ' + this._rate;
    }
    set rate(value) {
        this._rate = value;
    }
}

const modifyWorker = new ModifyWorker('Sergey', 'Sergeev', 15, 20);
console.log(modifyWorker.name);
modifyWorker.name = 'Vova';
console.log(modifyWorker.name);

console.log(modifyWorker.rate);

console.log(
    '--------------------------------------------------------------------------------------------',
);
console.log(
    ' 4  Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst()',
    'который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords',
    'который принимает строку и делает заглавной первую букву каждого слова этой строки.',
);

class MyString {
    constructor(line) {
        this.line = line;
    }
    reverse(line) {
        return line.split('').reverse().join('');
    }
    ucFirst(line) {
        return line.charAt(0).toUpperCase() + line.slice(1);
    }
    ucWords(line) {
        return line.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
    }
}

const newString = new MyString();
console.log(newString.reverse('hello world'));
console.log(newString.ucFirst('hello world'));
console.log(newString.ucWords('hello world'));

console.log(
    '--------------------------------------------------------------------------------------------',
);
console.log(
    ' 5. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет',
    'является ли она корректным емейлом или нет. Если является- возвращает true, если не является- то false. Кроме того, класс будет иметь следующие методы:',
    'метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона',
);

class Validator {
    isEmail(line) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(line);
    }
    isDomain(line) {
        const domainRegex =
            /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
        return domainRegex.test(line);
    }
    isDate(line) {
        return !isNaN(Date.parse(line));
    }

    isPhone(line) {
        const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return phoneRegex.test(line);
    }
}

const validator = new Validator();

console.log(validator.isEmail('hello@mail.com')); // true
console.log(validator.isEmail('hello@example')); // false
console.log(validator.isEmail('hello@.com')); // false
console.log(validator.isEmail('hello example.com')); // false

console.log(validator.isDomain('example.com')); // true
console.log(validator.isDomain('example')); // false
console.log(validator.isDomain('example..com')); // false
console.log(validator.isDomain('example-.com')); //false

console.log(validator.isDate('2024-03-15')); // true
console.log(validator.isDate('15.03.2024')); // true
console.log(validator.isDate('March 15, 2024')); //true
console.log(validator.isDate('invalid date')); // false

console.log(validator.isPhone('9995552200')); // true
console.log(validator.isPhone('123-456-7890')); // true
console.log(validator.isPhone('abc')); // false
console.log(validator.isPhone('123')); // false

console.log(
    '--------------------------------------------------------------------------------------------',
);
console.log(
    ' 6 Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока.',
    'Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (годпоступления в вуз).',
    ' Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен',
    'иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год',
    ' получите самостоятельно с помощью new Date.',
);

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return 'Имя: ' + this.name + '\n' + 'Фамилия: ' + this.surname;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    getCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year + 1;
        return course > 5 ?
            'Максимальный курс 5' :
            course <= 0 ?
            'Минимальный курс 1' :
            course;
    }
}

const student1 = new Student('Ivan', 'Ivanov', 2022);
console.log(student1.getFullName());
console.log(student1.getCourse());

const student2 = new Student('Petr', 'Petrov', 2024);
console.log(student2.getFullName());
console.log(student2.getCourse());

const student3 = new Student('Sergey', 'Sergeev', 2019); //больше чем 5 курс
console.log(student3.getFullName());
console.log(student3.getCourse());

const student4 = new Student('Vasikiy', 'Vasilyev', 2025); //еще не поступил
console.log(student4.getFullName());
console.log(student4.getCourse());