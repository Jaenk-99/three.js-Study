import {Routes, Route} from "react-router-dom"
import One from "./pages/one";
import Zero from "./pages/zero";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Zero />} />
        <Route path="/1" element={<One />} />
      </Routes>
    </>
  );
}

export default App;
