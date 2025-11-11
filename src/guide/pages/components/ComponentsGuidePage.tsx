import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShowcaseTabs,
  ShowcaseTabsContent,
  ShowcaseTabsList,
  ShowcaseTabsTrigger,
} from "./Showcase-tabs";
import ButtonComp from "./ButtonComp";
import InputComp from "./InputComp";
import CardComp from "./CardComp";

interface ComponentsGuidePageProps {
  selectedComponent?: string | null;
}

export default function ComponentsGuidePage({
  selectedComponent,
}: ComponentsGuidePageProps) {
  const navigate = useNavigate();
  // 선택된 컴포넌트가 없으면 기본값으로 Button 사용
  const activeTab = selectedComponent || "Button";

  // 탭 변경 시 사이드바와 동기화를 위해 URL 파라미터 업데이트
  const handleTabChange = (value: string) => {
    // 이 부분은 선택사항입니다. 필요하면 URL에 컴포넌트 정보를 추가할 수 있습니다.
    // navigate(`/guide/components?component=${value}`);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          컴포넌트 가이드
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          재사용 가능한 UI 컴포넌트 모음
        </p>
      </header>

      <ShowcaseTabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <div className="flex gap-8">
          {/* 오른쪽 콘텐츠 영역 */}
          <div className="flex-1">
            <ShowcaseTabsContent value="Button">
              <ButtonComp />
            </ShowcaseTabsContent>

            <ShowcaseTabsContent value="Input">
              <InputComp />
            </ShowcaseTabsContent>

            <ShowcaseTabsContent value="Card">
              <CardComp />
            </ShowcaseTabsContent>
          </div>
        </div>
      </ShowcaseTabs>
    </div>
  );
}
