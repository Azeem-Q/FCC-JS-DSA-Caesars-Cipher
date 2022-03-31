function rot13(str) {
    let start = "A".charCodeAt(0);
    let end = "Z".charCodeAt(0);
    let strArr = str.split('');
    let finalArr = [];
    for (let i of strArr) {
        if (i.charCodeAt(0) >= start && i.charCodeAt(0) <= end) {
            let char = i.charCodeAt(0) + 13;
            if (char > end) {
                char = char - end + start - 1;
                finalArr.push(String.fromCharCode(char));
            }   else {
                finalArr.push(String.fromCharCode(char));
            }
        }   else {
            finalArr.push(i);
        }
    }
    return finalArr.join('');
}-

console.log(rot13("SERR CVMMN!"));

