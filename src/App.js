import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Proximament_Pagina } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Proximament_Pagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
