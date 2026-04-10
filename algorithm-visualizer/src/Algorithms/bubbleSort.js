export function getBubbleSortAnimations(array) {
  const arr = [...array];
  const animations = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      animations.push({
        type: "compare",
        indices: [j, j + 1],
      });

      if (arr[j] > arr[j + 1]) {
        animations.push({
          type: "swap",
          indices: [j, j + 1],
        });

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    animations.push({
      type: "markSorted",
      indices: [arr.length - 1 - i],
    });

    if (!swapped) break;
  }

  animations.push({
    type: "done",
    indices: [],
  });

  return animations;
}