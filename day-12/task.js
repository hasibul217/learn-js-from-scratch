//task 1
console.log("Task 1");
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
//task 2
//
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
//It will still print 1

//task 3
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

// const  {name : personName} = person;
// const {company : {name: companyName}}=person;
// const {company : {location : {city:companyCity, zip:locationZip}}} = person;

const {
  name: personName,
  company: {
    name: companyName,
    location: { city: companyCity, zip: locationZip },
  },
} = person;

console.log(
  `${personName} works in ${companyName}, which is located at ${companyCity},${locationZip}.`
);

//task 4

const fighter = {
  name: "Islam Makhachev",
  age: 32,
  fightScores: [95, 88, 92, 97, 90, 85, 94], // Performance scores from last 7 fights
  calculateAveragePerformance() {
    let sum = 0;
    for (let i = 0; i < this.fightScores.length; i++) {
      sum += this.fightScores[i];
    }
    let averageScore = (sum / this.fightScores.length).toFixed(2);
    return averageScore;
  },
};
const { name: fighterName } = fighter;
const fighrtAvarageScore = fighter.calculateAveragePerformance();

console.log(
  `${fighterName} has the avarage fight score of ${fighrtAvarageScore}`
);

//task 5

const bookstore = {
  name: "City Center Bookstore",
  location: "Dhaka, Bangladesh",
  books: [
    {
      title: "Atomic Habits",
      author: "James Clear",
      stock: 0,
      price: 450,
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      stock: 89,
      price: 350,
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      stock: 8,
      price: 400,
    },
  ],

  checkAvailability(bookTitle) {
    for (let i = 0; i < this.books.length; i++) {
      let book = this.books[i];
      if (bookTitle == book.title) {
        return book.stock > 0 ? "In Stock" : "Out of Stock";
      } else {
        return "No book found";
      }
    }
  },
  restockBook(bookTitle, quantity) {
    for (let i = 0; i < this.books.length; i++) {
      let book = this.books[i];

      if (bookTitle === book.title) {
        book.stock += quantity;
        return `Restocked! ${book.title} now has ${book.stock} copies`;
      }
    }

    return "Book not found in our store";
  },
};

console.log(bookstore.checkAvailability("The Alchemist"));

console.log(bookstore.restockBook("The Alchemist", 349));
