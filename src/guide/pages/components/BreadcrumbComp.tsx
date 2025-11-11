import { ShowcaseSection } from "./Showcase-section";

export default function BreadcrumbComp() {
  return (
    <div className="space-y-6">
      {/* Basic Breadcrumb */}
      <ShowcaseSection
        title="기본 브레드크럼 (Basic Breadcrumb)"
        description="페이지 경로를 표시하는 네비게이션"
      >
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                홈
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  카테고리
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500 dark:text-gray-400">
                  현재 페이지
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </ShowcaseSection>

      {/* Breadcrumb with Icons */}
      <ShowcaseSection
        title="아이콘이 있는 브레드크럼 (Breadcrumb with Icons)"
        description="아이콘을 포함한 브레드크럼"
      >
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                홈
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="ml-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 md:ml-2"
                >
                  프로젝트
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-gray-500 dark:text-gray-400 md:ml-2">
                  상세정보
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </ShowcaseSection>

      {/* Breadcrumb Variations */}
      <ShowcaseSection
        title="브레드크럼 변형 (Breadcrumb Variations)"
        description="다양한 스타일의 브레드크럼"
      >
        <div className="space-y-4">
          {/* 화살표 스타일 */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1">
              <li>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  홈
                </a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">→</span>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  문서
                </a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">→</span>
                <span className="text-gray-700 dark:text-gray-300">
                  가이드
                </span>
              </li>
            </ol>
          </nav>

          {/* 점 스타일 */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  홈
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">•</span>
                <a
                  href="#"
                  className="ml-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  제품
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">•</span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  상세
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </ShowcaseSection>
    </div>
  );
}
