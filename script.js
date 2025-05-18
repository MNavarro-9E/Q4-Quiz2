function gradingSystem() {
  const science = parseInt(document.getElementById('science').value);
  const math = parseInt(document.getElementById('math').value);
  const english = parseInt(document.getElementById('english').value);

  if (
    isNaN(science) || isNaN(math) || isNaN(english) ||
    science < 66 || science > 100 ||
    math < 66 || math > 100 ||
    english < 66 || english > 100
  ) {
    alert("Invalid input.");
    return;
  }

  const average = Math.round((science + math + english) / 3);
  let message;

  if (average >= 94 && average <= 100) {
    message = 'Excellent!';
  } else if (average >= 87 && average <= 93) {
    message = 'Above Standard!';
  } else if (average >= 80 && average <= 86) {
    message = 'Standard!';
  } else if (average >= 75 && average <= 79) {
    message = 'Needs Improvement';
  } else {
    message = 'You have failed.';
  }

  alert(`Your average grade is ${average}. ${message}`);
}
