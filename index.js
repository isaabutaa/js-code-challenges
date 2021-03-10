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