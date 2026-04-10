export const ALGORITHM_CONFIG = {
  bubble: {
    key: "bubble",
    name: "Bubble Sort",

    advancedDescription:
      "Bubble Sort repeatedly scans the array, compares adjacent elements, and swaps them when they are out of order. With each pass, the largest unsorted element 'bubbles' toward the end of the array. It is stable and simple to implement, but inefficient for large datasets because of its quadratic time complexity in the average and worst cases.",

    simpleExplanation:
      "Bubble Sort checks two neighboring bars at a time. If the left one is bigger than the right one, it swaps them. It keeps doing this over and over, so the biggest values slowly move to the end until everything is sorted.",

    bestCase: "O(n)",
    averageCase: "O(n²)",
    worstCase: "O(n²)",
    stable: "Yes",
  },

  selection: {
    key: "selection",
    name: "Selection Sort",

    advancedDescription:
      "Selection Sort divides the array into a sorted and unsorted region. On each iteration, it finds the minimum element in the unsorted region and swaps it into the next correct position in the sorted region. Its time complexity remains quadratic even in the best case because it always performs the same number of comparisons, and it is not stable in its standard form.",

    simpleExplanation:
      "Selection Sort looks through the unsorted bars to find the smallest one. Once it finds that smallest bar, it moves it to the front. Then it repeats the process for the rest until all the bars are in order.",

    bestCase: "O(n²)",
    averageCase: "O(n²)",
    worstCase: "O(n²)",
    stable: "No",
  },

  insertion: {
    key: "insertion",
    name: "Insertion Sort",

    advancedDescription:
      "Insertion Sort builds a sorted prefix of the array one element at a time. For each new element, it shifts larger elements in the sorted portion to the right until the correct insertion point is found. It is stable, adaptive, and performs efficiently on nearly sorted data, achieving linear time in the best case but quadratic time in the average and worst cases.",

    simpleExplanation:
      "Insertion Sort starts from the left and treats that part as already sorted. It takes the next bar and moves it left until it reaches the right spot. It keeps doing that, so the sorted section grows one bar at a time.",

    bestCase: "O(n)",
    averageCase: "O(n²)",
    worstCase: "O(n²)",
    stable: "Yes",
  },

  merge: {
    key: "merge",
    name: "Merge Sort",

    advancedDescription:
      "Merge Sort uses a divide-and-conquer strategy. It recursively divides the array into smaller subarrays until they are trivially sorted, then merges those subarrays back together in sorted order. Because the merge step processes each element in linear time per level of recursion, the algorithm runs in O(n log n) time in all cases. It is stable but requires additional auxiliary space.",

    simpleExplanation:
      "Merge Sort keeps breaking the bars into smaller groups until each group is very small. Then it puts the groups back together in the right order. Instead of swapping nearby bars, it rebuilds the list step by step until everything is sorted.",

    bestCase: "O(n log n)",
    averageCase: "O(n log n)",
    worstCase: "O(n log n)",
    stable: "Yes",
  },
};

export const ALGORITHM_OPTIONS = [
  { value: "bubble", label: "Bubble Sort" },
  { value: "selection", label: "Selection Sort" },
  { value: "insertion", label: "Insertion Sort" },
  { value: "merge", label: "Merge Sort" },
];