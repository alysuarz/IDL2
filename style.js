//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
let jobTitle = `Student`;
let myLocation = `Toronto`;
let annualSalary = `000`;
let companyName = `Home`;

console.log(`You will be a ${jobTitle} working for in ${myLocation}, making ${annualSalary} at ${companyName}`);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let currentYear = `2020`;
let birthYear = `1994`;
let age = currentYear-birthYear;
console.log(`They are ${age} years old`);


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let currentAge = `26`;
let maxAge = `75`;
let amtDay = 365*2;
let remainingYears = maxAge-currentAge;
let lifetimeSupply = remainingYears*amtDay;
console.log(`You will need ${lifetimeSupply} of your favorite snack to last you till ${maxAge} years old`)



//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let radius = '4'
let pi = `3.14`
let circumference = (radius*2)*pi;
let area = pi*(radius**2);
console.log(`The circumference is ${circumference}`);
console.log(`The area of the circle is ${area}`)



//EXERCISE;5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let fahrenheitTemp = `4`;
let celsiusTemp = (fahrenheitTemp-32)/1.8;
console.log(`${fahrenheitTemp}° is ${celsiusTemp}°`);


function squareNumber(){
    let number = 25;
    let square = Math.sqrt(number);
    
    console.log(`The square root of ${number} is ${square}`);
    }
    squareNumber();
  
  function halfNumber(){
    let num1 = 6;
    let halfNumber = num1/2;
  
    console.log(`The half of ${num1} is ${halfNumber}`);
     }
    halfNumber();

      function percentOf(){
        let x = 4;
        let y = 2;
        let percent = (y/x)*100; 
         console.log(`${y} is ${percent}% of ${x}`);
      }
      percentOf();

      function areaOfCircle(){
  let radius = '4';
  let pi = `3.14`;
  let circumference = (radius*2)*pi;
  let area = pi*(radius**2);
  console.log(`The area of the circle with the radius of ${radius} is ${area}`);

}
areaOfCircle();

function runAll(){
    let n1 = 6;
    let halfN = n1/2;

    let newRadius = Math.sqrt(halfN);
    let pi = `3.14`;
    let newArea = pi*(newRadius**2);
    let percentageOfArea = (newRadius/newArea)*100;

    console.log(`The area of the circle is ${newArea} and is ${percentageOfArea}% of ${newRadius}`);
   
}  

runAll();