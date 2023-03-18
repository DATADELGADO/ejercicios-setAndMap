// **************************   Ejercicios:Nivel 1  ***************



// ****************** #1 **********

// const a = new Set();


// ****************** #2 **********

// const b = new Set();
// for (let i = 0; i <= 10; i++) {
//     b.add(i);
// }
// console.log(b);


// ****************** #3 **********

// const a = new Set();
// a.add(5);
// a.add(6);
// a.delete(5)
// console.log(a);


// ****************** #4 **********

// let array = [5, 5, 4, 2, 5, 6]
// const a = new Set(array);
// console.log(a);
// a.clear();
// console.log(a);


// ****************** #5 **********


// let array = ["perro", "gato", "carro", "moto", "coche"];

// const a = new Set(array);
// const keys = Object.keys(a);
// console.log(a);


// ****************** #6 **********

// countries = [
//     ["Finland", "Finland".length],
//     ["Sweden", "Sweden".length],
//     ["Norway", "Norway".length],
// ];
// const a = new Map(countries);
// console.log(a);



// **************************   Ejercicios:Nivel 2  ***************


// ****************** #1 **********

// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];
// const c = new Set([...a, ...b]);
// console.log(c);




// ****************** #2 **********


// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];
// const B = new Set(b);
// const c = a.filter((num) => B.has(num));
// console.log(c);

// ****************** #3 **********

// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];
// const B = new Set(b);
// const c = a.filter((num) => !B.has(num));
// console.log(c);



// ******************   Ejercicios:Nivel 3  ***************


// ****************** #1 **********


import { fullCountries } from "../10.setAndMap/countries.js";

let array = [];
fullCountries.forEach((element) => array.push(...element.languages));
const arrayNotRepeat = new Set(array);
console.log(arrayNotRepeat.size);


// ****************** #2 **********


import { fullCountries } from "../10.setAndMap/countries.js";

const mostSpokenLanguages = (fullCountries, num) => {
    let array = [];
    fullCountries.map((element) => array.push(...element.languages));
    const arrayNotRepeat = new Set(array);
    let array2 = [];
    arrayNotRepeat.forEach((element) => {
        let cantidad = fullCountries.reduce((acc, ele) => {
            if (ele.languages.includes(element)) {
                acc++;
            }
            return acc;
        }, 0);
        array2.push({ [element]: cantidad });
    })
    return array2.sort((a, b) => Object.values(b) - Object.values(a)).splice(0, num);
}

console.log(mostSpokenLanguages(fullCountries, 10));


