let s = "   fly me   to   the moon  ";

var lengthOfLastWord = function (s) {
    let arr = s.split(" ");
    let filtered = arr.filter(element => element.length > 0);
    let last = filtered[filtered.length - 1];

    return last.length;
}
console.log(lengthOfLastWord(s));
