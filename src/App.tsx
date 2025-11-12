import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GuideLayout from "./guide/layouts/GuideLayout";
import DynamicPage from "./pub/DynamicPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 경로 - 코딩리스트로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/guide/coding" replace />} />

        {/* 가이드 레이아웃 (사이드바 + 컨텐츠) */}
        <Route path="/guide/*" element={<GuideLayout />} />

        {/* ============================================ */}
        {/* 동적 라우팅 - pub 폴더의 모든 화면 자동 처리  */}
        {/* 파일만 추가하면 자동으로 라우팅!              */}
        {/* ============================================ */}
        <Route path="/pub/*" element={<DynamicPage />} />

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
