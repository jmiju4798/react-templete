import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { codingListData } from "../data/codingListData";

interface GuideSidebarProps {
  selectedCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
  selectedComponent?: string | null;
  onComponentChange?: (component: string | null) => void;
  selectedPublishingTab?: string | null;
  onPublishingTabChange?: (tab: string | null) => void;
}

export default function GuideSidebar({
  selectedCategory,
  onCategoryChange,
  selectedComponent,
  onComponentChange,
  selectedPublishingTab,
  onPublishingTabChange,
}: GuideSidebarProps) {
  const location = useLocation();
  const [isCodingOpen, setIsCodingOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isPublishingOpen, setIsPublishingOpen] = useState(false);

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
      { id: "Accordion", name: "Accordion" },
      { id: "Badge", name: "Badge" },
      { id: "Breadcrumb", name: "Breadcrumb" },
      { id: "Button", name: "Button" },
      { id: "Calendar", name: "Calendar" },
      { id: "Card", name: "Card" },
      { id: "Checkbox", name: "Checkbox" },
      { id: "Dialog", name: "Dialog" },
      { id: "Form", name: "Form" },
      { id: "Icon", name: "Icon" },
      { id: "Input", name: "Input" },
      { id: "Label", name: "Label" },
      { id: "Pagination", name: "Pagination" },
      { id: "Radio", name: "Radio" },
      { id: "Scrollarea", name: "Scrollarea" },
      { id: "Select", name: "Select" },
      { id: "Switch", name: "Switch" },
      { id: "Table", name: "Table" },
      { id: "Tabs", name: "Tabs" },
      { id: "Textarea", name: "Textarea" },
    ];
  }, []);

  // 현재 경로가 각 가이드 관련이면 자동으로 서브메뉴 열기
  useEffect(() => {
    if (location.pathname.includes("/guide/coding")) {
      setIsCodingOpen(true);
    }
    if (location.pathname.includes("/guide/components")) {
      setIsComponentsOpen(true);
    }
    if (location.pathname.includes("/guide/publishing")) {
      setIsPublishingOpen(true);
    }
  }, [location.pathname]);

  const handleCodingClick = () => {
    setIsCodingOpen(!isCodingOpen);
  };

  const handleComponentsClick = () => {
    setIsComponentsOpen(!isComponentsOpen);
  };

  const handlePublishingClick = () => {
    setIsPublishingOpen(!isPublishingOpen);
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

  const handlePublishingTabClick = (tab: string | null) => {
    if (onPublishingTabChange) {
      // tab이 null이면 'structure'로 설정 (기본 표시)
      onPublishingTabChange(tab === null ? "structure" : tab);
    }
  };

  const isCodingPage = location.pathname.includes("/guide/coding");
  const isComponentsPage = location.pathname.includes("/guide/components");
  const isPublishingPage = location.pathname.includes("/guide/publishing");

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 sticky top-0">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 px-2">
          가이드
        </h2>
        <nav>
          <ul className="space-y-2 h-[85vh] overflow-y-auto pr-2">
            {/* 코딩 리스트 (서브메뉴 있음) */}
            <li>
              <NavLink
                to="/guide/coding"
                onClick={() => handleCategoryClick(null)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`
                }
              >
                코딩 리스트
              </NavLink>

              {/* 카테고리 서브메뉴 - 코딩 리스트 페이지에 있을 때만 표시 */}
              {isCodingOpen && isCodingPage && (
                <ul className="mt-2 ml-6 space-y-1 border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                  {/* 전체 */}
                  <li>
                    <button
                      onClick={() => handleCategoryClick(null)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        selectedCategory === null
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 -ml-[2px] pl-[10px]"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-gray-200"
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
                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 -ml-[2px] pl-[10px]"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-gray-200"
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
              <NavLink
                to="/guide/components"
                onClick={() => handleComponentClick(null)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`
                }
              >
                컴포넌트 가이드
              </NavLink>

              {/* 컴포넌트 서브메뉴 - 컴포넌트 페이지에 있을 때만 표시 */}
              {isComponentsOpen && isComponentsPage && (
                <ul className="mt-2 ml-6 space-y-1 border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                  {components.map((component) => (
                    <li key={component.id}>
                      <button
                        onClick={() => handleComponentClick(component.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                          selectedComponent === component.id
                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 -ml-[2px] pl-[10px]"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-gray-200"
                        }`}
                      >
                        {component.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* 퍼블리싱 가이드 (서브메뉴 있음) */}
            <li>
              <NavLink
                to="/guide/publishing"
                onClick={() => handlePublishingTabClick(null)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`
                }
              >
                퍼블리싱 가이드
              </NavLink>

              {/* 퍼블리싱 서브메뉴 - 퍼블리싱 페이지에 있을 때만 표시 */}
              {isPublishingOpen && isPublishingPage && (
                <ul className="mt-2 ml-6 space-y-1 border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                  <li>
                    <button
                      onClick={() => handlePublishingTabClick("structure")}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        selectedPublishingTab === "structure"
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 -ml-[2px] pl-[10px]"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-gray-200"
                      }`}
                    >
                      퍼블리싱 파일 구조
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handlePublishingTabClick("accessibility")}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        selectedPublishingTab === "accessibility"
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 -ml-[2px] pl-[10px]"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-gray-200"
                      }`}
                    >
                      접근성 가이드
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
