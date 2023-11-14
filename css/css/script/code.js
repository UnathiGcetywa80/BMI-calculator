function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight === '' || height === '') {
        alert('Please enter both weight and height before calculating BMI.');
        return;
    }

    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    var result = 'Your BMI is: ' + bmi + '<br>';

    if (bmi < 18.5) {
        result += 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result += 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        result += 'Overweight';
    } else {
        result += 'Obese';
    }

    document.getElementById('result').innerHTML = result;
}
