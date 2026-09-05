// theme changing
const darkbtn = document.querySelector("#mode-btn");
darkbtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkbtn.textContent = "☀️ Light Mode";
  } else {
    darkbtn.textContent = "🌙 Dark Mode";
  }
});

// text automation k liye like (w..e..b)
const autotxt = document.querySelector("#typing");
const text = "MERN-STACK WEB DEVELOPER";

let index = 0;

function createtxt() {
  if (index < text.length) {
    autotxt.textContent += text[index];
    index++;

    setTimeout(createtxt, 50);
  } else {
    setTimeout(deleteText, 1000);
  }
}

function deleteText() {
  if (index > 0) {
    autotxt.textContent = text.substring(0, index - 1);

    index--;

    setTimeout(deleteText, 100);
  } else {
    setTimeout(createtxt, 800);
  }
}

createtxt();

// bar automaion

window.addEventListener("scroll", function () {
    const skillsSection = document.querySelector(".skills");
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        document.querySelectorAll(".progress").forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
            // data width hi main cheez history,isi ki wjah se bars animate honge 
        });
    }
});

// form
const toggleBtn = document.querySelector("#toggle-form-btn");
const contactForm = document.querySelector("#contact-form");
const formMsg = document.querySelector("#form-msg");

toggleBtn.addEventListener("click", () => {
  contactForm.classList.toggle("hidden");
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;

  if (!email.includes("@") || !email.includes(".")) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.style.color = "red";
    contactForm.reset();

    // 3 seconds baad success message auto-hide karne ke liye
    setTimeout(() => {
      formMsg.textContent = "";
    }, 3000);
  }
});

// pdf
document.querySelector("#print-btn").addEventListener("click", () => {
  window.print();
});
