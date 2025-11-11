import { ShowcaseSection } from "./Showcase-section";
import { Button } from "@/components/ui/button";
import { Send, Download, Trash2, Plus } from "lucide-react";

export default function ButtonComp() {
  return (
    <div className="space-y-6">
      {/* Variants */}
      <ShowcaseSection
        title="버튼 변형 (Variants)"
        description="다양한 버튼 스타일"
      >
        <div className="flex gap-1">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection
        title="버튼 크기 (Sizes)"
        description="다양한 버튼 사이즈"
      >
        <div className="flex gap-1">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </ShowcaseSection>

      {/* With Icons */}
      <ShowcaseSection
        title="아이콘 버튼"
        description="아이콘과 함께 사용하는 버튼"
      >
        <div className="flex gap-1">
          <Button>
            <Send className="mr-2 h-4 w-4" />
            전송
          </Button>
          <Button variant="secondary">
            <Download className="mr-2 h-4 w-4" />
            다운로드
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            삭제
          </Button>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </ShowcaseSection>

      {/* States */}
      <ShowcaseSection title="버튼 상태" description="다양한 버튼 상태">
        <div className="flex gap-1">
          <Button>Active</Button>
          <Button disabled>Disabled</Button>
          <Button onClick={() => alert("클릭!")}>Click Event</Button>
        </div>
      </ShowcaseSection>

      {/* Full Width */}
      <ShowcaseSection
        title="전체 너비 버튼"
        description="가로 전체를 차지하는 버튼"
      >
        <Button className="w-full">전체 너비 버튼</Button>
        <Button variant="outline" className="w-full">
          Outline 전체 너비
        </Button>
      </ShowcaseSection>
    </div>
  );
}
