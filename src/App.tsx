import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Guide
import GuideLayout from "./guide/layouts/GuideLayout";
import CodingListPage from "./guide/pages/coding/CodingListPage";
import ComponentsPage from "./guide/pages/components/ComponentsPage";
import PublishingGuidePage from "./guide/pages/publishing/PublishingGuidePage";

// Pub
import PubLayout from "./pub/layouts/PubLayout";
import MainPage from "./pub/pages/main/MainPage";
import LoginPage from "./pub/pages/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 가이드 영역 */}
        <Route path="/" element={<GuideLayout />}>
          <Route index element={<Navigate to="/coding" replace />} />

          {/* 가이드 페이지 */}
          <Route path="coding" element={<CodingListPage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="publishing" element={<PublishingGuidePage />} />
        </Route>

        {/* 퍼블 작업 페이지 */}
        <Route path="/pub" element={<PubLayout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
