//your code here
 // Get DOM elements
 const inputElement = document.getElementById('input');
 const numberButtons = document.querySelectorAll('[id^="block"]');
 const operatorButtons = document.querySelectorAll('[id="plus"], [id="minus"], [id="multiply"], [id="divide"],[id="openningBracket"],[id="closingBracket"]');
 const dotButton = document.getElementById('dot');
 const ansButton = document.getElementById('ans');
 const clearButton = document.getElementById('clr');
 const backSpaceBtn = document.getElementById("clear");

 // Add event listeners to number buttons
 numberButtons.forEach(button => {
   button.addEventListener('click', () => {
     inputElement.value += button.textContent;
   });
 });

 // Add event listeners to operator buttons
 operatorButtons.forEach(button => {
   button.addEventListener('click', () => {
     inputElement.value += button.textContent;
   });
 });

 // Add event listener to dot button
 dotButton.addEventListener('click', () => {
   inputElement.value += dotButton.textContent;
 });

 // Add event listener to ans button
 ansButton.addEventListener('click', () => {
   try {
     const result = eval(inputElement.value);
     inputElement.value = result;
   } catch (error) {
     inputElement.value = 'Error';
   }
 });

 // Add event listener to clear button
 clearButton.addEventListener('click', () => {
   inputElement.value = '';
 });
 backSpaceBtn.addEventListener('click', () => {
    inputElement.value = inputElement.value.slice(0, -1);
 });