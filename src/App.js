import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import { createPortal } from "react-dom";

function App() {
  return (
    <>
      <CharacterEditor />
      <Footer />
      {createPortal(<div className="bottomBar" />, document.body)}
    </>
  );
}

export default App;
