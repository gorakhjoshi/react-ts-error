import React from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./Buggy";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
  );
};

export default App;
