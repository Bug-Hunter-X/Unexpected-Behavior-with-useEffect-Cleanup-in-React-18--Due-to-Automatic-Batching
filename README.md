# Unexpected Behavior with useEffect Cleanup in React 18+ Due to Automatic Batching

This repository demonstrates a subtle bug that can occur in React 18 and later versions due to the introduction of automatic batching of state updates.  The `useEffect` cleanup function might not execute as expected if the component unmounts before the batching is completed. 

## Bug Description:

The provided `bug.js` file contains a simple React component that uses `useEffect` with a cleanup function.  While this component seems straightforward, under certain circumstances (related to how React batches updates) the cleanup function is skipped and the 'Unmounted' message is not logged to the console.

## Solution

The `bugSolution.js` demonstrates a solution using `useLayoutEffect` which runs synchronously before DOM painting and renders, thus guaranteeing cleanup before unmount.