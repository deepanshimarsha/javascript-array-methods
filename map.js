
//Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

const incrementNumbersBy3 = (num) => num.map((ele) => ele + 3)

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbersBy3(numbers));


//Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const capitalizeArray = arr => arr.map((ele) => ele.toUpperCase())

const myArray = ['apple', 'banana', 'cherry'];
console.log(capitalizeArray(myArray));

//Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

const getAges = arrOfPeople => arrOfPeople.map(({age}) => age )

const people = [
  { name: 'Ankit', age: 25 },
  { name: 'Vinit', age: 24 },
  { name: 'Shashi', age: 29 }
];
const ages = getAges(people);
console.log(ages)


//Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

const getProductNamesInLowerCase = arrOfProduct => arrOfProduct.map(({name}) => name.toLowerCase())

const products = [
  { name: 'Lip Balm', stock: 100 },
  { name: 'PERFUME', stock: 400 },
  { name: 'Socks', stock: 200 }
];
console.log(getProductNamesInLowerCase(products));


//Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

const getCityNames = arrOfCity => arrOfCity.map(({name}) => name)
const cities = [
  { name: 'New York', population: 8538000 },
  { name: 'Los Angeles', population: 3976000 },
  { name: 'Bangalore', population: 13608000 }
];

console.log(getCityNames(cities)); 

//Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const people1 = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
  ];
  
const getArrOfName = arrOfPeople => arrOfPeople.map(({name}) => name)
const names = getArrOfName(people1)
  
console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']


//Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const numbers1 = [1, 2, 3, 4];
const multiplyByFive = arrOfNum => arrOfNum.map((ele) => ele*5)

console.log(multiplyByFive(numbers1)); // Output: [5, 10, 15, 20]


// Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.
const employeeData = [
	{name: "ram", dept: "marketer"}, 
	{name: "Radha", dept: "SDE"},
	{name: "shyam", dept: "finance professional"},
]

const greetEmployeeMessages = arrOfEmployee => arrOfEmployee.map(({name, dept}) => `Hi ${name} we are glad to have you as a ${dept}`)



console.log(greetEmployeeMessages(employeeData));
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']


//Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
];

const getBookTitles = arrOfBooks => arrOfBooks.map(({title}) => title)



const titles = getBookTitles(books);
console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

//Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.

const func1 = arr => arr.map((ele) => ele%2 === 0 ? ele*20 : ele*30 )
console.log(func1([1,2,3,4,5,6]))

//Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.

const func2 = arr => arr.map((ele, idx) => idx%2 === 0 ? ele - 2  : ele + 3 )
console.log(func2([1,2,3,4,5,6]))

// write a function which removes all letters between first and last letter of a word and replace with number of letters


const input = "Every a developer likes to mix kubernetes and javascript"; 
const removeLetters = str => str.split(" ").map((ele) => ele[0] + ele.length + ele[ele.length-1]).join(" ")
console.log(removeLetters(input))

//expected output - "E3y d7r l3s to m1x k8s a1d j8t"

//Problem Statement: We are interested in retrieving only the name of the students and all the names should be in caps.
//Output: ['JOHN', 'BABA', 'YAGA', 'WICK']


studentRecords = [ {name: 'John', id: 123, marks : 98 },
  {name: 'Baba', id: 101, marks : 23 },
  {name: 'yaga', id: 200, marks : 45 },
  {name: 'Wick', id: 115, marks : 75 } ] 

const studentNameUppercase = arr => arr.map((obj) => obj.name.toUpperCase())
console.log(studentNameUppercase(studentRecords))


