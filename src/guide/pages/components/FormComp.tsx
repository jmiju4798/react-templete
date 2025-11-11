import { ShowcaseSection } from "./Showcase-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FormComp() {
  return (
    <div className="space-y-6">
      {/* Input */}
      <ShowcaseSection
        title="입력 필드 (Input)"
        description="다양한 타입의 입력 필드"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text">텍스트</Label>
            <Input id="text" placeholder="텍스트를 입력하세요" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="disabled">비활성화</Label>
            <Input id="disabled" placeholder="비활성화된 입력" disabled />
          </div>
        </div>
      </ShowcaseSection>

      {/* Select */}
      <ShowcaseSection
        title="선택 박스 (Select)"
        description="드롭다운 선택 박스"
      >
        <div className="space-y-2">
          <Label>과일 선택</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="과일을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">사과</SelectItem>
              <SelectItem value="banana">바나나</SelectItem>
              <SelectItem value="orange">오렌지</SelectItem>
              <SelectItem value="grape">포도</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ShowcaseSection>

      {/* Checkbox */}
      <ShowcaseSection
        title="체크박스 (Checkbox)"
        description="선택 가능한 체크박스"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              이용약관에 동의합니다
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing" className="cursor-pointer">
              마케팅 정보 수신에 동의합니다
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" className="text-gray-400">
              비활성화된 체크박스
            </Label>
          </div>
        </div>
      </ShowcaseSection>

      {/* Switch */}
      <ShowcaseSection title="스위치 (Switch)" description="토글 스위치">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">알림 받기</Label>
            <Switch id="notifications" />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="darkmode">다크 모드</Label>
            <Switch id="darkmode" />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="disabled-switch" className="text-gray-400">
              비활성화
            </Label>
            <Switch id="disabled-switch" disabled />
          </div>
        </div>
      </ShowcaseSection>

      {/* Form Example */}
      <ShowcaseSection title="회원가입 폼 예제" description="실제 사용 예시">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-email">이메일</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-password">비밀번호</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-confirm">비밀번호 확인</Label>
            <Input id="signup-confirm" type="password" placeholder="••••••••" />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="signup-terms" />
            <Label htmlFor="signup-terms" className="cursor-pointer text-sm">
              이용약관 및 개인정보처리방침에 동의합니다
            </Label>
          </div>

          <Button className="w-full">회원가입</Button>
        </div>
      </ShowcaseSection>
    </div>
  );
}
