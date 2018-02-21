const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

//filter function

let languagesThree = [];
users.filter(user => {
   if (user.languages.length > 2) {
       languagesThree.push(user);
   }
});
console.log(languagesThree);

//map function

let emailAddresses = [];

users.map(user => {
    emailAddresses.push(user.email);
});

console.log(emailAddresses);



//reduce function

const idObject = users.reduce( (accumulator, value) => {
    accumulator[value.id] = `${value.name}, ${value.email}, ${value.languages}`;
    return accumulator;
}, {});


// Bonus Problems

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit

const newArray = fruits.map( letter => {
    return letter.charAt(0);
});

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)

const newArray2 = customers.map( customer => {
    return {
        name: customer.name,
        age: customer.age
    };
});
// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects


const civilArray = customers.filter ( customer => {
    if (customer.occupation === "Police Officer" || customer.occupation === "Teacher") {
        return customer;
    }
});

// PROBLEM 4 - determine the average age of customers


const averageAge = customers.reduce (( average, customer) => {
    return Math.round(average + customer.age / customers.length);
}, 0);


