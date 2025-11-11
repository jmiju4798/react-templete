import { ShowcaseSection } from "./Showcase-section";
import { Badge } from "@/components/ui/badge";
import { Check, X, AlertCircle, Info, Star } from "lucide-react";

export default function BadgeComp() {
  return (
    <div className="space-y-6">
      {/* Variants */}
      <ShowcaseSection
        title="Default Badge"
        description="기본 badge 컴포넌트"
        items={["variant"]}
      >
        <div className="flex gap-1">
          <Badge>Default</Badge>
          <Badge variant="success">success</Badge>
          <Badge variant="warning">warning</Badge>
        </div>
      </ShowcaseSection>

      {/* With Icons */}
      <ShowcaseSection title="Icon + Badge" description="Badge > Icon">
        <div className="flex gap-1">
          <Badge>
            <Check className="compo-badge mr-1 h-3 w-3" />
            승인됨
          </Badge>
          <Badge variant="secondary">
            <Star className="mr-1 h-3 w-3" />
            즐겨찾기
          </Badge>
          <Badge variant="outline">
            <X className="mr-1 h-3 w-3" />
            거부됨
          </Badge>
          <Badge variant="outline">
            <AlertCircle className="mr-1 h-3 w-3" />
            대기중
          </Badge>
          <Badge>
            <Info className="mr-1 h-3 w-3" />
            정보
          </Badge>
        </div>
      </ShowcaseSection>

      {/* Status Badges */}
      <ShowcaseSection
        title="상태 배지"
        description="다양한 상태를 표시하는 배지"
      >
        <div className="flex gap-1">
          <Badge className="bg-green-500">활성</Badge>
          <Badge className="bg-yellow-500">보류</Badge>
          <Badge className="bg-red-500">비활성</Badge>
          <Badge className="bg-blue-500">진행중</Badge>
          <Badge className="bg-purple-500">완료</Badge>
          <Badge className="bg-gray-500">취소됨</Badge>
        </div>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="배지 크기" description="다양한 크기의 배지">
        <div className="flex gap-1">
          <Badge className="text-xs">Small</Badge>
          <Badge>Default</Badge>
          <Badge className="text-base px-3 py-1">Large</Badge>
        </div>
      </ShowcaseSection>

      {/* Numbered Badges */}
      <ShowcaseSection title="숫자 배지" description="카운트를 표시하는 배지">
        <div className="flex gap-5">
          <div className="relative inline-block rounded border p-1">
            <span className="text-sm">알림</span>
            <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              3
            </Badge>
          </div>
          <div className="relative inline-block rounded border p-1">
            <span className="text-sm">메시지</span>
            <Badge
              variant="outline"
              className="absolute -right-3 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
            >
              12
            </Badge>
          </div>
          <div className="relative inline-block rounded border p-1">
            <span className="text-sm">장바구니</span>
            <Badge
              variant="secondary"
              className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
            >
              5
            </Badge>
          </div>
        </div>
      </ShowcaseSection>

      {/* Pill Badges */}
      <ShowcaseSection title="알약형 배지" description="둥근 모서리의 배지">
        <div className="flex gap-1">
          <Badge className="rounded-full">React</Badge>
          <Badge variant="secondary" className="rounded-full">
            TypeScript
          </Badge>
          <Badge variant="outline" className="rounded-full">
            Tailwind
          </Badge>
          <Badge className="rounded-full">Next.js</Badge>
          <Badge variant="secondary" className="rounded-full">
            Vercel
          </Badge>
        </div>
      </ShowcaseSection>

      {/* Dot Badges */}
      <ShowcaseSection
        title="점 표시 배지"
        description="상태를 나타내는 점이 있는 배지"
      >
        <div className="flex gap-1">
          <Badge variant="outline">
            <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
            온라인
          </Badge>
          <Badge variant="outline">
            <span className="mr-1 h-2 w-2 rounded-full bg-yellow-500"></span>
            자리비움
          </Badge>
          <Badge variant="outline">
            <span className="mr-1 h-2 w-2 rounded-full bg-red-500"></span>
            오프라인
          </Badge>
          <Badge variant="outline">
            <span className="mr-1 h-2 w-2 rounded-full bg-gray-500"></span>알 수
            없음
          </Badge>
        </div>
      </ShowcaseSection>

      {/* Use Cases */}
      <ShowcaseSection
        title="실제 사용 예시"
        description="배지의 다양한 활용 사례"
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">프로젝트 제목</h3>
              <p className="text-sm text-muted-foreground">프로젝트 설명...</p>
            </div>
            <div className="flex gap-2">
              <Badge>긴급</Badge>
              <Badge variant="secondary">디자인</Badge>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">버그 수정 필요</h3>
              <p className="text-sm text-muted-foreground">로그인 페이지 오류</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">버그</Badge>
              <Badge variant="outline">높음</Badge>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">새로운 기능 추가</h3>
              <p className="text-sm text-muted-foreground">다크모드 지원</p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-purple-500">기능</Badge>
              <Badge variant="secondary">보통</Badge>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Interactive Badges */}
      <ShowcaseSection
        title="상호작용 가능한 배지"
        description="클릭 가능한 배지 (태그)"
      >
        <div className="flex gap-1">
          <Badge className="cursor-pointer hover:bg-primary/80">
            JavaScript
            <X className="ml-1 h-3 w-3" />
          </Badge>
          <Badge className="cursor-pointer hover:bg-primary/80">
            Python
            <X className="ml-1 h-3 w-3" />
          </Badge>
          <Badge className="cursor-pointer hover:bg-primary/80">
            React
            <X className="ml-1 h-3 w-3" />
          </Badge>
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-secondary"
          >
            + 태그 추가
          </Badge>
        </div>
      </ShowcaseSection>
    </div>
  );
}
