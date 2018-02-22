function wait (number) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (number) {
                resolve();
            } else {
                reject();
            }
        }, number)
    })
}


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


    const ghCommit = (username) => {

        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': ''}
        }).then(response => response.json().then(data => {
            console.log(`${username}'s last commit was made on ${data[0].created_at.substring(0,10)}`)
        })).catch(() => console.error("BAD REQUEST"))};




