import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TrololoBoard from "./presentation/TrololoBoard";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TrololoBoard />
    </DndProvider>
  );
};

export default App;
