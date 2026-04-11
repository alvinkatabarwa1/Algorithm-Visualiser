# Algorithm Visualizer

A modern, interactive web application for visualizing fundamental computer science algorithms in real time. Designed to make complex concepts intuitive through animation, structured explanations, and user-driven interaction.

---

## Overview

Algorithm Visualizer is a dynamic learning tool that transforms abstract algorithmic concepts into visual, step-by-step processes. It supports multiple categories of algorithms, allowing users to explore both how algorithms work and why they behave the way they do.

The application is built with a strong focus on clarity, interactivity, educational value, and clean user interface design.

---

## Features

### Multi-Category System

* Sorting Algorithms
* Searching Algorithms
* Scalable architecture for future categories such as Pathfinding and Graph Algorithms

---

### Sorting Algorithms

* Bubble Sort
* Selection Sort
* Insertion Sort
* Merge Sort

Visual Features:

* Real-time bar swapping animations
* Sorted state highlighting
* Adjustable speed control

---

### Searching Algorithms

* Linear Search
* Binary Search

Visual Features:

* Target-based searching
* Active comparison highlighting
* Found element indication
* Boundary visualization for Binary Search

---

### Interactive Controls

* Generate random datasets
* Adjust animation speed
* Select algorithm category
* Select algorithm type
* Input custom target values for searching

---

### Dual-Layer Learning System

Each algorithm includes:

Simple Explanation:

* Beginner-friendly description
* Focus on intuition and understanding

Advanced Explanation:

* Software-engineer level detail
* Time complexity analysis
* Deeper explanation of behavior and efficiency

---

### Real-Time Feedback

* Progress percentage tracking
* Live algorithm state updates
* Visual distinction between:

  * Active elements
  * Sorted elements
  * Found targets
  * Search boundaries

---

## Tech Stack

* Frontend: React (Vite)
* Styling: Custom CSS (Glassmorphism-inspired UI)
* State Management: React Hooks
* Architecture: Modular, component-based design

---

## Design Philosophy

The interface is designed to prioritize:

* Minimal cognitive load
* Clear visual hierarchy
* Smooth, meaningful animations
* Readability and usability

The goal is not just to display algorithms, but to teach them effectively.

---

## Algorithm Complexity Reference

| Algorithm      | Best Case  | Average Case | Worst Case |
| -------------- | ---------- | ------------ | ---------- |
| Bubble Sort    | O(n)       | O(n²)        | O(n²)      |
| Selection Sort | O(n²)      | O(n²)        | O(n²)      |
| Insertion Sort | O(n)       | O(n²)        | O(n²)      |
| Merge Sort     | O(n log n) | O(n log n)   | O(n log n) |
| Linear Search  | O(1)       | O(n)         | O(n)       |
| Binary Search  | O(1)       | O(log n)     | O(log n)   |

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/alvinkatabarwa1/Algorithm-Visualiser.git
cd Algorithm-Visualiser
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Open in browser

http://localhost:5173

---

## Project Structure

```plaintext
src/
│
├── Components/
│   ├── Controls.jsx
│   ├── BarContainer.jsx
│   ├── InfoPanel.jsx
│   ├── BeginnerPanel.jsx
│   └── StatusPanel.jsx
│
├── Algorithms/
│   ├── bubbleSort.js
│   ├── selectionSort.js
│   ├── insertionSort.js
│   ├── mergeSort.js
│   ├── linearSearch.js
│   ├── binarySearch.js
│   └── algorithmConfig.js
│
├── App.jsx
└── App.css
```

---

## Future Improvements

* Quick Sort and Heap Sort
* Pathfinding Algorithms such as BFS, DFS, Dijkstra, and A*
* Graph visualizations
* Dynamic programming demonstrations
* Step-by-step explanation playback mode
* Algorithm performance comparison mode

---

## Key Learning Outcomes

This project demonstrates:

* Strong understanding of core algorithms
* Frontend state management and UI synchronization
* Scalable and modular architecture design
* Ability to translate complex logic into intuitive visuals
* Designing for both beginner and advanced users

---

## Author

Alvin Shaka Katabarwa
Software Engineer

---

## License

This project is open-source and available under the MIT License.

---

## Final Note

This project is designed as a learning system that bridges the gap between theoretical understanding and practical intuition in computer science.

If you find it useful, consider starring the repository.
