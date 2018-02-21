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
