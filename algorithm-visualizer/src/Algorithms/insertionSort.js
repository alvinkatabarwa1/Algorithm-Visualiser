export function getInsertionSortAnimations(array) {
  const arr = [...array];
  const animations = [];

  if (arr.length > 0) {
    animations.push({
      type: "markSorted",
      indices: [0],
    });
  }

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0) {
      animations.push({
        type: "compare",
        indices: [j - 1, j],
      });

      if (arr[j - 1] > arr[j]) {
        animations.push({
          type: "swap",
          indices: [j - 1, j],
        });

        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        j--;
      } else {
        break;
      }
    }

    animations.push({
      type: "markSorted",
      indices: Array.from({ length: i + 1 }, (_, index) => index),
    });
  }

  animations.push({
    type: "done",
    indices: [],
  });

  return animations;
}