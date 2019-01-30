import {arrayUtils} from "../lib/es6-functional";


const map = arrayUtils.map;
const filter = arrayUtils.filter;
const concatAll = arrayUtils.concatAll;
const reduce = arrayUtils.reduce

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

let useless = [2,5,6,1,10];

console.log(reduce(useless, (acc, val) => acc * val, 1));