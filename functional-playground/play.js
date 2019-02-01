import {arrayUtils} from "../lib/es6-functional";


const map = arrayUtils.map;
const filter = arrayUtils.filter;
const concatAll = arrayUtils.concatAll;
const reduce = arrayUtils.reduce;
const curry = arrayUtils.curry;
const partial = arrayUtils.partial

let apressBooks = [
    {
        name: "beginners",
        bookDetails: [
            {
                "id": 111,
                "title": "C# 6.0",
                "author": "ANDREW TROELSEN",
                "rating": [4.7],
                "reviews": [{good: 4, excellent: 12}]
            },
            {
                "id": 222,
                "title": "Efficient Learning Machines",
                "author": "Rahul Khanna",
                "rating": [4.5],
                "reviews": []
            }
        ]
    },
    {
        name: "pro",
        bookDetails: [
            {
                "id": 333,
                "title": "Pro AngularJS",
                "author": "Adam Freeman",
                "rating": [4.0],
                "reviews": []
            },
            {
                "id": 444,
                "title": "Pro ASP.NET",
                "author": "Adam Freeman",
                "rating": [4.2],
                "reviews": [{good: 14, excellent: 12}]
            }
        ]
    }
];

let useless = [2, 5, 6, 1, 10];

// console.log(reduce(useless, (acc, val) => acc * val, 1));


const add = (x, y) => {
    return x + y
}

// console.log(add(1, 2));

const addCurry = (x) => {
    return (y) => {
        return x + y;
    }
}

// console.log(addCurry(3)(4));

const loggerHelper = (mode, initialMessage, errorMessage, lineNo) => {
    if (mode === "DEBUG")
        console.debug(initialMessage, errorMessage + "at line: " + lineNo)
    else if (mode === "ERROR")
        console.error(initialMessage, errorMessage + "at line: " + lineNo)
    else if (mode === "WARN")
        console.warn(initialMessage, errorMessage + "at line: " + lineNo)
    else
        throw "Wrong mode"
}

// let squared = map([1,2,3], (n) => n * n)
//
// console.log(squared);

let curryMap = curry(map);


let squared = curryMap([1,2,3]);

console.log(squared((n)=> n*n));