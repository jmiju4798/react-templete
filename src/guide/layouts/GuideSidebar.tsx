import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { codingListData } from "../data/codingListData";

interface GuideSidebarProps {
  selectedCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
  selectedComponent?: string | null;
  onComponentChange?: (component: string | null) => void;
}

export default function GuideSidebar({
  selectedCategory,
  onCategoryChange,
  selectedComponent,
  onComponentChange,
}: GuideSidebarProps) {
  const location = useLocation();
  const [isCodingOpen, setIsCodingOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);

  // 코딩 리스트의 고유한 카테고리 추출
  const codingCategories = useMemo(() => {
    const categories = Array.from(
      new Set(codingListData.map((item) => item.category))
    );
    return categories.sort();
  }, []);

  // 컴포넌트 목록
  const components = useMemo(() => {
    return [
      { id: "Button", name: "Button" },
      { id: "Input", name: "Input" },
      { id: "Card", name: "Card" },
    ];
  }, []);

  // 현재 경로가 코딩 리스트 관련이면 자동으로 서브메뉴 열기
  useEffect(() => {
    if (location.pathname.includes("/guide/coding")) {
      setIsCodingOpen(true);
    }
    if (location.pathname.includes("/guide/components")) {
      setIsComponentsOpen(true);
    }
  }, [location.pathname]);

  const handleCodingClick = () => {
    setIsCodingOpen(!isCodingOpen);
  };

  const handleComponentsClick = () => {
    setIsComponentsOpen(!isComponentsOpen);
  };

  const handleCategoryClick = (category: string | null) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const handleComponentClick = (component: string | null) => {
    if (onComponentChange) {
      onComponentChange(component);
    }
  };

  const isCodingPage = location.pathname.includes("/guide/coding");
  const isComponentsGuidePage = location.pathname.includes("/guide/components");

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 h-screen overflow-y-auto sticky top-0">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          가이드
        </h2>
        <nav>
          <ul className="space-y-1">
            {/* 코딩 리스트 (서브메뉴 있음) */}
            <li>
              <div className="flex items-center">
                <NavLink
                  to="/guide/coding"
                  onClick={() => handleCategoryClick(null)}
                  className={({ isActive }) =>
                    `flex-1 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  코딩 리스트
                </NavLink>
              </div>

              {/* 카테고리 서브메뉴 - 코딩 리스트 페이지에 있을 때만 표시 */}
              {isCodingOpen && isCodingPage && (
                <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-slate-700 pl-2">
                  {/* 전체 */}
                  <li>
                    <button
                      onClick={() => handleCategoryClick(null)}
                      className={`w-full text-left block px-4 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === null
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      전체
                    </button>
                  </li>

                  {/* 카테고리별 */}
                  {codingCategories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className={`w-full text-left block px-4 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-medium"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* 컴포넌트 (서브메뉴 있음) */}
            <li>
              <div className="flex items-center">
                <NavLink
                  to="/guide/components"
                  onClick={() => handleComponentClick(null)}
                  className={({ isActive }) =>
                    `flex-1 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  컴포넌트 가이드
                </NavLink>
              </div>

              {/* 컴포넌트 서브메뉴 - 컴포넌트 페이지에 있을 때만 표시 */}
              {isComponentsOpen && isComponentsGuidePage && (
                <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-slate-700 pl-2">
                  {components.map((component) => (
                    <li key={component.id}>
                      <button
                        onClick={() => handleComponentClick(component.id)}
                        className={`w-full text-left block px-4 py-2 rounded-lg text-sm transition-colors ${
                          selectedComponent === component.id
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-medium"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        {component.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* 퍼블리싱 가이드 */}
            <li>
              <NavLink
                to="/guide/publishing"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`
                }
              >
                퍼블리싱 가이드
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
