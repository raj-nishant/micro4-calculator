let display = document.querySelector(".display");

function appendToDisplay(value) {
  if (value === ".") {
    if (display.textContent.includes(".")) {
      return;
    }
  }
  if (["+", "-", "*", "/"].includes(value)) {
    if (["+", "-", "*", "/"].includes(display.textContent.slice(-1))) {
      display.textContent = display.textContent.slice(0, -1);
    }
  }

  display.textContent += value;
}

function deleteLastCharacter() {
  display.textContent = display.textContent.slice(0, -1);
}

function resetCalculator() {
  display.textContent = "";
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = "Error";
  }
}
