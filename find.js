

//Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numbers1 = [1, 2, 3, 21, 14, 7];

const isDivisibleBy7 = arrOfNum => arrOfNum.find((ele) => ele%7 ===0)

console.log(isDivisibleBy7(numbers1))
// Output: 21


//Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.
const names1 = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]

const isNamesGreaterThan8 = arrOfName => arrOfName.find((str) => str.length > 8)

console.log(isNamesGreaterThan8(names1));
// Output: "Geetanjali"


//Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".
const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

const findStudentWithGradeA = arrOfStud => arrOfStud.find(({grade}) => grade === "A")



const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA); 
// Output: { name: "Mary", grade: "A" }


//Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. Return the first student object that has a grade of "A" or they are a scholarship student.
const students1 = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];

const findStudent = arrOfStud => arrOfStud.find(({grade, scholarship}) => grade === "A" || scholarship === true)



const student = findStudent(students1);
console.log(student); 
// Output: { name: "Mary", grade: "B", scholarship: true }


//Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.
const students2 = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];

const findStudent1 = arrOfStud => arrOfStud.find(({grade, scholarship}) => grade === "B" && scholarship === true)



const result = findStudent1(students2);
console.log(result); 
// Output: { name: "Sarah", grade: "B", scholarship: true }


//Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0.

const bollywoodMovies1 = [
  { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
  { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
  { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
  { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
  { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
  { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
  { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
];

const getBestOldBollywoodMovies1 = arrOfObj => arrOfObj.filter(({year, rating}) => year <1990 && rating > 8).map(({title}) => title)



const bestOldMovies1 = getBestOldBollywoodMovies1(bollywoodMovies1);
console.log(bestOldMovies1); // Output: ['Sholay', 'Parinda']

 //Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.
 const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
  const findBookWithMoreThan500Pages = arrOfBooks => arrOfBooks.find((obj) => obj.pageCount > 500)
  
  
  
  const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
  console.log(bookWithMoreThan500Pages); 
  // Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }

  //Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".
  const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
      { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
  ];
  
  const findElectronicsProduct = arrOfProducts => arrOfProducts.find((obj) => obj.category === "electronics")
  
  
  const electronicsProduct = findElectronicsProduct(products);
  console.log(electronicsProduct); 
  // Output: { name: "iPad", price: 799, category: "electronics" }

  // Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.
const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
  
  const findToyotaCar = arrOfCars => arrOfCars.find((obj) => obj.make === "Toyota" && obj.year > 2010)
  
  
  const toyotaCar = findToyotaCar(cars);
  console.log(toyotaCar); 
  // Output: { make: "Toyota", model: "Camry", year: 2015 }