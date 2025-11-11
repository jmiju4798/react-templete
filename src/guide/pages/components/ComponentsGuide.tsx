import { ShowcaseSection } from "./Showcase-section";

export default function ComponentsGuide() {
  return (
    <div className="space-y-6">
      {/* 소개 */}
      <ShowcaseSection
        title="컴포넌트 가이드 소개"
        description="재사용 가능한 UI 컴포넌트를 만드는 방법"
      >
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300">
            이 가이드는 프로젝트에서 사용할 수 있는 재사용 가능한 UI 컴포넌트를
            작성하는 방법을 안내합니다. 왼쪽 사이드바에서 각 컴포넌트 예시를
            확인할 수 있습니다.
          </p>
        </div>
      </ShowcaseSection>

      {/* 컴포넌트 작성 기본 구조 */}
      <ShowcaseSection
        title="컴포넌트 기본 구조"
        description="컴포넌트를 작성할 때 따라야 할 기본 구조"
      >
        <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
          <pre className="text-sm overflow-x-auto">
            <code className="text-gray-800 dark:text-gray-200">
{`import { ShowcaseSection } from "./Showcase-section";

export default function YourComp() {
  return (
    <div className="space-y-6">
      {/* 첫 번째 섹션 */}
      <ShowcaseSection
        title="섹션 제목"
        description="섹션 설명"
      >
        {/* 여기에 예시 컴포넌트 작성 */}
        <div>컴포넌트 내용</div>
      </ShowcaseSection>

      {/* 두 번째 섹션 */}
      <ShowcaseSection
        title="다른 섹션"
        description="다른 예시"
      >
        <div>다른 내용</div>
      </ShowcaseSection>
    </div>
  );
}`}
            </code>
          </pre>
        </div>
      </ShowcaseSection>

      {/* 스타일링 가이드 */}
      <ShowcaseSection
        title="스타일링 가이드"
        description="Tailwind CSS를 사용한 스타일링 방법"
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
              1. 색상 시스템
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                  bg-blue-500
                </code>{" "}
                - Primary 색상
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                  bg-gray-500
                </code>{" "}
                - Secondary 색상
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                  bg-red-500
                </code>{" "}
                - Danger 색상
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                  bg-green-500
                </code>{" "}
                - Success 색상
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
              2. 다크모드 지원
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                모든 컴포넌트는 다크모드를 지원해야 합니다
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                  dark:
                </code>{" "}
                prefix를 사용하세요
              </li>
              <li>
                예:{" "}
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                  text-gray-900 dark:text-gray-100
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
              3. 간격(Spacing)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                  space-y-6
                </code>{" "}
                - 섹션 간 간격
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                  gap-2
                </code>{" "}
                - 요소 간 간격
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                  px-4 py-2
                </code>{" "}
                - 버튼 내부 여백
              </li>
            </ul>
          </div>
        </div>
      </ShowcaseSection>

      {/* 새 컴포넌트 추가 방법 */}
      <ShowcaseSection
        title="새 컴포넌트 추가 방법"
        description="프로젝트에 새로운 컴포넌트를 추가하는 단계별 가이드"
      >
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Step 1: 컴포넌트 파일 생성
            </h3>
            <p>
              <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                src/guide/pages/components/YourComp.tsx
              </code>{" "}
              파일을 생성합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Step 2: ComponentsPage.tsx 수정
            </h3>
            <p>import 추가 및 switch 문에 case 추가</p>
            <pre className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 mt-2 overflow-x-auto text-sm">
              <code>
{`import YourComp from "./YourComp";

// switch 문에 추가
case "YourComponent":
  return <YourComp />;`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Step 3: GuideSidebar.tsx 수정
            </h3>
            <p>컴포넌트 목록에 추가</p>
            <pre className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 mt-2 overflow-x-auto text-sm">
              <code>
{`const components = useMemo(() => {
  return [
    { id: "Button", name: "Button" },
    { id: "Input", name: "Input" },
    { id: "Card", name: "Card" },
    { id: "YourComponent", name: "Your Component" }, // 추가
  ];
}, []);`}
              </code>
            </pre>
          </div>
        </div>
      </ShowcaseSection>

      {/* 예시 살펴보기 */}
      <ShowcaseSection
        title="예시 살펴보기"
        description="왼쪽 사이드바에서 컴포넌트를 선택하여 예시를 확인하세요"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Button</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              다양한 버튼 스타일과 크기
            </p>
          </div>
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Input</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              입력 필드와 폼 요소들
            </p>
          </div>
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Card</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              카드 레이아웃과 변형
            </p>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
