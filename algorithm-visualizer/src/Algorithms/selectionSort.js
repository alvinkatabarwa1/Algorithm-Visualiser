export function getSelectionSortAnimations(array) {
  const arr = [...array];
  const animations = [];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      animations.push({
        type: "compare",
        indices: [minIndex, j],
      });

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      animations.push({
        type: "swap",
        indices: [i, minIndex],
      });

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    animations.push({
      type: "markSorted",
      indices: [i],
    });
  }

  animations.push({
    type: "done",
    indices: [],
  });

  return animations;
}