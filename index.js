// Objective: Find first non-repeating character in a string. If all characters repeat, return '_'
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

/* function firstNotRepeatingChar(str) {
    for(let i = 0; i < str.length; i++) {
        let target = str.charAt(i)
        if(str.indexOf(target, str.indexOf(target) + 1) == -1) {
            return target
        }
    }
    return '_'
} */

// Objective: Return the first duplicate number in an array. If no duplicate, return -1
// References: https://dev.to/seanwelshbrown/find-the-first-duplicate-in-a-javascript-array-5da3
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

/* function firstDuplicate(a) {
    const numSet = new Set()
    for(let i = 0; i < a.length; i++) {
        if(numSet.has(a[i])) return a[i]
        numSet.add(a[i])
    }
    return -1
} */

// Challenge: Create a Book class that takes a title, author, ISBN, and numCopies as arguments. Create a getAvailability, sell, and restock method.

/* class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    getAvailability() {
        if(this.numCopies == 0) return "Out of stock: No copies left";
        else if(this.numCopies < 10) return `Low stock: ${this.numCopies} copies left`;
        else return `In stock: ${this.numCopies} copies left`;
    }

    sell(n = 1) {
        this.numCopies -= n;
        if(this.numCopies == 1) return `Sold ${n}. You now have ${this.numCopies} copy in stock`;
        return `Sold ${n}. You now have ${this.numCopies} copies in stock`;
    }

    restock(n = 5) {
        this.numCopies += n;
        return `Restocked ${n} more. You now have ${this.numCopies} copies in stock`;
    }

}

const harryPotter = new Book("Harry Potter & the Sorceror's Stone", "J.K. Rowling", 09384509384, 10)

console.log(harryPotter.getAvailability());
console.log(harryPotter.sell(10));
console.log(harryPotter.restock()); */


// Challenge: Create a Movie object using a constructor function or class. Write a getOverview method that returns the properties of the movie.

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