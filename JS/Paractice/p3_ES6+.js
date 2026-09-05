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
/* const person = {
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
}; */
// --------------------------------------PROMISE-------------------------------

/* const my_promise = new Promise((resolve, reject) => {

    let success = false;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }

});

my_promise
//  agr promise true hua to yh kaam karo...result( a variable refering to resolve)
    .then(function(result) {
        console.log(result);
    })
    //  agr promise false hua to yh kaam karo...eroor( a variable refering to reject)

    .catch(function(error) {
        console.log(error);
    }); */


// --------------------------------- Async------------------------------------------ 
/* //    async function getData() {

// }
const getData = async () => {
    return "Data mil gaya";
};
getData().then(function(result) {
    console.log(result);
}); */

