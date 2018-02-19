function  ted () {
    var pigLatingCharacter = [];

            var newPhrase = document.getElementById("original-text").value;
            newPhrase = newPhrase.split(' ');
            for (var i = 0; i < newPhrase.length; i++) {
                while (newPhrase[i] === "") {
                    newPhrase.shift(i);
                }
                if (newPhrase[i].charAt(0).match(/[aeiou]/gi)) {

                    pigLatingCharacter.push(newPhrase[i] + "way");
                }
                else if (newPhrase[i].charAt(1).match(/[aeiou]/gi)) {

                    pigLatingCharacter.push(newPhrase[i].substring(1, newPhrase[i].length) + (newPhrase[i].charAt(0).toLowerCase() + "ay"));

                }
                else if (newPhrase[i].charAt(2).match(/[aeiou]/gi)) {

                    pigLatingCharacter.push(newPhrase[i].substring(2, newPhrase[i].length) + (newPhrase[i].substring(0, 2).toLowerCase() + "ay"));
                }
                else if (newPhrase[i].charAt(3).match(/[aeiou]/gi)) {

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