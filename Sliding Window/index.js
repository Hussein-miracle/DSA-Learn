// * EASY

// function maxSubarraySum(arr, num) {
//     if ( num > arr.length){
//         return null;
//     }

//     let max = -Infinity;

//     for (let i = 0; i < arr.length - num + 1; i ++){
//         temp = 0;

//         for (let j = 0; j < num; j++){
//             temp += arr[i + j];
//         }

//         if (temp > max) {
//             max = temp;
//         }

//         // console.log(temp,max)
//     }
//     return max; 
// }

// const slidingWindowMaxSubarraySum = (arr,num) => {
//     if(arr.length < num) return 0;
//     const len = arr.length - num + 1;
//     let max = Number.MIN_SAFE_INTEGER;
//     console.log(max , 'initial')
//     for(let i = 0; i < len ;i++){
//         let sum = 0;
//         for(let j = i; j < i + num ; j++){
//             sum += arr[j];
//         }

//         max = Math.max(sum,max);
//         console.log(max,`: is max after ${i+1} time`)
//     }

//     return max;
// }




// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));
// console.log(slidingWindowMaxSubarraySum([2,6,9,2,1,8,5,6,3],3));







// function maxSubarraySum2(arr, num){
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < num) return null;

//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }

//     tempSum = maxSum;
//     for (let i = num; i < arr.length; i++) {

//         tempSum = tempSum - arr[i - num] + arr[i];

//         maxSum = Math.max(maxSum, tempSum); 
//     }


//     return maxSum;
// }

// console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3));
// console.log(slidingWindowMaxSubarraySum([2,6,9,2,1,8,5,6,3],3));

function maxSubarraySum3(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    let windowStart = 0;


    if (arr.length < num) return null;


    for (let i = 0; i < arr.length; i++) {
        tempSum += arr[i];
        // console.log(arr[i])
        // console.log(maxSum, tempSum);
        if (i >= num - 1) {
            maxSum = Math.max(tempSum, maxSum);
            tempSum -= arr[windowStart];
            windowStart++;
        }

    }


    return maxSum;
}

// console.log(maxSubarraySum3([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// console.log(slidingWindowMaxSubarraySum( [2,6,9,2,1,8,5,6,3] , 3 ));


const slidingWindow = (k, arr) => {
    const result = [];
    const len = arr.length - k + 1;

    for (let i = 0; i < len; i++) {
        console.log(arr[i])
        let sum = 0;

        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }

        result.push(sum / k);
    }


    return result;

}


// console.log(slidingWindow(5,[1,3,2,6,-1,4,1,8,2]))


const slidingWindowImproved = (k, arr) => {
    const len = arr.length;
    const result = [];
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < len; windowEnd++) {
        windowSum += arr[windowEnd]; //aad next element

        // slide the window ,we don't need to slide if we've not hit the require window size of k

        if (windowEnd >= k - 1) {
            result[windowStart] = windowSum / k; // calc d avg
            windowSum -= arr[windowStart]; // substract the element going out
            windowStart++; // slide the window ahead
        }
    }


    return result;
}



const smallest_subarray_with_given_sum = (s, arr) => {
    let windowStart = 0;
    let windowSum = 0;
    let len = arr.length;
    let minLength = Infinity;

    for(let windowEnd = 0; windowEnd < len;windowEnd++){
        windowSum += arr[windowEnd];

        // let iter = 1;
        while(windowSum >= s){
            const windowLen = windowEnd - windowStart + 1;
            // console.log(windowLen , 'windowLen',`for iteration ${iter}`)
            minLength = Math.min(minLength,windowLen);
            // console.log(minLength , 'minLength',`for iteration ${iter}`);
            windowSum -= arr[windowStart];

            windowStart++;
            // iter++;
        }
    }

    // console.log(windowSum)

    if(minLength === Number.MAX_SAFE_INTEGER){
        return 0;
    }

    return minLength;
}

// console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])) //2
// console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])) //1
// console.log(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])) //3


// ! Given a string, find the length of the longest substring in it with no more than K distinct characters.


const lengthOfLongestSubstringSlidingWindow = (s,k) => {
    const len = s.length;
    let windowStart = 0;
    const hash = {};
    let maxLength  = -Infinity;


    for(let windowEnd = 0; windowEnd < len ;windowEnd++){
        const char = s[windowEnd];
        if(!hash[char]){
            hash[char] = 0;
        }

        hash[char] +=1;

        // console.log(hash)

        const keysLen = Object.keys(hash).length;
        // console.log(keysLen);

        while( Object.keys(hash).length > k){
            const leftChar = s[windowStart];
            hash[leftChar] -= 1;
            if(hash[leftChar] === 0){
                delete hash[leftChar];
            }

            windowStart++;
        }
        const diff = windowEnd - windowStart+1;
        maxLength = Math.max(maxLength,diff);

    }

    return maxLength;
}


console.log(lengthOfLongestSubstringSlidingWindow('araaci',2)); //4
// console.log(lengthOfLongestSubstringSlidingWindow('araaci',1)); //2
// console.log(lengthOfLongestSubstringSlidingWindow("cbbebi" ,3));//5
