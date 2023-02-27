import './style.css'

const keycode = document.querySelector("#keycode");
const doubleKeys = ["Control", "Shift", "Alt"];

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  keycode.innerHTML = e.keyCode;

  try {
    if (doubleKeys.find((key) => e.key === key)) {
      let elements = document.querySelectorAll(`[data-key='${e.key}']`);
      elements.forEach(element => {
        element.classList.add("active");
      });
    } else {
      if (e.code == "Backslash") {
        document.querySelector('[data-key="\\\\"]').classList.add("active");
      } else {
        document.querySelector(`[data-key='${e.key}']`).classList.add("active");
      }
    }
  }
  catch (err) {
    console.log(`couldn't find key on virtual keyboard`)
  }
});


window.addEventListener("keyup", (e) => {
  setTimeout(() => {
    try {
      if (doubleKeys.find((key) => e.key === key)) {
        let elements = document.querySelectorAll(`[data-key='${e.key}']`);
        elements.forEach(element => {
          element.classList.remove("active");
        });
      } else {
        if (e.code == "Backslash") {
          document.querySelector('[data-key="\\\\"]').classList.remove("active");
        } else {
          document.querySelector(`[data-key='${e.key}']`).classList.remove("active");
        }
      }
    }
    catch(err) {
      return true;
    }
  }, 50);
});


