import { ShowcaseSection } from "./Showcase-section";

export default function ButtonComp() {
  return (
    <div className="space-y-6">
      {/* Basic Buttons */}
      <ShowcaseSection
        title="기본 버튼 (Basic Buttons)"
        description="다양한 버튼 스타일"
      >
        <div className="flex gap-2 flex-wrap">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Primary
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors">
            Secondary
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
            Danger
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            Success
          </button>
        </div>
      </ShowcaseSection>

      {/* Outline Buttons */}
      <ShowcaseSection
        title="아웃라인 버튼 (Outline Buttons)"
        description="테두리만 있는 버튼"
      >
        <div className="flex gap-2 flex-wrap">
          <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors">
            Primary Outline
          </button>
          <button className="px-4 py-2 border-2 border-gray-500 text-gray-500 rounded-md hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors">
            Secondary Outline
          </button>
          <button className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-md hover:bg-red-50 dark:hover:bg-red-950 transition-colors">
            Danger Outline
          </button>
        </div>
      </ShowcaseSection>

      {/* Button Sizes */}
      <ShowcaseSection
        title="버튼 크기 (Button Sizes)"
        description="다양한 버튼 사이즈"
      >
        <div className="flex gap-2 items-center flex-wrap">
          <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Small
          </button>
          <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Medium
          </button>
          <button className="px-6 py-3 text-base bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Large
          </button>
        </div>
      </ShowcaseSection>

      {/* Button States */}
      <ShowcaseSection
        title="버튼 상태 (Button States)"
        description="다양한 버튼 상태"
      >
        <div className="flex gap-2 flex-wrap">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Active
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed"
            disabled
          >
            Disabled
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            onClick={() => alert("버튼 클릭!")}
          >
            Click Me
          </button>
        </div>
      </ShowcaseSection>

      {/* Full Width Button */}
      <ShowcaseSection
        title="전체 너비 버튼 (Full Width)"
        description="가로 전체를 차지하는 버튼"
      >
        <div className="space-y-2">
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            전체 너비 버튼
          </button>
          <button className="w-full px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors">
            전체 너비 아웃라인
          </button>
        </div>
      </ShowcaseSection>

      {/* Rounded Buttons */}
      <ShowcaseSection
        title="둥근 버튼 (Rounded Buttons)"
        description="다양한 border-radius"
      >
        <div className="flex gap-2 flex-wrap">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Rounded
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Rounded-lg
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            Rounded-full
          </button>
        </div>
      </ShowcaseSection>
    </div>
  );
}
