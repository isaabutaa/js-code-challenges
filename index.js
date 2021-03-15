// ***** Objective: Find first non-repeating character in a string. If all characters repeat, return '_'
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

/* function firstNotRepeatingChar(str) {
    for(let i = 0; i < str.length; i++) {
        let target = str.charAt(i)
        if(str.indexOf(target, i + 1) == -1) {
            return target
        }
    }
    return '_'
} */

// ***** Objective: Return the first duplicate number in an array. If no duplicate, return -1
// References: https://dev.to/seanwelshbrown/find-the-first-duplicate-in-a-javascript-array-5da3
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// My solution:
// const a = [1, 3, 5, 5, 3]

// function firstDupe(a) {
//     for(let i = 0; i < a.length; i++) {
//         let num = a[i]
//         if(a.indexOf(num, i + 1) !== -1) {
//             return num
//         }
//     }
//     return -1
// }
// console.log(firstDupe(a))

// function firstDuplicate(a) {
//     const numSet = new Set()
//     for(let i = 0; i < a.length; i++) {
//         let num = a[i]
//         if(numSet.has(num)) {
//             return num
//         }
//         numSet.add(num)
//         // console.log(numSet)
//     }
//     return -1
// }
// console.log(firstDuplicate(a))

// ***** Challenge: Create a Book class that takes a title, author, ISBN, and numCopies as arguments. Create a getAvailability, sell, and restock method.

// class Book {
//     constructor(title, author, ISBN, numCopies) {
//         this.title = title;
//         this.author = author;
//         this.ISBN = ISBN;
//         this.numCopies = numCopies;
//     }

//     getAvailability() {
//         if(this.numCopies == 0) return "Out of stock: No copies left";
//         else if(this.numCopies < 10) return `Low stock: ${this.numCopies} copies left`;
//         else return `In stock: ${this.numCopies} copies left`;
//     }

//     sell(n = 1) {
//         this.numCopies -= n;
//         if(this.numCopies == 1) return `Sold ${n}. You now have ${this.numCopies} copy in stock`;
//         return `Sold ${n}. You now have ${this.numCopies} copies in stock`;
//     }

//     restock(n = 5) {
//         this.numCopies += n;
//         return `Restocked ${n} more. You now have ${this.numCopies} copies in stock`;
//     }

// }

// class TechnicalBook extends Book {
//     constructor(title, author, ISBN, numCopies, edition) {
//         super(title, author, ISBN, numCopies);
//         this.edition = edition;
//     }

//     getEdition() {
//         return `The edition of this technical book is ${edition} edition`;
//     }
// }

// const harryPotter = new Book("Harry Potter & the Sorceror's Stone", "J.K. Rowling", 09384509384, 10)

// console.log(harryPotter.getAvailability());
// console.log(harryPotter.sell(10));
// console.log(harryPotter.restock()); 

// const codingBook = new TechnicalBook("essential JS", "author name", 90835039, 10, "5th")
// console.log(codingBook.sell())

// ***** Challenge: Create a Movie object using a constructor function or class. Write a getOverview method that returns the properties of the movie.

/* function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
};

const sevenPounds = new Movie("Seven Pounds", "directorName", "drama", 2007, 5);
console.log(sevenPounds.getOverview()); */

/* class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }
}
const sevenPounds = new Movie("Seven Pounds", "directorName", "drama", 2007, 5);
console.log(sevenPounds.getOverview()); */

// ***** Challenge: Given an array of dishes, filter through them to return the ones that are vegetarian. For each vegetarian dish, dynamically render them to the DOM in a list
/* 
const dishes = [
    {
        name: "Eggplant Parmesan",
        vegetarian: true
    },
    {
        name: "Spaghetti with Meatballs",
        vegetarian: false
    },
    {
        name: "Margherita Pizza",
        vegetarian: true
    },
    {
        name: "Mom's Lasagna",
        vegetarian: false
    }
]

const vegetarianMenu = document.querySelector("#vegetarian-list")
const vegetarianDishes = dishes.filter(dish => dish.vegetarian)
const displayItems = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        const listItem = document.createElement("li")
        listItem.textContent = `Dish: ${arr[i].name}`
        vegetarianMenu.append(listItem)
    }
}

displayItems(vegetarianDishes) */

// ***** Challenge: Rotate a matrix 90 degrees clockwise
/*
Input:
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

Output: 
[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]
*/

// const a = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// function rotateImage(a) {
//     const newArr = []
//     for(let i = 0; i < a.length; i++) {
//         let subArr = []
//         for(let j = 0; j < a.length; j++) {
//             subArr.unshift(a[j][i])
//         }
//         newArr.push(subArr)
//     }
//     return newArr
// }

// random number between 1 and 3

// function randomNum() {
//     return Math.floor(Math.random() * 3) + 1
// }

// console.log(randomNum())

// let username = Symbol("username");
// let password = Symbol("password");

// const sam = {
//     [username]: "sam",
//     [password]: 203948403958,
//     age: 24
// };

// console.log(sam.username);

// ***** Challenge: Use setInterval to display current time on the DOM

// const timeDisplay = document.querySelector("p")
// const button = document.querySelector("button")

// const intervalId = setInterval(() => {
//     const date = new Date()
//     return timeDisplay.textContent =  `Current time: ${date.toLocaleTimeString('en-US')}`
// }, 1000)

// const stopTime = () => {
//     clearInterval(intervalId)
// }

// button.addEventListener("click", () => stopTime())


// ***** Challenge: Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

const inputArray = [3, 6, -2, -5, 7, 3];

function adjacentElementsProduct(inputArray) {
    let products = [];
    for(let i = 0; i < inputArray.length; i++) {
        if(i !== inputArray.length - 1) {
            products.push(inputArray[i] * inputArray[i + 1]);   
        }
    }
    const sortedArr = products.sort((a, b) => a - b);
    return sortedArr[sortedArr.length - 1];
}

console.log(adjacentElementsProduct(inputArray)); // returns 21, which is the product of 7 and 3

// ***** Challenge: Given an object 'classroom', return the list of students within. The 'classroom' object has two properties: hasTeachingAssistant, and classList. If hasTeachingAssistant is true, the second name in the classList will be the teaching assistant. The first person in the class list will always be the teacher. Return the list of students.

// const classroom = {
//     hasTeachingAssistant: true,
//     classList: [
//         "teacher", "teaching assistant", "student1", "student2", "student3"
//     ]
// };

// function getStudents(classroom) {
//     const { hasTeachingAssistant, classList } = classroom;
//     let teacher, teachingAssistant, students;

//     if(hasTeachingAssistant) {
//         [teacher, teachingAssistant, ...students] = classList;
//     } else {
//         [teacher, ...students] = classList;
//     }
//     return students;
// }

// console.log(getStudents(classroom));

// ***** Challenge: Use a closure to create three buttons that, when clicked, change the background color of the body

// const colors = ["blue", "pink", "green"];

// function coloredButtons(colors) {
//     for(let i = 0; i < colors.length; i++) {
//         let color = colors[i];
//         const button = document.createElement("button");
//         button.textContent = color;
//         document.body.append(button);

//         function changeColor(color) {
//             document.body.style.backgroundColor = color;
//         }

//         button.addEventListener("click", () => changeColor(color));
//     }
// }

// coloredButtons(colors)