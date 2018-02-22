const wait = number => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (number) {
                resolve(`Your promise resolved after ${number} milliseconds`);
            } else {
                reject(`Terrible`);
            }
        }, number);
    });
};


wait(1000).then((data) => console.log(data));
wait(3000).then((data) => console.log(data));


    const ghCommit = (username) => {

        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': ''}
        }).then(response => response.json().then(data => {
            console.log(`${username}'s last commit was made on ${data[0].created_at.substring(0,10)}`)
        })).catch(() => console.error("BAD REQUEST"))};




