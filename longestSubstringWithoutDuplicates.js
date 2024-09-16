function lengthOfLongestSubstring(s) {
    let longest = 0;
    let currentWindow = [];
    let sLen = s.length;

    if(sLen < 2) {
        return sLen;
    }

    for(let i = 0; i < sLen; i++) {
        let curEl = currentWindow.indexOf(s[i])
        if(curEl > -1) {
            longest = Math.max(currentWindow.length, longest);
            currentWindow.splice(0, curEl + 1);
        }
        currentWindow.push(s[i]);
    }
    
    longest = Math.max(currentWindow.length, longest);
    return longest;
}

console.log(lengthOfLongestSubstring('zxyzxyz')); // 3
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('xxxx')); // 1
console.log(lengthOfLongestSubstring('au')); // 2
console.log(lengthOfLongestSubstring('dvdf')); // 3