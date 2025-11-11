import AccordionComp from "./AccordionComp";
import BadgeComp from "./BadgeComp";
import BreadcrumbComp from "./BreadcrumbComp";
import ButtonComp from "./ButtonComp";
import CalendarComp from "./CalendarComp";
import CardComp from "./CardComp";
import CheckboxComp from "./CheckboxComp";
import DialogComp from "./DialogComp";
import FormComp from "./FormComp";
import IconComp from "./IconComp";
import InputComp from "./InputComp";
import LabelComp from "./LabelComp";
import PaginationComp from "./PaginationComp";
import RadioComp from "./RadioComp";
import ScrollareaComp from "./ScrollareaComp";
import SelectComp from "./SelectComp";
import SwitchComp from "./SwitchComp";
import TableComp from "./TableComp";
import TabsComp from "./TabsComp";
import TextareaComp from "./TextareaComp";
import ComponentsGuide from "./ComponentsGuide";

interface ComponentsPageProps {
  selectedComponent?: string | null;
}

export default function ComponentsPage({
  selectedComponent,
}: ComponentsPageProps) {
  // 선택된 컴포넌트가 없으면 가이드 페이지 표시
  const activeComponent = selectedComponent;

  // 선택된 컴포넌트에 따라 렌더링
  const renderComponent = () => {
    if (!activeComponent) {
      return <ComponentsGuide />;
    }

    switch (activeComponent) {
      case "Accordion":
        return <AccordionComp />;
      case "Badge":
        return <BadgeComp />;
      case "Breadcrumb":
        return <BreadcrumbComp />;
      case "Button":
        return <ButtonComp />;
      case "Calendar":
        return <CalendarComp />;
      case "Card":
        return <CardComp />;
      case "Checkbox":
        return <CheckboxComp />;
      case "Dialog":
        return <DialogComp />;
      case "Form":
        return <FormComp />;
      case "Icon":
        return <IconComp />;
      case "Input":
        return <InputComp />;
      case "Label":
        return <LabelComp />;
      case "Pagination":
        return <PaginationComp />;
      case "Radio":
        return <RadioComp />;
      case "Scrollarea":
        return <ScrollareaComp />;
      case "Select":
        return <SelectComp />;
      case "Switch":
        return <SwitchComp />;
      case "Table":
        return <TableComp />;
      case "Tabs":
        return <TabsComp />;
      case "Textarea":
        return <TextareaComp />;
      default:
        return <ComponentsGuide />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {activeComponent ? `${activeComponent} 컴포넌트` : "컴포넌트 가이드"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {activeComponent
            ? `${activeComponent} 컴포넌트 예시 및 사용법`
            : "재사용 가능한 UI 컴포넌트 작성 방법"}
        </p>
      </header>

      {/* 선택된 컴포넌트 렌더링 */}
      {renderComponent()}
    </div>
  );
}
