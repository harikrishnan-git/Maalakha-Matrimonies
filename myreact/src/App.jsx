import { useState } from "react";
import Topnav from "./Common/Topnav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Topnav />
    </>
  );
}

export default App;
