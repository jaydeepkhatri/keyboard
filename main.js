import './style.css'

const keycode = document.querySelector("#keycode");
const doubleKeys = ["Control", "Shift", "Alt"];

function getElements(el) {
  return document.querySelector(el);
}

// key pressed
window.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e);
  keycode.innerHTML = e.keyCode;

  try {
    if (doubleKeys.find((key) => e.key === key)) {
      let elements = document.querySelectorAll(`[data-key='${e.key}']`);
      elements.forEach(element => {
        element.classList.add("active");
      });
    } else {
      if (e.code == "Backslash") {
        getElements('[data-key="\\\\"]').classList.add("active");
      } else {
        if (e.key.length === 1 && e.key.toLocaleLowerCase === e.key) {
          getElements(`[data-key='${e.key}']`).classList.add("active");
        } else {
          getElements(`[data-key='${e.key.toLowerCase()}']`).classList.add("active");
        }
      }
    }
  }
  catch (err) {
    console.log(`couldn't find key on virtual keyboard`)
  }
});

//key lift 
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
          getElements('[data-key="\\\\"]').classList.remove("active");
        } else {
          if (e.key.length === 1 && e.key.toLocaleLowerCase === e.key) {
            getElements(`[data-key='${e.key}']`).classList.remove("active");
          } else {
            getElements(`[data-key='${e.key.toLowerCase()}']`).classList.remove("active");
          }
          // getElements(`[data-key='${e.key}']`).classList.remove("active");
        }
      }
    }
    catch(err) {
      return true;
    }
  }, 50);
});


