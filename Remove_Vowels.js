function removeVowels(str) {
    if (!str && str == "") {
        return '';
    }
    let result = "", char = str.charAt(0);
    if (str.length > 0 && !(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' )) {
        result += char;
    }
    result += removeVowels(str.substring(1));
    return result;
 }
 
 console.log(removeVowels('horse'));
 console.log(removeVowels('robot'));
 console.log(removeVowels(''));
 console.log(removeVowels('bcd'));