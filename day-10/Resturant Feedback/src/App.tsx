import { Route, Routes } from "react-router-dom";
import GiveFeedBack from "./pages/GiveFeedBack";
import FeedBack from "./pages/FeedBack";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GiveFeedBack />} />
        <Route path="/feedback" element={<FeedBack />} />
      </Routes>
    </div>
  );
}

export default App;
