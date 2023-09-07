import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers
import { Header, Footer } from "./containers";

// Pages
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
