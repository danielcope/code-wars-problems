// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//=========================================

const bmi = (weight, height) => {
  let bmi = weight / Math.pow(height, 2);

  if (bmi > 30) return "Obese";
  if (bmi <= 30.0 && bmi > 25.0) return "Overweight";
  if (bmi <= 25.0 && bmi > 18.5) return "Normal";
  if (bmi <= 18.5) return "Underweight";
};

console.log(bmi(80, 1.8));
