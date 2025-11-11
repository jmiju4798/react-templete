import { useState, useEffect, useRef } from "react";

interface PreviewTooltipProps {
  pageId: string;
  children: React.ReactNode;
}

export function PreviewTooltip({ pageId, children }: PreviewTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    // 약간의 지연을 두고 미리보기 표시 (즉시 표시 방지)
    timeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    // hover 종료 시 타임아웃 클리어
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // 마우스 위치 기준 오른쪽 위에 배치
    setPosition({
      x: e.clientX + 10,
      y: e.clientY + 300,
    });
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // 툴팁 내부에서 스크롤 이벤트가 발생하면 전파를 막음
  const handleTooltipWheel = (e: React.WheelEvent) => {
    e.stopPropagation();

    const iframeContainer = tooltipRef.current?.querySelector(
      ".iframe-scroll-container"
    );
    if (iframeContainer) {
      iframeContainer.scrollTop += e.deltaY;
    }
  };

  const handleTooltipMouseEnter = () => {
    // 툴팁 위에 마우스가 있으면 hover 상태 유지
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleTooltipMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ display: "inline-block" }}
      >
        {children}
      </div>

      {isHovered && (
        <div
          ref={tooltipRef}
          className="fixed z-[9999]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translateY(-100%)",
          }}
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
          onWheel={handleTooltipWheel}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl border-2 border-gray-300 dark:border-slate-600 overflow-hidden">
            <div className="bg-slate-600 dark:bg-slate-700 px-3 py-2">
              <p className="text-white text-xs font-semibold">{pageId}</p>
            </div>
            <div
              className="iframe-scroll-container w-[400px] h-[600px] overflow-y-auto overflow-x-hidden"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#888 #f1f1f1",
              }}
            >
              <iframe
                src={`/pub/${pageId}`}
                className="w-full border-0"
                style={{
                  border: "none",
                  minHeight: "100%",
                  height: "auto",
                }}
                title={`${pageId} 미리보기`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
