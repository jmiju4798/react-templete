import { ShowcaseSection } from "./Showcase-section";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function RadioComp() {
  return (
    <div className="space-y-6">
      {/* Basic Radio */}
      <ShowcaseSection
        title="기본 라디오 버튼"
        description="기본 radio group 컴포넌트"
      >
        <RadioGroup defaultValue="option1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="option1" />
            <Label htmlFor="option1" className="cursor-pointer">
              옵션 1
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="option2" />
            <Label htmlFor="option2" className="cursor-pointer">
              옵션 2
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option3" id="option3" />
            <Label htmlFor="option3" className="cursor-pointer">
              옵션 3
            </Label>
          </div>
        </RadioGroup>
      </ShowcaseSection>

      {/* Radio with Description */}
      <ShowcaseSection
        title="설명이 있는 라디오"
        description="라벨과 부가 설명이 함께 있는 라디오 버튼"
      >
        <RadioGroup defaultValue="free">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="free" id="free" className="mt-1" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="free" className="cursor-pointer font-medium">
                무료 플랜
              </Label>
              <p className="text-sm text-muted-foreground">
                기본 기능을 무료로 사용할 수 있습니다
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="pro" id="pro" className="mt-1" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="pro" className="cursor-pointer font-medium">
                프로 플랜
              </Label>
              <p className="text-sm text-muted-foreground">
                월 $9.99 - 고급 기능과 우선 지원
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem
              value="enterprise"
              id="enterprise"
              className="mt-1"
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="enterprise"
                className="cursor-pointer font-medium"
              >
                엔터프라이즈
              </Label>
              <p className="text-sm text-muted-foreground">
                맞춤형 솔루션과 전담 지원
              </p>
            </div>
          </div>
        </RadioGroup>
      </ShowcaseSection>

      {/* Radio States */}
      <ShowcaseSection
        title="라디오 상태"
        description="다양한 상태의 라디오 버튼"
      >
        <div className="space-y-4">
          <div>
            <p className="mb-2 font-medium">일반 상태</p>
            <RadioGroup defaultValue="a">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="a" />
                <Label htmlFor="a" className="cursor-pointer">
                  옵션 A
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="b" />
                <Label htmlFor="b" className="cursor-pointer">
                  옵션 B
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <p className="mb-2 font-medium">비활성화 상태</p>
            <RadioGroup defaultValue="c" disabled>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="c" />
                <Label htmlFor="c" className="cursor-not-allowed opacity-50">
                  옵션 C (비활성화)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="d" id="d" />
                <Label htmlFor="d" className="cursor-not-allowed opacity-50">
                  옵션 D (비활성화)
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </ShowcaseSection>

      {/* Payment Methods Example */}
      <ShowcaseSection
        title="결제 방법 선택"
        description="실제 사용 예시 - 결제 방법"
      >
        <RadioGroup defaultValue="card">
          <div className="flex items-center space-x-2 rounded-lg border p-4">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex-1 cursor-pointer">
              <div className="font-medium">신용카드</div>
              <div className="text-sm text-muted-foreground">
                Visa, Mastercard, AMEX
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-4">
            <RadioGroupItem value="bank" id="bank" />
            <Label htmlFor="bank" className="flex-1 cursor-pointer">
              <div className="font-medium">계좌이체</div>
              <div className="text-sm text-muted-foreground">
                실시간 계좌이체
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-4">
            <RadioGroupItem value="phone" id="phone" />
            <Label htmlFor="phone" className="flex-1 cursor-pointer">
              <div className="font-medium">휴대폰 결제</div>
              <div className="text-sm text-muted-foreground">통신사 결제</div>
            </Label>
          </div>
        </RadioGroup>
      </ShowcaseSection>

      {/* Horizontal Layout */}
      <ShowcaseSection
        title="가로 레이아웃"
        description="수평으로 배치된 라디오 버튼"
      >
        <div className="space-y-4">
          <div>
            <p className="mb-3 font-medium">성별을 선택하세요:</p>
            <RadioGroup defaultValue="male" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="cursor-pointer">
                  남성
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="cursor-pointer">
                  여성
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="cursor-pointer">
                  기타
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </ShowcaseSection>

      {/* Radio Sizes */}
      <ShowcaseSection
        title="라디오 크기"
        description="다양한 크기의 라디오 버튼"
      >
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-sm font-medium">Small</p>
            <RadioGroup defaultValue="s1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="s1" id="s1" className="h-4 w-4" />
                <Label htmlFor="s1" className="cursor-pointer text-sm">
                  Small option
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <p className="mb-2 font-medium">Default</p>
            <RadioGroup defaultValue="d1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="d1" id="d1" />
                <Label htmlFor="d1" className="cursor-pointer">
                  Default option
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <p className="mb-2 text-lg font-medium">Large</p>
            <RadioGroup defaultValue="l1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="l1" id="l1" className="h-6 w-6" />
                <Label htmlFor="l1" className="cursor-pointer text-lg">
                  Large option
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
