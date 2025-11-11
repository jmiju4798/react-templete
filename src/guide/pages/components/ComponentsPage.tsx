import ButtonComp from "./ButtonComp";
import InputComp from "./InputComp";
import CardComp from "./CardComp";

interface ComponentsPageProps {
  selectedComponent?: string | null;
}

export default function ComponentsPage({
  selectedComponent,
}: ComponentsPageProps) {
  // 선택된 컴포넌트가 없으면 기본값으로 Button 사용
  const activeComponent = selectedComponent || "Button";

  // 선택된 컴포넌트에 따라 렌더링
  const renderComponent = () => {
    switch (activeComponent) {
      case "Button":
        return <ButtonComp />;
      case "Input":
        return <InputComp />;
      case "Card":
        return <CardComp />;
      default:
        return <ButtonComp />;
    }
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

      {/* 선택된 컴포넌트 렌더링 */}
      {renderComponent()}
    </div>
  );
}
