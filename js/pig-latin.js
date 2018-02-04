(function () {
    var input;
    var pigLatingCharacter = [];
    do {
        input = prompt("Welcome to the Pig Latin converter tool." + '\n' + "If you would " +
            "like to convert a word or phrase, please type \'add\'." + '\n' + "If you would like to quit this application," +
            " please type \'quit\'.");
        if(input === 'add') {
            var newPhrase = prompt("What word or phrase would you like to add?");
            newPhrase = newPhrase.split(' ');
            for (var i = 0; i < newPhrase.length; i++) {
                while (newPhrase[i] === "") {
                    newPhrase.shift(i);
                }
                if (newPhrase[i].toLowerCase().charCodeAt(0) === 97 || newPhrase[i].toLowerCase().charCodeAt(0) === 101 ||
                    newPhrase[i].toLowerCase().charCodeAt(0) === 105 || newPhrase[i].toLowerCase().charCodeAt(0) === 111 ||
                    newPhrase[i].toLowerCase().charCodeAt(0) === 117) {
                    pigLatingCharacter.push(newPhrase[i] + "way");
                }
                else if (newPhrase[i].toLowerCase().charCodeAt(1) === 97 || newPhrase[i].toLowerCase().charCodeAt(1) === 101 ||
                        newPhrase[i].toLowerCase().charCodeAt(1) === 105 || newPhrase[i].toLowerCase().charCodeAt(1) === 111 ||
                        newPhrase[i].toLowerCase().charCodeAt(1) === 117) {
                    pigLatingCharacter.push(newPhrase[i].substring(1, newPhrase[i].length) + (newPhrase[i].charAt(0).toLowerCase() + "ay"));
                }
                else if (newPhrase[i].toLowerCase().charCodeAt(2) === 97 || newPhrase[i].toLowerCase().charCodeAt(2) === 101 ||
                        newPhrase[i].toLowerCase().charCodeAt(2) === 105 || newPhrase[i].toLowerCase().charCodeAt(2) === 111 ||
                        newPhrase[i].toLowerCase().charCodeAt(2) === 117) {
                    pigLatingCharacter.push(newPhrase[i].substring(2, newPhrase[i].length) + (newPhrase[i].substring(0, 2).toLowerCase() + "ay"));
                }
                else {
                    pigLatingCharacter.push(newPhrase[i].substring(3, newPhrase[i].length) + (newPhrase[i].substring(0, 3).toLowerCase() + "ay"));
                }
            }
            alert("Your pig-Latinified expression is " + pigLatingCharacter.join(' '));
            pigLatingCharacter =[];
        }
    } while(input !== 'quit' && input !== null);
})();
