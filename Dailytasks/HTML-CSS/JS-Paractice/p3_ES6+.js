// ------------------------------Arrow function---------------------------
/* const multiply = (a,b) =>a*b;
console.log(multiply(4,2));

const divide = (a,b) =>a/b;
console.log(divide(4,2));

const add = (a,b) =>a+b;
console.log(add(4,2));
 */
// ---------------------------------Template Literals---------------------------

/* let name = "Hassan";
let skill = "MERN Stack";
let experience = 1;

console.log(`my name is ${name}`); */

// ------------------------------------Spread Operator------------------------------
/* const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Mango", "Orange"];
// to combine both arrays
const allFruits = [...fruits1, ...fruits2]; */

// ------------------------------------object spread-----------------------
const person = {
    name: "Hassan",
    age: 22
};

const newPerson = {
    ...person
};
//  we can add too
const newPerson = {
    ...person,
    city: "Lahore"
};
