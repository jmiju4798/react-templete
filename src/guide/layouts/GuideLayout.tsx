import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GuideHeader from "./GuideHeader";
import GuideSidebar from "./GuideSidebar";
import CodingListPage from "../pages/coding/CodingListPage";
import ComponentsPage from "../pages/components/ComponentsPage";
import PublishingGuidePage from "../pages/publishing/PublishingGuidePage";

export default function GuideLayout() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const [selectedPublishingTab, setSelectedPublishingTab] = useState<string | null>(
    null
  );

  // 경로가 변경될 때 선택 초기화
  useEffect(() => {
    if (location.pathname === "/guide/components") {
      setSelectedComponent(null);
    }
    if (location.pathname === "/guide/publishing") {
      // 퍼블리싱 가이드 처음 진입 시 기본적으로 'structure' 표시
      setSelectedPublishingTab('structure');
    }
  }, [location.pathname]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleComponentChange = (component: string | null) => {
    setSelectedComponent(component);
  };

  const handlePublishingTabChange = (tab: string | null) => {
    setSelectedPublishingTab(tab);
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
          selectedPublishingTab={selectedPublishingTab}
          onPublishingTabChange={handlePublishingTabChange}
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
                <ComponentsPage selectedComponent={selectedComponent} />
              }
            />

            {/* 퍼블리싱 가이드 */}
            <Route
              path="/publishing"
              element={
                <PublishingGuidePage 
                  selectedTab={selectedPublishingTab}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}
