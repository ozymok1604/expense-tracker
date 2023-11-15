import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./layouts/Footer/Footer";
import { Home } from "./pages/Home";
import { ExpensesPage } from "./pages/Expenses";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<ExpensesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
