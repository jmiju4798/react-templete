import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GuideSidebar from "./layouts/GuideSidebar";
import CodingListPage from "./pages/coding/CodingListPage";
import ComponentsListPage from "./pages/components/ComponentsListPage";

export default function GuideLayout() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex min-h-screen">
      {/* 사이드바 */}
      <GuideSidebar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* 메인 컨텐츠 */}
      <main className="flex-1 p-8 bg-gray-50 dark:bg-slate-950">
        <Routes>
          {/* 코딩 리스트 */}
          <Route
            path="/coding"
            element={<CodingListPage selectedCategory={selectedCategory} />}
          />

          {/* 컴포넌트 */}
          <Route path="/components" element={<ComponentsListPage />} />

          {/* 퍼블리싱 가이드 */}
          <Route
            path="/publishing"
            element={
              <div className="text-center py-20">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  퍼블리싱 가이드
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  퍼블리싱 가이드 페이지
                </p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
