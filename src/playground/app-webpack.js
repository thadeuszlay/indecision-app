// import './util.js';

// import {square, add} from './util.js';
// import isSenior, {isAdult, canDrink} from './person.js';

// console.log('====================================');
// console.log('App js is running now!!!!');
// console.log('====================================');

// console.log(square(4));
// console.log(add(1,2));

// console.log('========');
// console.log(isAdult(18));
// console.log(canDrink(1));
// console.log(isSenior(65));

import validator from 'validator';

console.log(validator.isEmail('asdf@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = <h1>webpack</h1>;
ReactDOM.render(template, document.getElementById('app'));