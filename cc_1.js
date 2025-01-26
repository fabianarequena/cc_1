//Task 1: Employee Information
let employeeName = "Fabiana Requena";
const employeeID = 123;
var isActive = true 

console.log("Employee Name:" employeeName, "Type:", typeof employeeName);
console.log("Employee ID:" employeeID, "Type:", typeof employeeID);
console.log("Is Active:" isActive, "Type:" typeof isActive);

//Task 2: Product Details
let productName = "Laptop";
const productPrice = 999.99;
var isAvailable = true;

console.log("Product Name:", productName, "Type:", typeof productName);
console.log("Product Price:", productPrice, "Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "Type:", typeof isAvailable);

//Task 3: Financial Transactions
let accountBalance = 5000;

accountBalance += 1000;
console.log("After Deposit:", accountBalance);

accountBalance -= 3000;
console/log("After Withdrawl:", accountBalance);

accountBalance *= 1.07;
console.log("After Interest:", accountBalance);

accountBalance /= 2;
console.log("After Halving:", accountBalance);

//Task 4: Customer Messaging
let customerName = "Fabiana";

let welcomeMessage = "Welcome to our plaform," + customerName + "!";
console.log(welcomeMessage);

//Task 5: Access Control
let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Acess granted.");
} else {
    console.log("Acess denied. Please log in.");
}
