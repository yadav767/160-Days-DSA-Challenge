//LeetCode:11

// APPROACH 1 : O(n^2)

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// function containsTheMostWater(height) {
//     let max = 0;
//     for (let i = 0; i < height.length; i++) {
//         let area = 0;
//         for (let j = i + 1; j < height.length; j++) {
//             if (height[i] < height[j]) {
//                 area = height[i] * (j - i);
//             } else {
//                 area = height[j] * (j - i);
//             }
//             max = Math.max(area, max);
//         }
//     }
//     return max;
// }
// console.log(containsTheMostWater(height));

// APPROACH 2: O(n)

function containsTheMostWater(height) {
    let left = 0, max = 0, area;
    let right = height.length - 1;

    while (left < right) {
        if (height[left] < height[right]) {
            area = height[left] * (right - left);
            left++;
        } else {
            area = height[right] * (right - left);
            right--;
        }
        max = Math.max(max, area)
    }

    return max;
}

console.log(containsTheMostWater(height));