var merge = function (nums1, m, nums2, n) {
    let i = m - 1;      // nums1 ke last valid element
    let j = n - 1;      // nums2 ke last element
    let k = m + n - 1;  // nums1 ke end position

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Agar nums2 ke elements bach gaye
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

};