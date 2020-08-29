// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { compose, pipe } from 'lodash/fp'
import { Map } from 'immutable';
import { produce } from 'immer';

let input = " JavaScript ";
let output = "<div>" + input.trim()+"</div>"

const trim = str => str.trim();
// const wrapInDiv = str => "<div>" + str + "</div>"
//const wrap = str => `<div>${str}</div>`;

// const wrap = (type, str) => `<${type}>$<str>$</type>`;

const wrap = type => str => `<${type}>${str}</${type}>`;

const toLowerCase = str => str.toLowerCase();

// const transform = compose(wrapInDiv, toLowerCase, trim)
// transform(input)

const transform = pipe(trim, toLowerCase, wrap("div"))
console.log(transform(input))


// Object Copy ----------------------------->>>>>>>>>>

const person = { 
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};
const updated = {...person, name: "Bob" };
updated.address.city = "New York"; // shallow copy
console.log("shallow copy",person)


const person1 = { 
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};
const updated1 = {
    ...person,
    addredd: {
        ... person.address,
        city: "New York"
    },
    name: "Bob"
}
console.log("deep copy",person1) // deep copy

//const result = wrapInDiv(toLowerCase(trim(input)));

// Array Copy ----------------------------------------------->>>>>>>>>>


const numbers = [1,2,3];

const index = numbers.indexOf(2);
const added = [
    ...numbers.slice(0,index),
    4,
    ...numbers.slice(index)]
console.log("Added Val:",added)

const removed = numbers.filter(n => n!==2);
console.log("Removed Val: ",removed)

const updatedVal = numbers.map(n=> (n===2 ? 20 :n))
console.log("Updated Val: ",updatedVal)


// Map Example ------------------------------>>>>>>>>>>>>>>>>>

let book = Map({title: "Harry Potter"});

function published(book){
    return book.set("isPublished", true)
}

book = published(book);

console.log("Immutable Example",book.toJS());


// Immer Example ----------------------------->>>>>>>>>>>>>>>>>>>

let book1 = { title: "Harry Potter" }
function publish(){
    return produce(book1, draftBook => {
        draftBook.isPublished = true;
    });
}

let update = publish(book1);
console.log("Immer: ",book1);
console.log("Updated Immer: ",update);