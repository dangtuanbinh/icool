import { Routes, Route } from "react-router-dom";
import BottomBar from "./components/commons/BottomBar";

import Header from "./components/commons/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ position: "relative", margin: 0 }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/detail/:id" element={<Detail />} />
      </Routes>
      <BottomBar />
    </div>
  );
}

export default App;
