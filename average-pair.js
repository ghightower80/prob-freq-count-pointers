function averagePair(arr, num) {
    let start = 0; // Left pointer
    let end = arr.length - 1; // Right pointer

    while (start < end) {
        let avg = (arr[start] + arr[end]); // Calculate sum instead of average
        if (avg === num * 2) { // Compare sum with double the target num
            return true;
        } else if (avg < num * 2) { // If sum is less than double the target num
            start++; // Move left pointer to increase the sum
        } else {
            end--; // If sum is greater than double the target num, move right pointer to decrease the sum
        }
    }
    return false;
}