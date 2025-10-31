//Leetcode Problem 57: Insert Interval
let intervals = [[1, 3], [6, 9]];
let newInterval = [2, 5];

var insert = function (intervals, newInterval) {
    let result = [];
    let n = intervals.length;
    let i = 0;
    while (i < n && intervals[i][1] < newInterval[0]) {

        result.push(intervals[i]);
        i++;
    }
    while (i < n && intervals[i][0] < newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], intervals[0])
        newInterval[1] = Math.max(intervals[i][1], intervals[1]);
        i++;
    }
    result.push(newInterval);
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }
    return result
};
console.log(insert(intervals, newInterval));