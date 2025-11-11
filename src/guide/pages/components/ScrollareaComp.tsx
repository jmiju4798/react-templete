import { ShowcaseSection } from "./Showcase-section";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function ScrollAreaComp() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <div className="space-y-6">
      {/* Basic ScrollArea */}
      <ShowcaseSection
        title="기본 스크롤 영역"
        description="기본 scroll area 컴포넌트"
      >
        <ScrollArea className="h-72 w-full rounded-md border p-4">
          <div className="space-y-4">
            <h3 className="font-semibold">스크롤 가능한 콘텐츠</h3>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="text-sm">
                이것은 {i + 1}번째 단락입니다. 스크롤 영역 내에서 콘텐츠가 많을
                때 자동으로 스크롤바가 나타납니다.
              </p>
            ))}
          </div>
        </ScrollArea>
      </ShowcaseSection>

      {/* Vertical ScrollArea */}
      <ShowcaseSection
        title="세로 스크롤"
        description="세로로만 스크롤되는 영역"
      >
        <ScrollArea className="h-96 w-full rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">태그 목록</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm py-2">{tag}</div>
                <Separator />
              </div>
            ))}
          </div>
        </ScrollArea>
      </ShowcaseSection>

      {/* Horizontal ScrollArea */}
      <ShowcaseSection
        title="가로 스크롤"
        description="가로로만 스크롤되는 영역"
      >
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="shrink-0 w-40 h-40 rounded-md bg-muted flex items-center justify-center"
              >
                <span className="text-2xl font-semibold">{i + 1}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </ShowcaseSection>

      {/* Both Directions */}
      <ShowcaseSection
        title="양방향 스크롤"
        description="가로 세로 모두 스크롤 가능"
      >
        <ScrollArea className="h-96 w-full rounded-md border">
          <div className="p-4 w-[800px]">
            <h4 className="mb-4 text-sm font-medium leading-none">
              넓은 콘텐츠
            </h4>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="text-sm mb-2">
                {i + 1}. 이것은 매우 긴 텍스트 줄입니다. 가로로 스크롤해야 전체
                내용을 볼 수 있습니다. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            ))}
          </div>
        </ScrollArea>
      </ShowcaseSection>

      {/* Compact ScrollArea */}
      <ShowcaseSection
        title="컴팩트 스크롤 영역"
        description="작은 높이의 스크롤 영역"
      >
        <ScrollArea className="h-48 w-full rounded-md border p-4">
          <div className="space-y-2">
            <h4 className="font-medium">알림 목록</h4>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">알림 제목 {i + 1}</p>
                  <p className="text-sm text-muted-foreground">
                    알림 내용입니다. 여기에 상세 메시지가 표시됩니다.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </ShowcaseSection>

      {/* Chat Example */}
      <ShowcaseSection
        title="채팅 예시"
        description="실제 사용 예시 - 채팅 인터페이스"
      >
        <div className="rounded-md border">
          <div className="border-b p-4">
            <h3 className="font-semibold">채팅방</h3>
          </div>
          <ScrollArea className="h-96">
            <div className="p-4 space-y-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      i % 2 === 0
                        ? "bg-muted"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm">메시지 내용 {i + 1}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {new Date().toLocaleTimeString("ko-KR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
