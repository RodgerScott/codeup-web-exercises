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

const userLanguages = users.filter(user => {
   if (user.languages.length > 2) {
       return user;
   }
});


//map function

const userEmails = users.map(user => {
    return user.email;
});


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

// const newArray2 = customers.map( customer => {
//     return {
//         name: customer.name,
//         age: customer.age
//     };
// });

const newArray2 = customers.map( ({name, age}) => {
    return {
        name,
        age
    };
});
// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects


const civilArray = customers.filter ( ({occupation}) => {
    if (occupation === "Police Officer" || occupation === "Teacher") {
        return customers;
    }
});

// PROBLEM 4 - determine the average age of customers


const averageAge = customers.reduce (( average, customer) => {
    return Math.round(average + customer.age / customers.length);
}, 0);


// bonus set 2

const names = ["John", "Max", "Ronald"];


// - Create an array where all names are given a last name of Smith.

const newLastName = names.map ( name => {
    return `${name} Smith`;
});

// - Create an array where each word is in all caps

const allCapsName = names.map ( name => {
    return `${name.toUpperCase()}`;
});

// - Create an array where all names have more than 3 letters

const nameLetterLength = names.filter ( name => {
   if ( name.length > 3) {
       return name;
   }
});

// - Create an array of names with only the last two letters of each name

const nameLastTwoLetters = names.map ( name => {
   return `${name.charAt(name.length - 2)}${name.charAt(name.length - 1)}`
});

// - Create a total count of all letters

const nameLetterCount = names.reduce (( counter, name) => {
        return counter + name.length;
}, 0);


// - Create a string of all letters in alphabetical order

const alphaArray = [];
alphaArray.push(names.join('').toLowerCase());

const alphaOrder = alphaArray.map(name => {
    return name.split('').sort().join('');
});


// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter

const wordObjects =  names.map( name  => {
    return {
        wordLength: name.length,
        firstLetter: name.charAt(0),
        lastLetter: name.charAt(name.length - 1)
    }
});


// - Create a string of all vowels in the entire array of names

//filter out the consenants

const stringOfVowels = names.reduce( ( vowels, name) => {
    return (vowels + (name.match(/[aeiou]/g)));
}, "");

// - Create a single object with properties

const singleObject = names.reduce( ( accum, name ) => {
    accum[name] = name;
    return accum;
}, {});

//bonus set 3


const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];



// - Calculate the average age of family members

const averageAgeDeaux = family.reduce (( age, person) => {
    return Math.round(age + person.age / family.length);
}, 0);


// - Create an array of family objects without the age property

const arrayFamily = family.map ( ({name, gender})  => {
    return {
        name,
        gender
    }
});


// - Create an array of all minors

const minorsArray = family.filter ( person => {
    if (person.age < 19 ) {
        return person;
    }
});

// - Calculate the total age combined of family members

const totalFamilyAge = family.reduce((totalAge, person) => {
   return totalAge + person.age;
}, 0);

// - Create an array of only female family member objects

const ladies = family.filter ( person => {
    return person.gender === "female";
});


// - Create a single object with properties containing arrays of all names, genders, and ages

const output = {
    names: family.map(obj => obj.name),
    genders: family.map(obj => obj.gender),
    ages: family.map(obj => obj.age)
};

//chanel's solution ^ Check this out later.


//bonus set 4

// # Map, Filter, Reduce exercise
//
// ## Source Data
// <a href="https://cdn.glitch.com/e6f06897-3ddf-49ac-a418-976be76cc6fc%2Fmock_data_batch_1.json">Mock Data Batch 1</a>
//
// <a href="https://cdn.glitch.com/e6f06897-3ddf-49ac-a418-976be76cc6fc%2Fmock_data_batch_2.json?1519228215291">Mock Data Batch 2</a>

// ## Exercises
// Make a page called functional_exercises.html
// Save both .json files into your project's ./data/ folder
//
// Use an ajax GET request to read the contents of both .json files.
//
// 1. Combine both arrays of objects into a single array. Name that variable users.
//
// 1. Use .reduce to get a sum total of every price from each object. Call that sum "totalPrices"
//
// 2. Use the users array and .reduce to determine how many shirts of each size we'll need to get. Example output should looks something like the following (numbers aren't exact)
//
// {
//     "S": 200,
//     "M": 892,
//     "L": 290,
//     "XL": 442
// }
//
// 2. Produce a new array of objects w/ only the car info. Call this array allCars. Each object should only have the make, model, color, price, used properties
//
// 3. Produce a single object called car_data w/ the following properties
// - `avg_price`, `avg_new_price`, `avg_used_price`, `top_make`, `top_model`, `total_number`, `number_used`, `number_new`, `highest_price`, `lowest_price`
//
// 4. Make an array called admins that contains only users who are admins
//
// 5. Make an array called authors that contains only users who are authors
//
//
// 1. Make an object called departments. That departments object should have a property for each department name. The value for each department name should be an array of user objects containing firstName, lastName, department, email, and buzzword
//
// {
//     "legal": [
//     {"first_name": "Jane", "email":"jane@jane.com", "buzzword":"activating motivators!"},
//     {"first_name": "Bob", "email":"bob@bob.com", "buzzword":"telegraphing bankers"}
// ],
//     "marketing": [
//     {"first_name": "Marsha", "email":"marsh@sha256.com", "buzzword":"securing wonder"},
//     {"first_name": "Pat", "email":"itspat@patrocks.com", "buzzword":"whatever works"}
// ],
//     etc ...
// }
