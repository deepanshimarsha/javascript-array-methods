//question 1
//Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

const filterLongStrings = arrOfFruits => arrOfFruits.filter((str) => str.length >5 )

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
console.log(filterLongStrings(fruits)); 
// Output: ["banana", "cherry", "watermelon", "pineapple"]


//question 2
//Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

const isDivisibleBy3and5 = arrOfNumber => arrOfNumber.filter((num) => num % 3 === 0 && num % 5 === 0)
const number = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(number));
// Output: [30, 15]

//question 3
//Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

const filterAgeGreaterThan30 = arrayOfPeople => arrayOfPeople.filter(({age}) => age > 30)

const people1 = [
  { name: 'Rahul', age: 25 },
  { name: 'Raj', age: 35 },
  { name: 'Vijay', age: 45 }
];

console.log(filterAgeGreaterThan30(people1)); 
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

//question 4
//Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

const filterByScore = arrOfStudent => arrOfStudent.filter(({score}) => score > 80)
const students = [
  { name: 'Aditya', score: 85 },
  { name: 'Bob', score: 75 },
  { name: 'Charlie', score: 90 }
];

console.log(filterByScore(students)); 
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

//question 5
//Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

const filterByCityAndAge = arrOfSomePeople => arrOfSomePeople.filter(({city, age}) => city === "Indore" && age > 70)



const people3 = [
  { name: 'Ridhima', age: 75, city: 'Indore' },
  { name: 'Akshay', age: 60, city: 'Delhi' },
  { name: 'Udit', age: 80, city: 'Indore' },
	{ name: 'Venki', age: 80, city: 'Bangalore' }
];
const filterPeople = filterByCityAndAge(people3);
console.log(filterPeople); 
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

//question 6
//Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

const filterByGenre = (arrOfBooks, genreToBeFiltered)  => arrOfBooks.filter(({genre}) => genre === genreToBeFiltered)


const books = [
  {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"},
  {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
  {title: "1984", author: "George Orwell", genre: "Science Fiction"},
  {title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance"}
];

const filteredBooks = filterByGenre(books, "Science Fiction");
console.log(filteredBooks);
// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

//question 7
//Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

const filterBySalaryAndAge = (arrOfEmployees, salaryToBeFiltered, ageToBeFiltered) => arrOfEmployees.filter(({age, salary}) => age > ageToBeFiltered  && salary > salaryToBeFiltered  ) 



const employees = [
  {name: "Abhay", age: 25, salary: 20000},
  {name: "Joice", age: 30, salary: 35000},
  {name: "Reena", age: 35, salary: 15000},
  {name: "Jeena", age: 40, salary: 50000}
];

const filteredEmployees = filterBySalaryAndAge(employees, 22000, 25);
console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]


// Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]

const studentNames = arrOfStud => arrOfStud.filter((ele) => ele[0] === "A")


console.log(studentNames(studentName));
// Output: ["Anjali", "Arpit", "Ankit"]


//Write an ES6 function which filters out the products which have a price greater than 40.

const productData = [
		{prodName: "Dairy Milk", price: 10},
		{prodName: "Dairy Milk Silk", price: 70},
		{prodName: "Five Star", price: 20},
		{prodName: "Mars", price: 50}
]
const getProducts = (arrOfProduct, price) => arrOfProduct.filter(({price : priceOfProd}) => priceOfProd > price)



console.log(getProducts(productData, 40))
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]


  
  //Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.
  const cars1 = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
  
  const getCarDetails = arrOfCars => arrOfCars.filter((obj) => obj.year > 2012)
  
  
  const getCars = getCarDetails(cars1);
  console.log(getCars);
  // Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]
  
  
  
  
  //Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".
  const products1 = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
      { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
  ];
  
  const getAllElectronicProducts = arrOfProducts => arrOfProducts.filter((obj) => obj.category === "electronics")
  
  
  
  const electronicProducts = getAllElectronicProducts(products1);
  console.log(electronicProducts); 
  // Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]
  
  //Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.
  const students1 = [
    { name: "Alice", age: 16, grade: 90 },
    { name: "Bob", age: 17, grade: 80 },
    { name: "Charlie", age: 15, grade: 95 },
    { name: "David", age: 16, grade: 85 },
  ];
  
  const filterStudentsByGrade = (arrOfStudents, passingGrade) => arrOfStudents.filter((obj) => obj.grade > passingGrade)
  
  
  const highGradeStudents = filterStudentsByGrade(students1, 85);
  console.log(highGradeStudents); 
  // Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]
  
 
  // Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.
  const customers = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' },
    { name: 'Alice', age: 35, gender: 'Female' },
  ];
  
  const getMaleCustomers = arrOfCustomers => arrOfCustomers.filter((obj) => obj.gender === "Male")
  
  
  const maleCustomers = getMaleCustomers(customers);
  console.log(maleCustomers); 
  // Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]
  
  // Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.
  const games = [
    {title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"},
    {title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action"},
    {title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle"},
    {title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure"}
  ];
  
  const filterByGenre1 = (arrOfGames, certainGenre) => arrOfGames.filter((obj) => obj.genre === certainGenre)
  
  
  const filteredGames = filterByGenre1(games, "RPG");
  console.log(filteredGames);
  // Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]
  
  
  
