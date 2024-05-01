/**
 * Build two frequency counters. If any of the message characters are not
 *  found in the 'letters' characters, or if there are not enough of them,
 *  return false. Otherwise return true.
 */
function constructNote(message, letters) {
    const charFreq = {};

    // Build frequency counter of letters
    for (let char of letters) {
        charFreq[char] = ++charFreq[char] || 1;
    }

    // Decrement frequency counter while iterating through message
    for (let char of message) {
        if (!charFreq[char]) {
            return false; // If char not found or frequency becomes 0, return false
        }
        charFreq[char]--;
    }

    return true; // If all characters in message are found and frequency conditions are met, return true
}
