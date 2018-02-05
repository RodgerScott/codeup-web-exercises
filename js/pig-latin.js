function  ted () {
    var pigLatingCharacter = [];

            var newPhrase = document.getElementById("original-text").value;
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
                        newPhrase[i].toLowerCase().charCodeAt(1) === 117 || newPhrase[i].toLowerCase().charCodeAt(1) === 121)  {
                    pigLatingCharacter.push(newPhrase[i].substring(1, newPhrase[i].length) + (newPhrase[i].charAt(0).toLowerCase() + "ay"));
                }
                else if (newPhrase[i].toLowerCase().charCodeAt(2) === 97 || newPhrase[i].toLowerCase().charCodeAt(2) === 101 ||
                        newPhrase[i].toLowerCase().charCodeAt(2) === 105 || newPhrase[i].toLowerCase().charCodeAt(2) === 111 ||
                        newPhrase[i].toLowerCase().charCodeAt(2) === 117 || newPhrase[i].toLowerCase().charCodeAt(2) === 121) {
                    pigLatingCharacter.push(newPhrase[i].substring(2, newPhrase[i].length) + (newPhrase[i].substring(0, 2).toLowerCase() + "ay"));
                }
                else if (newPhrase[i].toLowerCase().charCodeAt(3) === 97 || newPhrase[i].toLowerCase().charCodeAt(3) === 101 ||
                    newPhrase[i].toLowerCase().charCodeAt(3) === 105 || newPhrase[i].toLowerCase().charCodeAt(3) === 111 ||
                    newPhrase[i].toLowerCase().charCodeAt(3) === 117 || newPhrase[i].toLowerCase().charCodeAt(3) === 121) {
                    pigLatingCharacter.push(newPhrase[i].substring(3, newPhrase[i].length) + (newPhrase[i].substring(0, 3).toLowerCase() + "ay"));
                }
                else {
                    pigLatingCharacter.push(newPhrase[i].substring(4, newPhrase[i].length) + (newPhrase[i].substring(0, 4).toLowerCase() + "ay"));
                }
            }
            document.getElementById("function-return").innerHTML = pigLatingCharacter.join(' ');
}

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}