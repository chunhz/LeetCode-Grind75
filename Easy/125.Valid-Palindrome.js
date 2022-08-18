/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9+]/gi, "").toLowerCase();
    let half = s.length/2
    console.log(s)
    if(s.length === 1) return true
    for( let i = 0 ; i < half; i++){
        if(s[i] !== s[s.length-1-i])
        return false;
    }
    return true
};

s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))