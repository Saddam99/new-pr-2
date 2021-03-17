import React from "react";

function Add() {
     return (
        <div>
            <Www />
            <Rrr />
            <Ttt />
        </div>
     );

}
function Www() {
    const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    const positive = array.filter(function (item) {
        return item >= 0;
    });
    console.log(positive);
    return (
        <div>1</div>
    )
}

function Rrr() {
    const messages = [
        {message: 'hello', error: true},
        {message: 'javascript', error: false},
        {message: 'intocode', error: true},
        {message: 'react', error: true},
        {message: 'angular', error: false},
        {message: 'es6', error: false},
    ];
    const newMessages = messages.filter( function (item) {
        return item.error === false;
    })
    console.log(newMessages);
    return  (
        <div>2</div>
    )

}
function Ttt() {
    const words= ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
    const newWords = words.map(function (item) {
        if (item.length <= 5) {
            return "*";
        }
        return item;

    })
    console.log(newWords)
    return (
        <div>3</div>
    )
}



// ЗАДАЧА 4

// const sendMessage = message => {
//     return "представь что большой код"
// }
//
// const half = number => number / 2;
//
//  const showConsole = () => {
//     console.log('intocode')
//  }
//
//  const concatWords = (first, second) => first + second;


//ЗАДАЧА 5

// function justText () {
//     return 'intocode';
// }
//
// function logging (text) {
//     console.log(text);
// }
//
// function add(x, y) {
//     const z = 3
//
//     return z * x * y;
// }
//
// function onlyPositive (number) {
//     if(number < 0) {
//         return false;
//     }
//     return true;
// }


export default Add;
