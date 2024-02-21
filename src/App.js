import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Comments from "./components/comments";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="comments" element={<Comments />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
