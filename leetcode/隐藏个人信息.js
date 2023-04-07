const country = ["", "+*-", "+**-", "+***-"];

var maskPII = function(s) {
    const at = s.indexOf("@");
    if (at > 0) {
        s = s.toLowerCase();
        return (s[0] + "*****" + s.substring(at - 1)).toLowerCase();
    }
    let sb = "";
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if ('0' <= c && c <= '9') {
            sb += c;
        }
    }
    s = sb.toString();
    return country[s.length - 10] + "***-***-" + s.substring(s.length - 4);
};
const a = "LeetCode@LeetCode.com"
const s = "86-(10)12345678"
console.log(maskPII(s))