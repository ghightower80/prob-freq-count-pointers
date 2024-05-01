function longestFall(nums) {
    let counter = 1;
    let maxCounter = 1; // Initialize maxCounter with 1 for the default case

    for (let i = 1; i < nums.length; i++) {
        // If current number is smaller than the previous number
        if (nums[i] < nums[i - 1]) {
            counter++;
        } else {
            maxCounter = Math.max(counter, maxCounter); // Update maxCounter if necessary
            counter = 1; // Reset counter
        }
    }

    return Math.max(counter, maxCounter); // Return the maximum of counter and maxCounter
}