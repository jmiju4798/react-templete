import { ShowcaseSection } from "./Showcase-section";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxComp() {
  return (
    <div className="space-y-6">
      {/* Basic Checkbox */}
      <ShowcaseSection
        title="기본 체크박스"
        description="기본 checkbox 컴포넌트"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              약관에 동의합니다
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing" className="cursor-pointer">
              마케팅 정보 수신에 동의합니다
            </Label>
          </div>
        </div>
      </ShowcaseSection>

      {/* Checkbox with Description */}
      <ShowcaseSection
        title="설명이 있는 체크박스"
        description="라벨과 부가 설명이 함께 있는 체크박스"
      >
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox id="notifications" className="mt-1" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="notifications"
                className="cursor-pointer font-medium"
              >
                알림 받기
              </Label>
              <p className="text-sm text-muted-foreground">
                새로운 소식과 업데이트를 이메일로 받아보세요
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="newsletter" className="mt-1" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="newsletter"
                className="cursor-pointer font-medium"
              >
                뉴스레터 구독
              </Label>
              <p className="text-sm text-muted-foreground">
                주간 뉴스레터를 통해 최신 정보를 받아보세요
              </p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Checkbox States */}
      <ShowcaseSection
        title="체크박스 상태"
        description="다양한 상태의 체크박스"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked" className="cursor-pointer">
              체크 안됨
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked" className="cursor-pointer">
              체크됨 (기본값)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" className="cursor-not-allowed opacity-50">
              비활성화
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label
              htmlFor="disabled-checked"
              className="cursor-not-allowed opacity-50"
            >
              비활성화 (체크됨)
            </Label>
          </div>
        </div>
      </ShowcaseSection>

      {/* Checkbox Group */}
      <ShowcaseSection
        title="체크박스 그룹"
        description="여러 옵션을 선택할 수 있는 체크박스 그룹"
      >
        <div className="space-y-4">
          <div>
            <p className="mb-3 font-medium">관심 분야를 선택하세요:</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="tech" />
                <Label htmlFor="tech" className="cursor-pointer">
                  기술/IT
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="design" />
                <Label htmlFor="design" className="cursor-pointer">
                  디자인
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="business" />
                <Label htmlFor="business" className="cursor-pointer">
                  비즈니스
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing-check" />
                <Label htmlFor="marketing-check" className="cursor-pointer">
                  마케팅
                </Label>
              </div>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Nested Checkboxes */}
      <ShowcaseSection
        title="중첩된 체크박스"
        description="계층 구조의 체크박스"
      >
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="all" />
            <Label htmlFor="all" className="cursor-pointer font-medium">
              모두 선택
            </Label>
          </div>
          <div className="ml-6 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="option1" />
              <Label htmlFor="option1" className="cursor-pointer">
                옵션 1
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option2" />
              <Label htmlFor="option2" className="cursor-pointer">
                옵션 2
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option3" />
              <Label htmlFor="option3" className="cursor-pointer">
                옵션 3
              </Label>
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
