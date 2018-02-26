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

let mockdata1;
let mockdata2;
let users = [];

$.get('./data/mockdata1.json').done( data => {
    mockdata1 = data;
    $.get('./data/mockdata2.json').done( data => {
        mockdata2 = data;
        let totalData = mockdata1.concat(mockdata2);
        users.push(totalData);
    });
});


// 1. Use .reduce to get a sum total of every price from each object. Call that sum "totalPrices"
//

function reduce (data) {
    return data.reduce( (total, {price}) =>
        total + parseFloat(price.substr(1)), 0);
}


//
// 2. Use the users array and .reduce to determine how many shirts of each size we'll need to get. Example output should looks something like the following (numbers aren't exact)
//
// {
//     "S": 200,
//     "M": 892,
//     "L": 290,
//     "XL": 442
// }

let tshirts = {
    "S":0,
    "M":0,
    "L":0,
    "XL":0,
    "2XL":0,
    "3XL":0
};

function tShirtSize () {
    return users.reduce((sizeCounter, {shirt_size}) => {

    }, {
        "SM": 0,
        "M":0,
        "L":0,
        "XL":0,
        "2XL":0,
        "3XL":0
    })
}


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