//1) 
//создайте пустой обьект 3мя способами

const first = {};
const second = new Object();
const third = Object.create();


//2)
//создайте обьект с вашими персональными данными 

const profile = {
    name: 'Sabina',
    age: 13
}

//3)
//чем является name в обьекте ниже?

const example = {
    name: 'Alex',
    age: 24
}

//name является ключом объекта

//4)
//чем является 'Alex' в обьекте ниже?

const exampleTwo = {
    name: 'Alex',
    age: 24
}

//age является значением объекта

//5)
//создайте пустой обьект и добавте в него данные о человеке из ткста ниже в виде ключ/значения
/*
Здравствуйте меня зовут Самуил. Я родился 4 мая 1998го года. Мне 24 года.
Я вышел победителем в конкурсе Мистер Будующее.
У меня 2 награды по высшей математике.
Я люблю много читать и много программировать.
*/

const portfolio = {
    name: 'Samuel',
    age: 24,
    year: 1998,
    day: 4,
    mounth: 'may',
    awards: {
        One:'Mr. Future', 
        Two: 'Hight Math', 
        Three:'Hight Math2'
    },
    hobbies: {
        one: 'Reading', 
        two: 'progtamming'
    } 
}

//6)
//выведите в консоли значение name из обьекта
const objOne = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(objOne.name);


//7)
//выведите в консоли значение age из обьекта
const objTwo = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(objTwo.age);

//8)
//выведите в консоли значение isMarried из обьекта
const objThree = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(objThree.isMarried);

//9)
//выведите в консоли имя первого ребенка из обьекта
const objFour = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    children: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(objFour.children[0]);


//10)
//выведите в консоли имена всех детей с помощью for из обьекта
const objFive = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    children: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for(let i = 0; i < objFive.children.length; i++){
    console.log(objFive.children[i])
};


//11)
//выведите в консоли значение itMaster из обьекта
const objSix = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(objSix.awards.itMaster);


//12)
//выведите в консоли все свойства с помощью for...in из обьекта
const objSeven = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

for(let i in objSeven){
    console.log(i, ':', objSeven[i]);
}

//13)
//выведите в консоли значение всех свойств с помощью for...in из обьекта
const objEight = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

for(let i in objEight){
    console.log(objEight[i])
}

//14)
//поменяйте имя дочери на 'Linda' в обьекте ниже
const objNine = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

objNine.childs[1] = 'Linda';

//15)
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
const objTen = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

objTen.job = 'menedjer';

//16)
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
const objEleven = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(objEleven.awards["itMaster"]);


//17)
//выведите в консоли значение name из обьекта c помощью квадратных скобок
const objTwelve = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(objTwelve["name"]);

//18)
//удалите job из обьекта и поменяйте значение hasJob на 'false'
const objThirteen = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

delete objThirteen.job;
objThirteen.hasJob = false;

//19)
//удалите name из обьекта
const objFourteen = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

delete objFourteen.name;

//20)
//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
const objectFiveteen = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

delete objectFiveteen["job"];
objectFiveteen["hasJob"] = false;
