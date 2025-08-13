import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import { lazy } from "react";
import { DEV_MODE_PATCH, HR_MODE_PATCH } from "./shared/constants";
import ProfileSidebar from "./shared/ui/ProfileSidebar/index.tsx";

const HrMode = lazy(() => import("./pages/HrMode/index.tsx"));
const DevMode = lazy(() => import("./pages/DevMode/index.tsx"));

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to={HR_MODE_PATCH} replace />} />
          <Route path={HR_MODE_PATCH} element={<HrMode />} />
          <Route path={DEV_MODE_PATCH} element={<DevMode />} />
        </Routes>

        <ProfileSidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
