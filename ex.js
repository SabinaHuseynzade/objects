// number

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function phoneNumber(arr){
    const first = arr.slice(0, 3).join(''),
    second = arr.slice(3, 6).join(''),
    third = arr.slice(6, 10).join('')
  
    return `(${first}) ${second} - ${third}`;
}

console.log(phoneNumber(arr));

//hellobye

function helloBye(name, number){
    const firstName = name.split('');
    const secondName = firstName[0].toUpperCase();
    firstName[0] = secondName
    const newName = firstName.join('')



    if(number == 1){
        return `Hello ${newName}`
    }else if(number == 0){
        return `Bye ${newName}`
    }
    
    
}
console.log(helloBye("alon", 1));

// Symmetric

function Symmetric(a) {
    const number = String(a);
    const reverse = number.split('').reverse().join('');
    return number=== reverse;
}
console.log(Symmetric(7227));

//chat

// const arrTwo = ["user1", "user2", "user3", "user4", "user5"]

function chat(users){

    const people = users.length;

    if(people == 0){
        return `Nobody online`
    }else if(people == 1){
        return `${users[0]} is online`
    }else if(people == 2){
        return `${users[0]} and ${users[1]} are online`
    }else if(people > 2){
        return `${users[0]}, ${users[1]} and ${people - 2} are online`
    }
}

console.log(chat(["user1", "user2", "user3", "user4", "user5"]));

// trues

// const boolean = [true, false, true, true]

function trues(boolean){
    let trueSize = 0;

    for(let i = 0; i < boolean.length; i++){

        if(boolean[i] === true){
             trueSize += 1
        }

    }
    return trueSize;
    
    
};
console.log(trues([true, false, true, true]))

