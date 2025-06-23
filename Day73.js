
let s = '{[()]}';
var isValid = function (s) {

    let st = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (char === '(' || char === '{' || char === '[') {
            st.push(char);
        } else {
            if (st.length === 0) return false;

            let top = st[st.length - 1];
            if (
                (char === ')' && top === '(') ||
                (char === '}' && top === '{') ||
                (char === ']' && top === '[')
            ) {
                st.pop();
            } else {
                return false;
            }
        }
    }
    return st.length === 0;
}
console.log(isValid(s));