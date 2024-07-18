// ini javascript
// pengambilan element
const bmiText = document.getElementById("bmi"); 
const descText = document.getElementById("desc");
const form = document.querySelector("form");

// subit & reset
form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

// reset
function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = '';
  descText.textContent = 'N/A';
}

// submit
function onFormSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

//   alert
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    return;
  }

  const heightInMeters = height / 100; // cm -> m
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `you are <strong>${desc}</strong`;
}

// resource regex $
function interpretBMI(bmi) {
    if(bmi < 18.5) {
        return "underweight";
    } else if(bmi < 25) {
        return "healthy";
    } else if(bmi < 30) {
        return "overweight";
    } else {
        return "obese";
    }
}