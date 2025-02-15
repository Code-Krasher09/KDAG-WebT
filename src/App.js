import React, { useState } from "react";
import "./App.css";
import ForumPage from "./ForumPage";
import Header from "./Header";

function App() {
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App" style={{ paddingTop: "0px" }}>
      <Header
        setLoggedInUsername={setLoggedInUsername}
        setSearchQuery={setSearchQuery}
      />
      <ForumPage
        loggedInUsername={loggedInUsername}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
