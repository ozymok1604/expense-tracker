import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ExpensesPage } from "./pages/Expenses";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/expense-tracker" element={<HomePage />} />
          <Route path="/expense-tracker/expenses" element={<ExpensesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
