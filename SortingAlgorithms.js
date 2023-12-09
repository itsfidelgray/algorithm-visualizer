const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let animations = [];
  const auxiliaryArray = arr.slice();
  mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray, animations);
  return animations;
};

const mergeSortHelper = (
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) => {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};

const doMerge = (
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, i, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, j, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIdx) {
    animations.push([k, i, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIdx) {
    animations.push([k, j, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
};

const bubbleSort = (arr) => {
    let animations = [];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            // Push comparison animation
            animations.push([i, i + 1]);
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                // Push swap animation
                animations.push([i, i + 1, arr[i], arr[i + 1]]);
            }
        }
    } while (swapped);
    return animations;
};
export { mergeSort, bubbleSort };
