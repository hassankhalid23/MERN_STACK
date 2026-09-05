// ----------------changing text---------------
/* let head=document.querySelector("#Heading");
let btn=document.querySelector("#btn_1");

btn.addEventListener("click",function(){
   head.innerHTML= ("DOM MANIPULATION topic hy aaj")
}); */

// -------Changing color---------------

/*  let head=document.querySelector("#heading");

let btn_1=document.querySelector("#redBtn");
let btn_2=document.querySelector("#blueBtn");
let btn_3=document.querySelector("#greenBtn");

btn_1.addEventListener("click",function(){
   heading.style.color="red"
});

btn_2.addEventListener("click",function(){
   heading.style.color="blue"
});

btn_3.addEventListener("click",function(){
   heading.style.color="green"
});
  */

// -------------------Show/Hide------------------------

/* let change=document.querySelector("#message");

let btn_1=document.querySelector("#hideBtn");
let btn_2=document.querySelector("#showBtn");

btn_1.addEventListener("click",function(){
   message.style.display="none"
});

btn_2.addEventListener("click",function(){
   message.style.display="block"
}); */

// ----------------------Toggle for Show/Hide----------------------

/* let change=document.querySelector("#message");

let btn_1=document.querySelector("#toggleBtn");

btn_1.addEventListener("click",function(){
   change.classList.toggle("highlight");  

}); */

// ---------------------form data-----------------------------

/* let form = document.querySelector("#form");

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log(nameInput.value);
    console.log(emailInput.value);

}); */

// ----------------------------form validation---------------------------
/* let form = document.querySelector("#form");

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = nameInput.value;
  let email = emailInput.value;

  if (name === "") {
    alert("Name is required");
    return;
  }

  if (email === "") {
    alert("Email is required");
    return;
  }

  alert("Form submitted successfully");
}); */

// ---------------------creating dynamically element------------------------------

/* let container = document.querySelector("#container");

let heading = document.createElement("h2");

heading.textContent = "Hello Hassan";

container.appendChild(heading); */
// ab html mein h2 add ho gya

// -------------------- TO DO LIST APP----------------------------------------------
/* let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

button.addEventListener("click", function () {

    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.textContent = task;
   //  jo user ne input mein likha woh li mein agya

    list.appendChild(li);
   //  ab li se ul(tasklist) mein chla jae ga

    input.value = "";
   //  input box ko dubara empty kre ga

}); */

// ----------------------Now Deleting in TO do list----------------------
let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

button.addEventListener("click", function () {
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  li.textContent = task;

  let deletebtn = document.createElement("button");
  deletebtn.textContent = "delete";
  li.appendChild(deletebtn);
  list.appendChild(li);
  //  by html structure ...ul k andr li ata hy

  input.value = "";

  deletebtn.addEventListener("click", function () {
    li.remove();
  });
});
