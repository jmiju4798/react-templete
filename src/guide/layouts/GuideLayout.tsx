import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GuideHeader from "./GuideHeader";
import GuideSidebar from "./GuideSidebar";
import CodingListPage from "../pages/coding/CodingListPage";
import ComponentsGuidePage from "../pages/components/ComponentsGuidePage";

export default function GuideLayout() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleComponentChange = (component: string | null) => {
    setSelectedComponent(component);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <GuideHeader />
      <div className="flex min-h-screen">
        {/* 사이드바 */}
        <GuideSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedComponent={selectedComponent}
          onComponentChange={handleComponentChange}
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
            <Route
              path="/components"
              element={
                <ComponentsGuidePage selectedComponent={selectedComponent} />
              }
            />

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
    </div>
  );
}
