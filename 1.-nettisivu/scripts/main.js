var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

multiply(4,7);
multiply(20,20);
multiply(0.5,3);

alert(multiply(0.5,3));