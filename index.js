const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    const numberInput = Number(document.getElementById("number-input").value)
    if (isNaN(numberInput)) {
        alert("Please enter only numbers")
        return
    }

 const lengthResult = numberInput * 3.28084
const volumeResult = numberInput * 0.264172
const massResult = numberInput * 2.20462

const one = document.getElementById("one").querySelector('p')
const two = document.getElementById("two").querySelector('p')
const three = document.getElementById("three").querySelector('p')

one.innerText = numberInput + " meters =" + lengthResult.toFixed(3) + " feet | " + numberInput + " feet " + (numberInput/ 3.28084).toFixed(3) + " meters"
two.innerText = numberInput + " liters =" + volumeResult.toFixed(3) + " gallons | " + numberInput + " gallons " + (numberInput / 0.264172).toFixed(3) + " liters"
three.innerText = numberInput + " kilograms =" + massResult.toFixed(3) + " pounds | " + numberInput + " pounds " + (numberInput / 2.20462).toFixed(3) + " kilograms"
})

