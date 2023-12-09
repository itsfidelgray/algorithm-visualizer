import { useRef, useState, useEffect } from "react";
import "./SortingVisualizer.css";
import { mergeSort, bubbleSort } from "../../SortingAlgorithms";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const containerRef = useRef(null);

  const resetArray = () => {
    const newArray = [];

    for (let i = 0; i < 20; i++) {
      newArray.push(randomIntFromInterval(5, 1000));
    }
    setArray(newArray);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const animateMergeSort = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = mergeSort(array);
    for (let i in animations) {
      const [barOneIdx, barTwoIdx, newHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      setTimeout(() => {
        barTwoStyle.height = `${newHeight * 0.45}px`;
        barOneStyle.height = `${newHeight * 0.45}px`;
      }, i * 1);
    }

  
  };

  const animateBubbleSort = () => {
    const arrayBars = document.getElementsByClassName("array-bar");

    const animations = bubbleSort(array);
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, newHeightOne, newHeightTwo] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      setTimeout(() => {
        barOneStyle.height = `${newHeightOne * 0.45}px`;
        barTwoStyle.height = `${newHeightTwo * 0.45}px`;
      }, i * 10);
    }

  };
  const max = Math.max(...array) + 100;

  const renderYAxis = () => {
    const yAxis = [];
    for (let i = 0; i <= max; i += 100) {
      yAxis.push(<div className="y-axis-label">{i}</div>);
    }
    return yAxis;
  };

  return (
    <>
      <div className="visualizerContainer" ref={containerRef}>
        <div className="y-axis" style={{ height: `${max * 0.45}px` }}>
          {renderYAxis()}
        </div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value * 0.45}px` }}
          />
        ))}
      </div>
      <button onClick={resetArray}>Generate New Array</button>

      <div className="btnContainer">
        <button>Selection Sort</button>
        <button onClick={animateBubbleSort}>Bubble Sort</button>
        <button>Insertion Sort</button>
        <button onClick={animateMergeSort}>Merge Sort</button>
        <button>Quick Sort</button>
      </div>
    </>
  );
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
