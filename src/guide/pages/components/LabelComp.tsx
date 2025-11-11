import { ShowcaseSection } from "./Showcase-section";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Info, AlertCircle } from "lucide-react";

export default function LabelComp() {
  return (
    <div className="space-y-6">
      {/* Basic Label */}
      <ShowcaseSection title="기본 라벨" description="기본 label 컴포넌트">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="이름을 입력하세요" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
        </div>
      </ShowcaseSection>

      {/* Required Label */}
      <ShowcaseSection
        title="필수 입력 표시"
        description="필수 항목을 표시하는 라벨"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">
              사용자명 <span className="text-red-500">*</span>
            </Label>
            <Input id="username" placeholder="사용자명" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">
              비밀번호 <span className="text-red-500">*</span>
            </Label>
            <Input id="password" type="password" placeholder="비밀번호" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="optional">
              닉네임{" "}
              <span className="text-muted-foreground text-sm">(선택사항)</span>
            </Label>
            <Input id="optional" placeholder="닉네임" />
          </div>
        </div>
      </ShowcaseSection>

      {/* Label with Description */}
      <ShowcaseSection
        title="설명이 있는 라벨"
        description="도움말 텍스트가 포함된 라벨"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bio">자기소개</Label>
            <p className="text-sm text-muted-foreground">
              자신에 대해 간단히 소개해주세요 (최대 150자)
            </p>
            <Textarea
              id="bio"
              placeholder="자기소개를 입력하세요..."
              maxLength={150}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">웹사이트</Label>
            <p className="text-sm text-muted-foreground">
              개인 웹사이트나 포트폴리오 URL을 입력하세요
            </p>
            <Input id="website" type="url" placeholder="https://example.com" />
          </div>
        </div>
      </ShowcaseSection>

      {/* Label with Icon */}
      <ShowcaseSection
        title="아이콘이 있는 라벨"
        description="아이콘으로 추가 정보를 제공하는 라벨"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key" className="flex items-center gap-2">
              API 키
              <Info className="h-4 w-4 text-muted-foreground" />
            </Label>
            <Input id="api-key" placeholder="API 키를 입력하세요" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secure" className="flex items-center gap-2">
              보안 코드
              <AlertCircle className="h-4 w-4 text-amber-500" />
            </Label>
            <Input id="secure" placeholder="6자리 코드" maxLength={6} />
            <p className="text-sm text-muted-foreground">
              이메일로 전송된 6자리 코드를 입력하세요
            </p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Label Sizes */}
      <ShowcaseSection title="라벨 크기" description="다양한 크기의 라벨">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="small" className="text-xs">
              Small Label
            </Label>
            <Input id="small" className="h-8 text-sm" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="default">Default Label</Label>
            <Input id="default" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="large" className="text-lg">
              Large Label
            </Label>
            <Input id="large" className="h-12 text-lg" />
          </div>
        </div>
      </ShowcaseSection>

      {/* Label with Checkbox */}
      <ShowcaseSection
        title="체크박스와 함께"
        description="체크박스에 연결된 라벨"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              이용약관에 동의합니다
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="privacy" />
            <Label htmlFor="privacy" className="cursor-pointer">
              개인정보 처리방침에 동의합니다{" "}
              <span className="text-red-500">*</span>
            </Label>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="marketing" className="mt-1" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="marketing" className="cursor-pointer">
                마케팅 정보 수신 동의
              </Label>
              <p className="text-sm text-muted-foreground">
                이메일, SMS를 통해 마케팅 정보를 받습니다
              </p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Label with Radio */}
      <ShowcaseSection
        title="라디오 버튼과 함께"
        description="라디오 버튼 그룹에 연결된 라벨"
      >
        <div className="space-y-4">
          <div>
            <Label className="mb-3 block">결제 방법을 선택하세요</Label>
            <RadioGroup defaultValue="card">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="cursor-pointer">
                  신용카드
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank" className="cursor-pointer">
                  계좌이체
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone" />
                <Label htmlFor="phone" className="cursor-pointer">
                  휴대폰 결제
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </ShowcaseSection>

      {/* Label with Switch */}
      <ShowcaseSection title="스위치와 함께" description="스위치에 연결된 라벨">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="airplane" className="cursor-pointer">
              비행기 모드
            </Label>
            <Switch id="airplane" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications" className="cursor-pointer">
                알림 받기
              </Label>
              <p className="text-sm text-muted-foreground">
                새로운 메시지 알림을 받습니다
              </p>
            </div>
            <Switch id="notifications" defaultChecked />
          </div>
        </div>
      </ShowcaseSection>

      {/* Error State Label */}
      <ShowcaseSection title="오류 상태" description="오류가 있을 때의 라벨">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="errorEmail" className="text-red-500">
              이메일 <span className="text-red-500">*</span>
            </Label>
            <Input
              id="errorEmail"
              type="email"
              className="border-red-500 focus-visible:ring-red-500"
              placeholder="email@example.com"
            />
            <p className="text-sm text-red-500">
              올바른 이메일 형식이 아닙니다
            </p>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
