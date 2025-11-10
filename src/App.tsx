import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuideLayout from "./guide/GuideLayout";
import PublishingPage from "./pages/PublishingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 가이드 레이아웃 (사이드바 + 컨텐츠) */}
        <Route path="/guide/*" element={<GuideLayout />} />

        {/* 퍼블리싱 페이지 (사이드바 없는 독립 페이지) */}
        <Route path="/pub/:pageId" element={<PublishingPage />} />

        {/* 기본 경로 */}
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-slate-950">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  메인 페이지
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  React Template 프로젝트에 오신 것을 환영합니다
                </p>
                <a
                  href="/guide"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block"
                >
                  가이드 보러가기
                </a>
              </div>
            </div>
          }
        />

        {/* 404 페이지 */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-slate-950">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  404 - 페이지를 찾을 수 없습니다
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  요청하신 페이지가 존재하지 않습니다.
                </p>
                <a
                  href="/guide"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block"
                >
                  가이드로 돌아가기
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
