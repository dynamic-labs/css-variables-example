import Home from "./Home";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <DynamicContextProvider
        settings={{
          environmentId: "e5471b21-a15a-4a06-a71c-f7d02b7b24bf",
        }}
      >
        <Home />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
