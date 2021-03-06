var openCal = document.querySelector(".open-cal")
var closeCal = document.querySelector(".close-cal")

var app_name_calculator = document.querySelector("#calculator")
var calculator = document.querySelector(".calculator")
var point_cal = document.querySelector("#point-cal")

openCal.addEventListener("click", () =>
  open_window(calculator, point_cal, app_name_calculator)
)
closeCal.addEventListener("click", () =>
  close_window(calculator, point_cal, app_name_calculator)
)

const buttons = document.querySelectorAll(".calculator-input button")
const display = document.querySelector(".calculator-top--output")

buttons.forEach(button => {
  button.addEventListener("click", event => calculate(event.target.value))
})

operators = ["+", "-", "*", "/"]

function lastNumber(value) {
    var tempChar = operators[0]
    for (var i = 1; i < operators.length; i++) {
      value = value.split(operators[i]).join(tempChar)
    }
    value = value.split(tempChar)
    return value[value.length - 1]
}

function calculate(value) {
    const latestChar = display.value[display.value.length - 1]
  
    const isEmpty = display.value === "0"
    const isDecimalLastOperand = lastNumber(display.value).includes(".")
    const isNumber =  
      value === "0" ||
      value === "1" ||
      value === "2" ||
      value === "3" ||
      value === "4" ||
      value === "5" ||
      value === "6" ||
      value === "7" ||
      value === "8" ||
      value === "9" 
  
    if (isEmpty && isNumber) {
      return (display.value = value)
    }
  
    switch (value) {
      case "=":
        if (!isEmpty) display.value = eval(display.value)
        return
      case ".":
        if (!isDecimalLastOperand) display.value += "."
        return
      case "AC":
        return (display.value = "0")
      case "+/-":
        if (
          !operators.some(operator =>
            display.value.includes(operator)
          )
        )
          display.value = -1 * parseFloat(display.value)
        return
      case "*":
      case "/":
      case "-":
      case "+":
      case "%":
        if (
          latestChar === "/" ||
          latestChar === "*" ||
          latestChar === "-" ||
          latestChar === "+" ||
          latestChar === "%"
        )
          return (display.value = display.value.slice(0, -1) + value)
      default:
        display.value += value
    }
}