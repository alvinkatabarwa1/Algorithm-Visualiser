import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controls from "./Components/Controls";
import BarContainer from "./Components/BarContainer";
import InfoPanel from "./Components/InfoPanel";
import StatusPanel from "./Components/StatusPanel";
import BeginnerPanel from "./Components/BeginnerPanel";
import { getBubbleSortAnimations } from "./Algorithms/bubbleSort";
import { getSelectionSortAnimations } from "./Algorithms/selectionSort";
import { getInsertionSortAnimations } from "./Algorithms/insertionSort";
import { getMergeSortAnimations } from "./Algorithms/mergeSort";
import {
  ALGORITHM_CONFIG,
  ALGORITHM_OPTIONS,
} from "./Algorithms/algorithmConfig";

const ARRAY_SIZE = 25;
const MIN_VALUE = 20;
const MAX_VALUE = 300;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(size) {
  return Array.from({ length: size }, () => randomInt(MIN_VALUE, MAX_VALUE));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getPlaybackSettings(speed) {
  if (speed <= 20) return { delay: 90, batchSize: 1 };
  if (speed <= 40) return { delay: 45, batchSize: 1 };
  if (speed <= 60) return { delay: 20, batchSize: 2 };
  if (speed <= 75) return { delay: 8, batchSize: 4 };
  if (speed <= 90) return { delay: 0, batchSize: 8 };
  return { delay: 0, batchSize: 16 };
}

function getAnimationsForAlgorithm(algorithmKey, array) {
  switch (algorithmKey) {
    case "selection":
      return getSelectionSortAnimations(array);
    case "insertion":
      return getInsertionSortAnimations(array);
    case "merge":
      return getMergeSortAnimations(array);
    case "bubble":
    default:
      return getBubbleSortAnimations(array);
  }
}

export default function App() {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(85);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");
  const [activeBars, setActiveBars] = useState([]);
  const [sortedBars, setSortedBars] = useState([]);
  const [progressPercent, setProgressPercent] = useState(0);

  const stopRequestedRef = useRef(false);

  const currentAlgorithm = ALGORITHM_CONFIG[selectedAlgorithm];

  useEffect(() => {
    setArray(generateRandomArray(ARRAY_SIZE));
  }, []);

  const handleGenerateNewArray = () => {
    if (isSorting) return;
    setArray(generateRandomArray(ARRAY_SIZE));
    setActiveBars([]);
    setSortedBars([]);
    setProgressPercent(0);
  };

  const handleStopSorting = () => {
    stopRequestedRef.current = true;
  };

  const handleStartSort = async () => {
    if (isSorting) return;

    stopRequestedRef.current = false;
    setIsSorting(true);
    setSortedBars([]);
    setProgressPercent(0);

    const animations = getAnimationsForAlgorithm(selectedAlgorithm, array);
    const workingArray = [...array];
    const sortedTracker = [];
    let stepIndex = 0;

    while (stepIndex < animations.length) {
      if (stopRequestedRef.current) {
        setIsSorting(false);
        setActiveBars([]);
        return;
      }

      const { delay, batchSize } = getPlaybackSettings(speed);

      for (
        let batchCounter = 0;
        batchCounter < batchSize && stepIndex < animations.length;
        batchCounter++, stepIndex++
      ) {
        const step = animations[stepIndex];

        if (step.type === "swap") {
          const [i, j] = step.indices;
          [workingArray[i], workingArray[j]] = [workingArray[j], workingArray[i]];
        }

        if (step.type === "overwrite") {
          const [i] = step.indices;
          workingArray[i] = step.value;
        }

        if (step.type === "markSorted") {
          for (const idx of step.indices) {
            if (!sortedTracker.includes(idx)) {
              sortedTracker.push(idx);
            }
          }
        }

        if (step.type === "done") {
          setActiveBars([]);
          setSortedBars(workingArray.map((_, index) => index));
        }

        setActiveBars(step.indices || []);
      }

      const percent = Math.min(
        100,
        Math.round((stepIndex / animations.length) * 100)
      );

      setArray([...workingArray]);
      setSortedBars([...sortedTracker]);
      setProgressPercent(percent);

      if (delay > 0) {
        await sleep(delay);
      } else {
        await new Promise((resolve) => requestAnimationFrame(resolve));
      }
    }

    setProgressPercent(100);
    setIsSorting(false);
    setActiveBars([]);
  };

  return (
    <div className="app-shell">
      <div className="dashboard">
        <header className="hero">
          <h1>Algorithm Visualizer</h1>
          <p>Explore and visualize sorting algorithms step by step.</p>
        </header>

        <Controls
          onGenerate={handleGenerateNewArray}
          onStart={handleStartSort}
          onStop={handleStopSorting}
          isSorting={isSorting}
          speed={speed}
          setSpeed={setSpeed}
          selectedAlgorithm={selectedAlgorithm}
          setSelectedAlgorithm={setSelectedAlgorithm}
          algorithmOptions={ALGORITHM_OPTIONS}
        />

        <section className="top-panels-three">
          <StatusPanel
            isSorting={isSorting}
            progressPercent={progressPercent}
          />
          <InfoPanel algorithm={currentAlgorithm} />
          <BeginnerPanel algorithm={currentAlgorithm} />
        </section>

        <section className="visualizer-panel card">
          <div className="visualizer-header">
            <h2>{currentAlgorithm.name} Visualization</h2>
            <div className={`status-pill ${isSorting ? "running" : "idle"}`}>
              {isSorting ? "Sorting in progress" : "Idle"}
            </div>
          </div>

          <BarContainer
            array={array}
            activeBars={activeBars}
            sortedBars={sortedBars}
          />
        </section>
      </div>
    </div>
  );
}