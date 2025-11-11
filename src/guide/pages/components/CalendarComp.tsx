import { ShowcaseSection } from "./Showcase-section";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarComp() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: undefined,
  });
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(),
  ]);

  return (
    <div className="space-y-6">
      {/* Basic Calendar */}
      <ShowcaseSection title="기본 캘린더" description="기본 calendar 컴포넌트">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </ShowcaseSection>

      {/* Calendar with Selected Date Display */}
      <ShowcaseSection
        title="선택된 날짜 표시"
        description="선택한 날짜를 표시하는 캘린더"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        {date && (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">선택된 날짜:</p>
            <p className="font-semibold">
              {date.toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </p>
          </div>
        )}
      </ShowcaseSection>

      {/* Range Calendar */}
      <ShowcaseSection
        title="범위 선택 캘린더"
        description="시작일과 종료일을 선택하는 캘린더"
      >
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={(range) =>
            setDateRange(range || { from: undefined, to: undefined })
          }
          className="rounded-md border"
        />
        {dateRange?.from && (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">선택된 기간:</p>
            <p className="font-semibold">
              {dateRange.from.toLocaleDateString("ko-KR")}
              {dateRange.to && ` - ${dateRange.to.toLocaleDateString("ko-KR")}`}
            </p>
            {dateRange.to && (
              <p className="text-sm text-muted-foreground">
                총{" "}
                {Math.ceil(
                  (dateRange.to.getTime() - dateRange.from.getTime()) /
                    (1000 * 60 * 60 * 24)
                ) + 1}
                일
              </p>
            )}
          </div>
        )}
      </ShowcaseSection>

      {/* Multiple Dates Calendar */}
      <ShowcaseSection
        title="다중 날짜 선택"
        description="여러 날짜를 선택할 수 있는 캘린더"
      >
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDates}
          className="rounded-md border"
        />
        {multipleDates && multipleDates.length > 0 && (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground mb-2">
              선택된 날짜 ({multipleDates.length}개):
            </p>
            <div className="flex flex-wrap gap-2">
              {multipleDates.map((d, i) => (
                <span
                  key={i}
                  className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded"
                >
                  {d.toLocaleDateString("ko-KR", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              ))}
            </div>
          </div>
        )}
      </ShowcaseSection>

      {/* Disabled Dates */}
      <ShowcaseSection
        title="특정 날짜 비활성화"
        description="과거 날짜를 선택할 수 없는 캘린더"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => date < new Date()}
          className="rounded-md border"
        />
      </ShowcaseSection>

      {/* Weekend Disabled */}
      <ShowcaseSection
        title="주말 비활성화"
        description="주말(토요일, 일요일)을 선택할 수 없는 캘린더"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
          className="rounded-md border"
        />
      </ShowcaseSection>

      {/* Month Navigation */}
      <ShowcaseSection
        title="월별 탐색"
        description="여러 달을 동시에 표시하는 캘린더"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          className="rounded-md border"
        />
      </ShowcaseSection>

      {/* Booking System Example */}
      <ShowcaseSection
        title="예약 시스템 예시"
        description="실제 사용 예시 - 호텔/항공권 예약"
      >
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium mb-2">체크인 / 체크아웃</p>
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={(range) =>
                  setDateRange(range || { from: undefined, to: undefined })
                }
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-3">예약 정보</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">체크인:</span>
                    <span className="font-medium">
                      {dateRange?.from?.toLocaleDateString("ko-KR") ||
                        "날짜 선택"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">체크아웃:</span>
                    <span className="font-medium">
                      {dateRange?.to?.toLocaleDateString("ko-KR") ||
                        "날짜 선택"}
                    </span>
                  </div>
                  {dateRange?.from && dateRange?.to && (
                    <>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            숙박 일수:
                          </span>
                          <span className="font-medium">
                            {Math.ceil(
                              (dateRange.to.getTime() -
                                dateRange.from.getTime()) /
                                (1000 * 60 * 60 * 24)
                            )}
                            박
                          </span>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span className="text-muted-foreground">
                            1박 요금:
                          </span>
                          <span className="font-medium">₩150,000</span>
                        </div>
                        <div className="flex justify-between mt-2 pt-2 border-t font-semibold">
                          <span>총 금액:</span>
                          <span>
                            ₩
                            {(
                              Math.ceil(
                                (dateRange.to.getTime() -
                                  dateRange.from.getTime()) /
                                  (1000 * 60 * 60 * 24)
                              ) * 150000
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Custom Footer */}
      <ShowcaseSection
        title="커스텀 푸터"
        description="하단에 추가 정보가 있는 캘린더"
      >
        <div className="space-y-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            footer={
              <div className="mt-4 p-3 bg-muted rounded-md text-sm text-center">
                {date ? (
                  <>
                    선택: <strong>{date.toLocaleDateString("ko-KR")}</strong>
                  </>
                ) : (
                  "날짜를 선택해주세요"
                )}
              </div>
            }
          />
        </div>
      </ShowcaseSection>
    </div>
  );
}
