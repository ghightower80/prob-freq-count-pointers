function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;

    while (str1Idx < str1.length && str2Idx < str2.length) {
        if (str2[str2Idx] === str1[str1Idx]) {
            str1Idx++;
        }
        str2Idx++;
    }

    return str1Idx === str1.length;
}