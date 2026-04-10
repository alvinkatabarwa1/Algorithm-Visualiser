export function getMergeSortAnimations(array) {
  const arr = [...array];
  const animations = [];
  const auxiliaryArray = [...arr];

  mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray, animations);

  animations.push({
    type: "done",
    indices: [],
  });

  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) return;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);

  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    animations.push({
      type: "compare",
      indices: [i, j],
    });

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push({
        type: "overwrite",
        indices: [k],
        value: auxiliaryArray[i],
      });

      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push({
        type: "overwrite",
        indices: [k],
        value: auxiliaryArray[j],
      });

      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIdx) {
    animations.push({
      type: "compare",
      indices: [i, i],
    });

    animations.push({
      type: "overwrite",
      indices: [k],
      value: auxiliaryArray[i],
    });

    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIdx) {
    animations.push({
      type: "compare",
      indices: [j, j],
    });

    animations.push({
      type: "overwrite",
      indices: [k],
      value: auxiliaryArray[j],
    });

    mainArray[k++] = auxiliaryArray[j++];
  }

  animations.push({
    type: "markSorted",
    indices: Array.from(
      { length: endIdx - startIdx + 1 },
      (_, index) => startIdx + index
    ),
  });
}