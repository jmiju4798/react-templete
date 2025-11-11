import { ShowcaseSection } from "./Showcase-section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function InputComp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      {/* Basic Input */}
      <ShowcaseSection title="기본 입력 필드" description="다양한 타입의 input">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text">텍스트</Label>
            <Input id="text" type="text" placeholder="텍스트를 입력하세요" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" placeholder="비밀번호 입력" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number">숫자</Label>
            <Input id="number" type="number" placeholder="0" />
          </div>
        </div>
      </ShowcaseSection>

      {/* Input with Icons */}
      <ShowcaseSection
        title="아이콘과 함께"
        description="아이콘이 포함된 입력 필드"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">검색</Label>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="search" placeholder="검색..." className="pl-8" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-icon">이메일</Label>
            <div className="relative">
              <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="email-icon"
                type="email"
                placeholder="이메일 주소"
                className="pl-8"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-icon">비밀번호</Label>
            <div className="relative">
              <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="password-icon"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호"
                className="px-8"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Input States */}
      <ShowcaseSection
        title="입력 필드 상태"
        description="다양한 상태의 입력 필드"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="normal">일반</Label>
            <Input id="normal" placeholder="일반 상태" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">비활성화</Label>
            <Input id="disabled" placeholder="비활성화 상태" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="readonly">읽기 전용</Label>
            <Input id="readonly" value="읽기 전용 값" readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="error">오류 상태</Label>
            <Input
              id="error"
              placeholder="오류 상태"
              className="border-red-500 focus-visible:ring-red-500"
            />
            <p className="text-sm text-red-500">
              오류 메시지가 여기 표시됩니다
            </p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Input Sizes */}
      <ShowcaseSection
        title="입력 필드 크기"
        description="다양한 크기의 입력 필드"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Small</Label>
            <Input placeholder="Small input" className="h-8 text-sm" />
          </div>
          <div className="space-y-2">
            <Label>Default</Label>
            <Input placeholder="Default input" />
          </div>
          <div className="space-y-2">
            <Label>Large</Label>
            <Input placeholder="Large input" className="h-12 text-lg" />
          </div>
        </div>
      </ShowcaseSection>

      {/* File Input */}
      <ShowcaseSection title="파일 입력" description="파일 업로드 입력 필드">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file">파일 선택</Label>
            <Input id="file" type="file" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="multiple">여러 파일 선택</Label>
            <Input id="multiple" type="file" multiple />
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
