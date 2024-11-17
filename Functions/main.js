// 1.Handle onerror event (Or any other event) on the page using Declarative function.
function handleError(){
    alert('Error Ocurred');
}
// a.Change the function from Declarative to literal function (Function expression), without assigning the function to a variable.

// in template 

// c.Which type of functions is the best suited for handling the event? And why?

//Anonymous

// 2.Make an Interval that runs each second, and executes logTest function that writes 
//the current time each time it called in the console, and handle the function to
// be literal function to be passed to the first parameter to setInterval (Don’t define a function and then pass its name,
// define the function literally in the first parameter of setInterval()).

setInterval(function(){
    var date = new Date();
    console.log(date.toLocaleTimeString());
},1000);


// a.Why literal function is better than defining a declarative function, and then passes its name in that case?
    // Better Readability and clarity since it is used only in one place . Also to avoid global scope issue .

// 3.Make a script in a body, and ask the user to enter 2 numbers, and then make a Dynamic function
 //to take 2 numbers as parameters and alert the sum of 2 numbers and execute the function.
 Calculate = function() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const sum = num1 + num2;
    alert(`Sum: ${sum}`);
};

Calculate();

// a.Re-declare the function (assign it to the same variable, without deleting the prev. function) 
//to alert the subtract of the 2 numbers, and execute it.

Calculate = function() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const difference = num1 - num2;
    alert(`Difference: ${difference}`);
};

Calculate();

// b.Re-declare it to alert the multiply of the 2 numbers and execute it.
Calculate = function() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const mul = num1 * num2;
    alert(`Difference: ${mul}`); 
}

// c.Re-declare it to alert the division of the 2 numbers and execute it.
Calculate = function() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const product = num1 / num2;
    alert(`Product: ${product}`);
};

Calculate();

// d.Why the Dynamic function is the best type for such this case?

//Dynamic Functions: The Calculate function is dynamically redefined for each task, allowing us to change its behavior without altering other parts of the code where Calculate is called.
//Execution: Each re-declaration replaces the previous version of Calculate, so only the most recent definition is used when Calculate() is executed.


// 4.Make an IIFE function expression (Self-invoking function) that executes automatically when the page loads,
// and initialize some global variable in the page with zero value (Without making an name to the function, or assigning it to a variable,
// or calling it in onload() event).

(function() {
    // Initialize a global variable
    window.global = 0;
    console.log(`${window.global}`);
})();



// 5.Use JS constructor function to create the following custom types:
// a.Create custom type “Person” that has Name and age properties.

// b.Use prototype property to add PrintPerson() method to the class.
// c.Create student object that inherits from Person, and its constructor have two member variables (Faculty and Total_mark), and put default value for Total_mark to be 0 (Using Function Constructor).
// d.Use prototype property to add PrintStudent() method to the class.
// e.In previous class Create private variable named (min_degree) which value is 60, and create local (inner) function named (checkSuccess) that return “Succeed” if student degree is more than min_degree, else it returns “Fail”. 
// f.Make another member function (public) named (checkResult) that alert the result of that student.
// g.Make an Object of student and set it members, and test it with different values. (Try to access min_degree variable, and checkSuccess function outside class, what did you remark?).
// h.What’s the difference between adding property using prototype, and adding it to specific class object?
// 1.Handle onerror event (Or any other event) on the page using Declarative function.
// a.Change the function from Declarative to literal function (Function expression), without assigning the function to a variable.
// b.What’s the difference?
// c.Which type of functions is the best suited for handling the event? And why?
// 2.Make an Interval that runs each second, and executes logTest function that writes the current time each time it called in the console, and handle the function to be literal function to be passed to the first parameter to setInterval (Don’t define a function and then pass its name, define the function literally in the first parameter of setInterval()).
// a.Why literal function is better than defining a declarative function, and then passes its name in that case?
// 3.Make a script in a body, and ask the user to enter 2 numbers, and then make a Dynamic function to take 2 numbers as parameters and alert the sum of 2 numbers and execute the function.
// a.Re-declare the function (assign it to the same variable, without deleting the prev. function) to alert the subtract of the 2 numbers, and execute it.
// b.Re-declare it to alert the multiply of the 2 numbers and execute it.
// c.Re-declare it to alert the division of the 2 numbers and execute it.
// d.Why the Dynamic function is the best type for such this case?
// 4.Make an IIFE function expression (Self-invoking function) that executes automatically when the page loads, and initialize some global variable in the page with zero value (Without making an name to the function, or assigning it to a variable, or calling it in onload() event).
// 5.Use JS constructor function to create the following custom types:
// a.Create custom type “Person” that has Name and age properties.
// b.Use prototype property to add PrintPerson() method to the class.
// c.Create student object that inherits from Person, and its constructor have two member variables (Faculty and Total_mark), and put default value for Total_mark to be 0 (Using Function Constructor).
// d.Use prototype property to add PrintStudent() method to the class.
// e.In previous class Create private variable named (min_degree) which value is 60, and create local (inner) function named (checkSuccess) that return “Succeed” if student degree is more than min_degree, else it returns “Fail”. 
// f.Make another member function (public) named (checkResult) that alert the result of that student.
// g.Make an Object of student and set it members, and test it with different values. (Try to access min_degree variable, and checkSuccess function outside class, what did you remark?).
// h.What’s the difference between adding property using prototype, and adding it to specific class object?
