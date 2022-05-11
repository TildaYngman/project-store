import {Routes, Route} from "react-router-dom";
import {Home, Staff, BadURL404} from "./pages"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />}  />
        <Route path="*" element={<BadURL404 />}  />
      </Routes>
    </div>
  );
}

export default App;
