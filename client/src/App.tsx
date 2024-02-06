import { BrowserRouter, Route, Routes } from "react-router-dom";
import VACalculator from "./pages/VACalculatorPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VACalculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;