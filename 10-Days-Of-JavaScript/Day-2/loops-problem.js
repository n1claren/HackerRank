/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = []; // a, e, i, o, and u
    let consonants = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            vowels.push(s[i]);
        } else {
            consonants.push(s[i]);
        }
    }
    
    let vowelsPrint = vowels.join('\n');
    let consonantsPrint = consonants.join('\n');
    
    console.log(vowelsPrint);
    console.log(consonantsPrint);
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}