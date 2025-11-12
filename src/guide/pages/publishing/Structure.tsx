export default function Structure() {
  return (
    <div className="max-w-4xl">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 pb-3 border-b-2 border-gray-200 dark:border-slate-700">
          프로젝트 구조
        </h2>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-gray-300 font-mono text-sm">
            {`src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── common/         # 공통 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   └── ui/             # UI 컴포넌트
├── pages/              # 페이지 컴포넌트
├── styles/             # 스타일 파일
│   ├── base/          # 기본 스타일
│   ├── components/    # 컴포넌트 스타일
│   └── utils/         # 유틸리티 스타일
├── assets/             # 정적 파일
│   ├── images/        # 이미지 파일
│   ├── fonts/         # 폰트 파일
│   └── icons/         # 아이콘 파일
└── utils/              # 유틸리티 함수`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 pb-3 border-b-2 border-gray-200 dark:border-slate-700">
          네이밍 컨벤션
        </h2>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            파일명
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>컴포넌트 파일:</strong> PascalCase 사용 (예:{" "}
                <code className="bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded text-sm text-pink-600 dark:text-pink-400">
                  Button.jsx
                </code>
                ,{" "}
                <code className="bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded text-sm text-pink-600 dark:text-pink-400">
                  Header.jsx
                </code>
                )
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>스타일 파일:</strong> 컴포넌트명과 동일 (예:{" "}
                <code className="bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded text-sm text-pink-600 dark:text-pink-400">
                  Button.css
                </code>
                )
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>유틸리티 파일:</strong> camelCase 사용 (예:{" "}
                <code className="bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded text-sm text-pink-600 dark:text-pink-400">
                  formatDate.js
                </code>
                )
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>상수 파일:</strong> UPPER_CASE 사용 (예:{" "}
                <code className="bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded text-sm text-pink-600 dark:text-pink-400">
                  API_CONSTANTS.js
                </code>
                )
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            폴더명
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>일반 폴더:</strong> kebab-case 사용 (예:{" "}
                <code className="bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded text-sm text-pink-600 dark:text-pink-400">
                  user-profile/
                </code>
                )
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>컴포넌트 폴더:</strong> PascalCase 사용 (예:{" "}
                <code className="bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded text-sm text-pink-600 dark:text-pink-400">
                  UserProfile/
                </code>
                )
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 pb-3 border-b-2 border-gray-200 dark:border-slate-700">
          CSS 구조화
        </h2>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            클래스명 규칙 (BEM 방식 권장)
          </h3>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-gray-300 font-mono text-sm">
              {`.block {}
.block__element {}
.block--modifier {}

/* 예시 */
.card {}
.card__header {}
.card__body {}
.card--featured {}`}
            </pre>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            스타일 작성 순서
          </h3>
          <ol className="space-y-2 text-gray-700 dark:text-gray-300 list-decimal list-inside">
            <li>위치 관련 (position, top, right, bottom, left, z-index)</li>
            <li>
              박스 모델 (display, flex, grid, width, height, margin, padding)
            </li>
            <li>배경 및 테두리 (background, border)</li>
            <li>폰트 및 텍스트 (font, color, text-align)</li>
            <li>기타 (cursor, transform, transition)</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
