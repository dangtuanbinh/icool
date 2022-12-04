import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import {
  AccountDetailPage,
  BridgePage,
  DaosDetailPage,
  SwapPage,
} from "./pages";
import { DaosPage } from "./pages/daos";
import { DefiPage } from "./pages/defi";
import { DefiDetailPage } from "./pages/defi-detail";

import { HomePage } from "./pages/home/home.page";
import { NftPage } from "./pages/nft";
import { ProfilePage } from "./pages/profile";
import "./style.scss";

function App() {
  return (
    <div className="app" style={{ position: "relative", margin: 0 }}>

      <div className="app-header">
        <Header />
      </div>
      <div className="app-body-container">
        <div className="app-sidebar">
          <Sidebar />
        </div>
        <div className="app-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/nft" element={<NftPage />} />
            <Route path="/defi" element={<DefiPage />} />
            <Route path="/daos" element={<DaosPage />} />
            <Route path="/swap" element={<SwapPage />} />
            <Route path="/bridge" element={<BridgePage />} />
            <Route path="/account/:id" element={<AccountDetailPage />} />
            <Route path="/defi/:id" element={<DefiDetailPage />} />
            <Route path="/daos/:id" element={<DaosDetailPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
