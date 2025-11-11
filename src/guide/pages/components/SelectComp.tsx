import { ShowcaseSection } from "./Showcase-section";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function SelectComp() {
  return (
    <div className="space-y-6">
      {/* Basic Select */}
      <ShowcaseSection title="기본 선택" description="기본 select 컴포넌트">
        <div className="space-y-4">
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
                <SelectItem value="mango">망고</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ShowcaseSection>

      {/* Grouped Select */}
      <ShowcaseSection
        title="그룹화된 선택"
        description="항목이 그룹으로 나뉜 select"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>음식 카테고리</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="음식을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>과일</SelectLabel>
                  <SelectItem value="apple">사과</SelectItem>
                  <SelectItem value="banana">바나나</SelectItem>
                  <SelectItem value="orange">오렌지</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>채소</SelectLabel>
                  <SelectItem value="carrot">당근</SelectItem>
                  <SelectItem value="potato">감자</SelectItem>
                  <SelectItem value="tomato">토마토</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>육류</SelectLabel>
                  <SelectItem value="beef">소고기</SelectItem>
                  <SelectItem value="chicken">닭고기</SelectItem>
                  <SelectItem value="pork">돼지고기</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ShowcaseSection>

      {/* Select with Default Value */}
      <ShowcaseSection
        title="기본값 설정"
        description="초기 선택값이 있는 select"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>언어 선택</Label>
            <Select defaultValue="ko">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ko">한국어</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ShowcaseSection>

      {/* Select States */}
      <ShowcaseSection title="선택 상태" description="다양한 상태의 select">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>일반 상태</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="옵션 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">옵션 1</SelectItem>
                <SelectItem value="2">옵션 2</SelectItem>
                <SelectItem value="3">옵션 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>비활성화 상태</Label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="비활성화됨" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">옵션 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ShowcaseSection>

      {/* Different Sizes */}
      <ShowcaseSection title="크기 변형" description="다양한 크기의 select">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Small</Label>
            <Select>
              <SelectTrigger className="h-8 text-sm">
                <SelectValue placeholder="Small select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">옵션 1</SelectItem>
                <SelectItem value="2">옵션 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Default</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Default select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">옵션 1</SelectItem>
                <SelectItem value="2">옵션 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Large</Label>
            <Select>
              <SelectTrigger className="h-12 text-lg">
                <SelectValue placeholder="Large select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">옵션 1</SelectItem>
                <SelectItem value="2">옵션 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ShowcaseSection>

      {/* Full Width */}
      <ShowcaseSection
        title="전체 너비"
        description="가로 전체를 차지하는 select"
      >
        <div className="space-y-2">
          <Label>전체 너비 Select</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="전체 너비 select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">옵션 1</SelectItem>
              <SelectItem value="2">옵션 2</SelectItem>
              <SelectItem value="3">옵션 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ShowcaseSection>

      {/* Country Select Example */}
      <ShowcaseSection
        title="국가 선택 예시"
        description="실제 사용 예시 - 국가 선택"
      >
        <div className="space-y-2">
          <Label>거주 국가</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="국가를 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>아시아</SelectLabel>
                <SelectItem value="kr">🇰🇷 대한민국</SelectItem>
                <SelectItem value="jp">🇯🇵 일본</SelectItem>
                <SelectItem value="cn">🇨🇳 중국</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>유럽</SelectLabel>
                <SelectItem value="uk">🇬🇧 영국</SelectItem>
                <SelectItem value="fr">🇫🇷 프랑스</SelectItem>
                <SelectItem value="de">🇩🇪 독일</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>아메리카</SelectLabel>
                <SelectItem value="us">🇺🇸 미국</SelectItem>
                <SelectItem value="ca">🇨🇦 캐나다</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </ShowcaseSection>

      {/* Time Zone Example */}
      <ShowcaseSection
        title="시간대 선택"
        description="시간대를 선택하는 예시"
      >
        <div className="space-y-2">
          <Label>시간대</Label>
          <Select defaultValue="asia-seoul">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asia-seoul">(GMT+09:00) 서울</SelectItem>
              <SelectItem value="asia-tokyo">(GMT+09:00) 도쿄</SelectItem>
              <SelectItem value="asia-shanghai">(GMT+08:00) 상하이</SelectItem>
              <SelectItem value="europe-london">(GMT+00:00) 런던</SelectItem>
              <SelectItem value="america-newyork">
                (GMT-05:00) 뉴욕
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ShowcaseSection>
    </div>
  );
}
