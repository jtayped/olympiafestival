import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers
import { Header } from "./containers";

// Pages
import { Proximament } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Proximament />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
