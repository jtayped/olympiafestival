import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers
import { Header } from "./containers";

// Pages
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
