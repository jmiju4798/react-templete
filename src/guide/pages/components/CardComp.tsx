import { ShowcaseSection } from "./Showcase-section";

export default function CardComp() {
  return (
    <div className="space-y-6">
      {/* Basic Card */}
      <ShowcaseSection
        title="기본 카드 (Basic Card)"
        description="기본적인 카드 레이아웃"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800">
            <h3 className="text-lg font-semibold mb-2">카드 제목</h3>
            <p className="text-gray-600 dark:text-gray-400">
              카드의 내용이 들어갑니다. 이것은 간단한 예시 텍스트입니다.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800">
            <h3 className="text-lg font-semibold mb-2">또 다른 카드</h3>
            <p className="text-gray-600 dark:text-gray-400">
              여러 개의 카드를 나란히 배치할 수 있습니다.
            </p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Card with Image */}
      <ShowcaseSection
        title="이미지가 있는 카드 (Card with Image)"
        description="이미지를 포함한 카드"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">이미지 카드 1</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                이미지 영역과 텍스트 영역이 함께 있는 카드입니다.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">이미지 카드 2</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                다양한 색상의 그라디언트를 사용할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
            <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">이미지 카드 3</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                반응형 그리드 레이아웃으로 배치됩니다.
              </p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Card with Actions */}
      <ShowcaseSection
        title="액션 버튼이 있는 카드 (Card with Actions)"
        description="버튼을 포함한 인터랙티브 카드"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800">
            <h3 className="text-lg font-semibold mb-2">프로젝트 A</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              프로젝트에 대한 간단한 설명이 들어갑니다.
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                상세보기
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                수정
              </button>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800">
            <h3 className="text-lg font-semibold mb-2">프로젝트 B</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              또 다른 프로젝트에 대한 설명입니다.
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                상세보기
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                수정
              </button>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Card Variations */}
      <ShowcaseSection
        title="카드 변형 (Card Variations)"
        description="다양한 스타일의 카드"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50 dark:bg-blue-950">
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">
              Primary Card
            </h3>
            <p className="text-blue-600 dark:text-blue-400">
              강조된 스타일의 카드입니다.
            </p>
          </div>
          <div className="shadow-lg rounded-lg p-6 bg-white dark:bg-slate-800">
            <h3 className="text-lg font-semibold mb-2">Shadow Card</h3>
            <p className="text-gray-600 dark:text-gray-400">
              그림자 효과가 있는 카드입니다.
            </p>
          </div>
          <div className="rounded-lg p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <h3 className="text-lg font-semibold mb-2">Gradient Card</h3>
            <p>그라디언트 배경의 카드입니다.</p>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
