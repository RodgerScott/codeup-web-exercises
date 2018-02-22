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



function githubCheck() {
    const gHPromise = fetch('https://api.github.com/users', {headers: {'Authorization': ''}});
    return gHPromise;
}



