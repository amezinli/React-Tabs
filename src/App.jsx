import React, { useState } from "react";

const Tab1 = () => <div>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</div>;
const Tab2 = () => <div>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</div>;
const Tab3 = () => <div>You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge.</div>;

const App = () => {
  const savedTab = localStorage.getItem("activeTab");
  const [activeTab, setActiveTab] = useState(savedTab ? parseInt(savedTab) : 1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    localStorage.setItem("activeTab", tabIndex);
  };

  return (
    <div className="app">
      <div>
        <h1>Tabs Components with React</h1>
      </div>
      <div className="tabs">
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? "active" : ""}
        >
          Tab1
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? "active" : ""}
        >
          Tab2
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={activeTab === 3 ? "active" : ""}
        >
          Tab3
        </button>
      </div>
      <div className="content">
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
      </div>
    </div>
  );
};

export default App;
